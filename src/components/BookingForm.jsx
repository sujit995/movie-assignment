import React from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm({ movieName, language, runTime, price }) {
  const navigate = useNavigate();
  
  const handleCashOnDelivery = () => {
    alert("Yout Ticket Booked")
    navigate('/')
  }
  return (
    <div className="w-[450px] p-20 bg-white relative">
    <form className="h-auto" onSubmit={handleCashOnDelivery}>
      <fieldset>
        <legend>Movie Name</legend>
        <input
          className="w-[200px] h-[30px] bg-gray-300 focus:outline-none p-7"
          type="text"
          readOnly
          required
          value={movieName}
        />
      </fieldset>
      <fieldset>
      <legend>Language</legend>
        <input
          className="w-[200px] h-[30px] bg-gray-300 focus:outline-none p-7"
          type="text"
          readOnly
          required
          value={language}
        />
      </fieldset>
      <fieldset>
      <legend>Run Time</legend>
        <input
          className="w-[200px] h-[30px] bg-gray-300 focus:outline-none p-7"
          type="number"
          readOnly
          required
          value={runTime}
        />
      </fieldset>
      <fieldset>
      <legend>Price</legend>
        <input
          className="w-[200px] h-[30px] bg-gray-300 focus:outline-none p-7"
          type="number"
          readOnly
          required
          value={price}
        />
      </fieldset>
      <button className="h-[28px] w-[120px] bg-green-500 border-none rounded-md shadow-md text-white font-medium cursor-pointer mt-2">
        Submit
      </button>
    </form>
    </div>
  );
}

export default BookingForm;