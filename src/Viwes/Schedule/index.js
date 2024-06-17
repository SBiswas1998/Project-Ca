import React, { useState, useEffect } from "react";
import ResHeader from "../../components/ResponsiveMemu/Header";
import { Footer } from "../../components/Layout";
import DatePicker from "../../components/DatePicker";
import TimeSlots from "../../components/TimeSlots";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { bookingSlots } from "../../actions/customer";
import toast from "../../components/common/toast";
import Swal from "sweetalert2";
import { Container, Row, Col } from "react-bootstrap"; // Import react-bootstrap components

const Schedule = () => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const timeSlots = [
    "10:00AM",
    "10:30AM",
    "11:00AM",
    "11:30AM",
    "12:00PM",
    "12:30PM",
    "1:00PM",
    "1:30PM",
    "2:00PM",
    "2:30PM",
    "3:00PM",
    "3:30PM",
    "4:00PM",
    "4:30PM",
    "5:00PM",
    "5:30PM",
    "6:00PM",
    "6:30PM",
  ];

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    setIsModalVisible(true);
  };

  const handleTimeSlotSelection = (time) => {
    setSelectedTime(time);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBooking = () => {
    if (name === "" || phone === "" || email === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid input",
      });
      return false;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const parsedDate = new Date(selectedDate);
    let bookData = {
      name: name,
      email: email,
      phone: phone,
      date: parsedDate,
      time: selectedTime,
    };

    dispatch(bookingSlots(bookData));
    setBookedSlots([...bookedSlots, { date: parsedDate, time: selectedTime }]);

    const dateKey = selectedDate.toISOString().split("T")[0];
    const bookedSlotsForDate =
      JSON.parse(localStorage.getItem("bookedSlots")) || {};
    bookedSlotsForDate[dateKey] = bookedSlotsForDate[dateKey] || [];
    bookedSlotsForDate[dateKey].push(selectedTime);
    localStorage.setItem("bookedSlots", JSON.stringify(bookedSlotsForDate));

    Swal.fire({
      title: "Success!",
      text: "Booking successfully",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      setIsModalVisible(false);
      clearFormFields();
    });
  };

  const clearFormFields = () => {
    setName("");
    setEmail("");
    setPhone("");
  };

  // Load booked slots from localStorage on component mount
  useEffect(() => {
    const storedBookedSlots =
      JSON.parse(localStorage.getItem("bookedSlots")) || {};
    const bookedSlotsArray = [];
    Object.keys(storedBookedSlots).forEach((dateKey) => {
      storedBookedSlots[dateKey].forEach((time) => {
        bookedSlotsArray.push({ date: new Date(dateKey), time });
      });
    });
    setBookedSlots(bookedSlotsArray);
  }, []);

  return (
    <>
      <ResHeader />
      <div className="container-calendar">
        <div className="product-details">
          <h1>30 Minute Accounting Consultation</h1>
          <p>
            One of our accounting professionals will reach out to you by phone
            for this call.
          </p>
        </div>
        <div className="product-image">
          <DatePicker
            selectedDate={selectedDate}
            setSelectedDate={handleDateSelection}
            className="date-picker"
          />
        </div>
      </div>

      <Modal
        title="Book Appointment"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        className="booking-modal"
      >
        <div className="booking-form">
          {selectedDate && (
            <>
              <p>Selected Date: {selectedDate.toDateString()}</p>
              <p>Selected Time: {selectedTime}</p>
            </>
          )}

          <TimeSlots
            timeSlots={timeSlots}
            bookedSlots={bookedSlots}
            selectTimeSlot={handleTimeSlotSelection}
            selectedDate={selectedDate}
          />

          <div className="input">
            <input
              type="text"
              className="input-field"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="input-label">Full name</label>
          </div>
          <div className="input">
            <input
              type="text"
              className="input-field"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="input-label">Email</label>
          </div>
          <div className="input">
            <input
              type="text"
              className="input-field"
              name="phone"
              value={phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setPhone(value);
              }}
              pattern="[0-9]*"
              required
            />
            <label className="input-label">Phone</label>
          </div>
          <button className="action-button" onClick={handleBooking}>
            Book Appointment
          </button>
        </div>
      </Modal>

      <Footer />
    </>
  );
};

export default Schedule;
