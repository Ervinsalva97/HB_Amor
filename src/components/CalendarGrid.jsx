// Import necessary modules
import React from 'react';

const CalendarGrid = () => {
  const currentDay = 5; // Updated currentDay to enable days 1-5 of March
  const daysInMonth = new Date(2026, 3, 0).getDate(); // March 2026

  return (
    <div>
      <h1>Calendar for March 2026</h1>
      <div className="calendar-grid">
        {[...Array(daysInMonth)].map((_, index) => (
          <div key={index + 1} className={`day ${index + 1 <= currentDay ? 'active' : ''}`}>{index + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;