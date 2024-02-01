import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";
import Navbar from "./components/Navbar";
// import BookingForm from "./components/BookingForm";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <div className="mx-[50px] my-[20px]">
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/showdetails/:id" element={<ShowDetails />} />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
