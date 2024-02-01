import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "react-modal";
import BookingForm from "./BookingForm";

function ShowDetails({ match }) {
  const [show, setShow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);


  const { id } = useParams();

  const handleOpen = () => {
    setIsOpen(true);
    setShowBookingForm(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        console.log(data);
        setShow(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {show && (
        <div className="flex flex-col rounded-lg bg-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:w-full md:flex-row">
          <img
            className="h-30 w-full rounded-t-lg object-cover md:h-[500px] md:w-[800px] md:rounded-none md:rounded-l-lg"
            src={show?.image?.original}
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            <span className="text-black text-bold">Movie Name: </span>{show?.name}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              <span className="text-black text-bold">Summary: </span>{show?.summary}
            </p>
            <p className="text-md text-neutral-700 dark:text-neutral-300">
            <span className="text-black text-bold">Language:</span> {show?.language}
            </p>
            <div className="mt-10">
            <button className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white bg-red-700 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" onClick={handleOpen}>Open Modal</button>
            <Modal isOpen={isOpen} onRequestClose={handleClose} className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center mx-auto'>
              <BookingForm movieName={show.name} language={show.language} runTime={show.runtime} price={"350"} />
              <div
          className="bg-red-600 w-[25px] h-[25px] top-12 right-[460px] rounded-full flex items-center justify-center text-white text-sm font-semibold absolute cursor-pointer"
          onClick={handleClose}
        >
          x
        </div>
            </Modal>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowDetails;
