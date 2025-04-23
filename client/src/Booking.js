import React from 'react';
import { Table } from 'react-bootstrap';

const Bookings = () => {
  const bookings = [
    { id: 1, user: 'John Doe', car: 'BMW', service: 'Oil Change', date: '2024-11-10' },
  ];

  return (
    <div>
      <h2>Bookings</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Car</th>
            <th>Service</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.user}</td>
              <td>{booking.car}</td>
              <td>{booking.service}</td>
              <td>{booking.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Bookings;
