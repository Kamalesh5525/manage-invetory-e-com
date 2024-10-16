import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../redux/orderSlice'; // Assuming you have an orderSlice for managing orders

const OrderHistory = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.items); // Access orders from Redux store

  useEffect(() => {
    // Fetch orders when the component mounts
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Order History</h2>
      {orders.length === 0 ? (
        <div className="alert alert-warning text-center" role="alert">
          No orders found.
        </div>
      ) : (
        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{new Date(order.date).toLocaleDateString()}</td> {/* Format the date */}
                <td>
                  <span className={`badge ${order.status === 'Delivered' ? 'bg-success' : 'bg-danger'}`}>
                    {order.status}
                  </span>
                </td>
                <td>${order.total.toFixed(2)}</td> {/* Format the total */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderHistory;
