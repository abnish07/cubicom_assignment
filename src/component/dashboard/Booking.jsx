import React from 'react'
import './Dashboard.css';
import BookingCard from './BookingCard';


// Function for booking box in Dashboard. I am reusing the component here

function Booking(){

    return(

        <>
            <BookingCard 
                number="121"
                iconImage="./images/icon_booking.png"
                title="Booking"
                noOfWays="No of Ways"
            />

            <BookingCard 
                number="55"
                iconImage="./images/icon_ofd.png"
                title="OFD"
                noOfWays="out for Delivery"
            />

            <BookingCard 
                number="430"
                iconImage="./images/icon_del.png"
                title="DEL"
                noOfWays="Delivered"
            />
            <BookingCard 
                number="23"
                iconImage="./images/icon_del.png"
                title="UNDEL"
                noOfWays="Undelivered"
            />
        </>
    )
}

export default Booking;