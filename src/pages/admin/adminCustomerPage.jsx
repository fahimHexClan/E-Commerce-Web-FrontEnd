import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaDownload } from "react-icons/fa";
import { saveAs } from "file-saver";

export default function AdminCustomerPage() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [updateData, setUpdateData] = useState({ status: "", notes: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [stats, setStats] = useState({ total: 0, newThisMonth: 0, active: 0 });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/customers`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCustomers(res.data);
        setLoading(false);
        calculateStats(res.data);
      })
      .catch(() => {
        toast.error("Failed to fetch customers");
        setLoading(false);
      });
  }, []);

  const calculateStats = (data) => {
    const now = new Date();
    const thisMonth = now.getMonth();
    const thisYear = now.getFullYear();
    const newThisMonth = data.filter(
      (c) => new Date(c.createdAt).getMonth() === thisMonth && new Date(c.createdAt).getFullYear() === thisYear
    ).length;
    const active = data.filter((c) => c.status === "active").length;
    setStats({ total: data.length, newThisMonth, active });
  };

  const handleViewDetails = (customer) => {
    setSelectedCustomer(customer);
    setDetailModalVisible(true);
  };

  const handleUpdateCustomer = (customer) => {
    setSelectedCustomer(customer);
    setUpdateData({ status: customer.status || "active", notes: customer.notes || "" });
    setUpdateModalVisible(true);
  };

  const closeModals = () => {
    setSelectedCustomer(null);
    setUpdateModalVisible(false);
    setDetailModalVisible(false);
  };

  const handleUpdate = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Unauthorized");
      return;
    }

    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/customers/${selectedCustomer._id}`,
        { status: updateData.status, notes: updateData.notes },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        toast.success("Customer updated");
        setCustomers((prev) =>
          prev.map((c) => (c._id === selectedCustomer._id ? { ...c, ...res.data.customer } : c))
        );
        closeModals();
      })
      .catch(() => toast.error("Update failed"));
  };

  const exportToCSV = () => {
    const csv = [
      ["Customer ID", "Name", "Email", "Status", "Phone", "Address", "Notes"],
      ...customers.map((c) => [
        c._id,
        `${c.firstName} ${c.lastName}`,
        c.email,
        c.status || "active",
        c.phone || "N/A",
        c.address || "N/A",
        c.notes || "None",
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "customers.csv");
    toast.success("CSV exported");
  };

  const filteredCustomers = customers.filter((customer) => {
    const fullName = `${customer.firstName} ${customer.lastName}`;
    const matchesSearch =
      fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="text-center">
      <header className="bg-white shadow-lg px-8 py-4 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">Customer Management</h1>
        <p className="text-sm text-gray-600">Manage your customer base effectively</p>
      </header>
      <main className="p-8 overflow-y-auto flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xs font-medium text-gray-500 uppercase">Total Customers</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xs font-medium text-gray-500 uppercase">New This Month</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.newThisMonth}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xs font-medium text-gray-500 uppercase">Active Customers</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.active}</p>
          </div>
        </div>

        <div className="mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
            <option value="banned">Banned</option>
          </select>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center gap-2"
            onClick={exportToCSV}
          >
            <FaDownload /> Export CSV
          </button>
        </div>

        {loading ? (
          <p>Loading customers...</p>
        ) : filteredCustomers.length === 0 ? (
          <p>No customers found</p>
        ) : (
          <table className="w-full max-w-4xl border border-gray-200 shadow-sm rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border-b text-left">Customer ID</th>
                <th className="p-2 border-b text-left">Name</th>
                <th className="p-2 border-b text-left">Email</th>
                <th className="p-2 border-b text-left">Status</th>
                <th className="p-2 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer._id} className="hover:bg-gray-50">
                  <td className="p-2 border-b">{customer._id}</td>
                  <td className="p-2 border-b">{`${customer.firstName} ${customer.lastName}`}</td>
                  <td className="p-2 border-b">{customer.email}</td>
                  <td className="p-2 border-b">{customer.status || "active"}</td>
                  <td className="p-2 border-b">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-blue-600"
                      onClick={() => handleViewDetails(customer)}
                    >
                      View
                    </button>
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                      onClick={() => handleUpdateCustomer(customer)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {detailModalVisible && selectedCustomer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold mb-4">Customer Details</h2>
              <p><span className="font-semibold">ID:</span> {selectedCustomer._id}</p>
              <p><span className="font-semibold">Name:</span> {`${selectedCustomer.firstName} ${selectedCustomer.lastName}`}</p>
              <p><span className="font-semibold">Email:</span> {selectedCustomer.email}</p>
              <p><span className="font-semibold">Status:</span> {selectedCustomer.status || "active"}</p>
              <p><span className="font-semibold">Phone:</span> {selectedCustomer.phone || "N/A"}</p>
              <p><span className="font-semibold">Address:</span> {selectedCustomer.address || "N/A"}</p>
              <p><span className="font-semibold">Notes:</span> {selectedCustomer.notes || "None"}</p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  onClick={closeModals}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {updateModalVisible && selectedCustomer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold mb-4">Update Customer</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium">Status</label>
                <select
                  value={updateData.status}
                  onChange={(e) => setUpdateData({ ...updateData, status: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                  <option value="banned">Banned</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Notes</label>
                <textarea
                  value={updateData.notes}
                  onChange={(e) => setUpdateData({ ...updateData, notes: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows="4"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                  onClick={closeModals}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}