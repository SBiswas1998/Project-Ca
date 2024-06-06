import React from 'react';

const TimeSlots = ({ timeSlots, bookedSlots, selectTimeSlot, selectedDate }) => {
  return (
    <div>
      {timeSlots.map((time, index) => {
        // Determine if the slot is booked based on provided bookedSlots and selectedDate
        let isBooked = false;
        if (selectedDate) {
          isBooked = bookedSlots.some(slot => slot.date.toDateString() === selectedDate.toDateString() && slot.time === time);
        } else {
          isBooked = bookedSlots && bookedSlots.includes(time);
        }

        // Apply different styling if the slot is booked
        const slotStyle = {
          margin: '5px',
          padding: '10px',
          border: 'none',
          backgroundColor: isBooked ? 'grey' : '#05044D',
          color: 'white',
          cursor: isBooked ? 'not-allowed' : 'pointer',
          borderRadius: '5px',
        };

        return (
          <button
            key={index}
            onClick={() => !isBooked && selectTimeSlot(time)}
            disabled={isBooked}
            style={slotStyle}
          >
            {time}
          </button>
        );
      })}
    </div>
  );
};

export default TimeSlots;