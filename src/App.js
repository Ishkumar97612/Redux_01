import React from "react";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Navbar from "./Components/Navbar";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const App = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <Navbar />
      {user ? <Logout /> : <Login />}
    </div>
  );
};

export default App;
