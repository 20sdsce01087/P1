import React from 'react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Orders', value: '₹126,500', change: 'Compared to Oct 2023' },
    { title: 'Active Orders', value: '₹126,500', change: 'Compared to Oct 2023' },
    { title: 'Completed Orders', value: '₹126,500', change: 'Compared to Oct 2023' },
    { title: 'Return Orders', value: '₹126,500', change: 'Compared to Oct 2023' },
  ];

  const recentOrders = [
    { id: '#25426', product: 'T-shirt', date: 'Nov 8th,2023', customer: 'Kavin', status: 'Delivered', amount: '₹540.00' },
    { id: '#25425', product: 'Paint', date: 'Nov 7th,2023', customer: 'Komal', status: 'Canceled', amount: '₹540.00' },
    { id: '#25424', product: 'Jens', date: 'Nov 6th,2023', customer: 'Nikhil', status: 'Delivered', amount: '₹800.00' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
            <p className="text-2xl font-semibold mt-2">{stat.value}</p>
            <p className="text-gray-600 text-sm mt-2">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Product</th>
                  <th className="text-left py-3 px-4">Order ID</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Customer Name</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-right py-3 px-4">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b last:border-b-0">
                    <td className="py-3 px-4">{order.product}</td>
                    <td className="py-3 px-4">{order.id}</td>
                    <td className="py-3 px-4">{order.date}</td>
                    <td className="py-3 px-4">{order.customer}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          order.status === 'Delivered'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;