import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewEvent from "./pages/NewEventPage";
import MainPage from "./pages/MainPage";
import SharedLayout from "./pages/SharedLayout";
import Payment from "./pages/Payment";
import SpecificEventPage from "./pages/SpecificEventPage";
function App() {
  return (
    <BrowserRouter basename="/HCI-Project-Zport">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="home" element={<MainPage />} />
          <Route path="home/specific" element={<SpecificEventPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/payment" element={<Payment />} />
          <Route path="addEvent" element={<NewEvent />} />
        </Route>
        <Route index element={<Landing />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
