import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import ToyList from "./components/ToyList";
import ListingDetail from "./components/ListingDetail";
import LoginPage from "./components/LoginPage";
import UserProfile from "./components/UserProfile";
import Messages from "./components/Messages";
import CreateListing from "./components/CreateListing";
import NotFoundPage from "./components/NotFoundPage";

import { getAllData } from "./util/index";

const URL = "http://localhost:8000/api/v1/";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const myData = await getAllData(URL);
      setMessage(myData.data);
    })();

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <>
      <h1>{message}</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" component={ToyList} />
          <Route path="/toys" component={ToyList} />
          <Route path="/toys/:id" component={ListingDetail} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/messages" component={Messages} />
          <Route path="/create" component={CreateListing} />
          <Route component={NotFoundPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
