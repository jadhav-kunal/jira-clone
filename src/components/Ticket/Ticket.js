import React from 'react';
import './ticket.css';

const Ticket = ({ name, description }) => {
  return (
    <div className="ticket_container">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Ticket;
