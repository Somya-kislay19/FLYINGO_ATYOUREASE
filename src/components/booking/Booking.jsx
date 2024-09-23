import React, { useState } from 'react';
import './Booking.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const navigate = useNavigate();


    const seats = [
        '1A', '1B', '1C', 'gap', '1D', '1E', '1F',
        '2A', '2B', '2C', 'gap', '2D', '2E', '2F',
        '3A', '3B', '3C', 'gap', '3D', '3E', '3F',
        '4A', '4B', '4C', 'gap', '4D', '4E', '4F',
        '5A', '5B', '5C', 'gap', '5D', '5E', '5F',
    ];

    const handleSeatSelection = (seat) => {
        if (seat !== 'gap') {
            setSelectedSeats(prevSelectedSeats => 
                prevSelectedSeats.includes(seat) 
                    ? prevSelectedSeats.filter(s => s !== seat) 
                    : [...prevSelectedSeats, seat]
            );
        }
    };

    const handleBooking = () => {
        if (selectedSeats.length === 0) {
            toast.error("Please select at least one seat.");
        } else {
            navigate('/checkout', { state: { selectedSeats } });
        }
    };

    return (
        <div className="flight-details">
            <ToastContainer position="bottom-right"/>
            <h1>Flight: AirXYZ123</h1>
            <p>Departure: Delhi, India</p>
            <p>Arrival: Mumbai, India</p>
            <p>Date: 25th July 2024</p>
            
            <h2>Choose your seats</h2>
            <div className="seats">
                {seats.map(seat => (
                    <div
                        key={seat}
                        className={`seat ${seat === 'gap' ? 'seat-gap' : selectedSeats.includes(seat) ? 'selected' : ''}`}
                        onClick={() => handleSeatSelection(seat)}
                    >
                        {seat !== 'gap' && seat}
                    </div>
                ))}
            </div>
            
            <button onClick={handleBooking}>Book Seats</button>
        </div>
    );
};

export default Booking;