import React from 'react';
import PropTypes from 'prop-types';

const CalendarGrid = () => {
    const currentDay = 5;
    return (
        <div>
            <h1>Calendar Grid</h1>
            <p>Current Day: {currentDay}</p>
        </div>
    );
};

CalendarGrid.propTypes = {
    // add any prop types here if needed
};

export default CalendarGrid;