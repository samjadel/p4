import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Home from "./Home";
import SneakerList from "./SneakerList";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sneakers, setSneakers] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsValid(true);
        setUser(data);
      })
      .catch((error) => {
        setError("An error occurred, please try again later.");
      });
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsValid(true);
        setUser(data);
      })
      .catch((error) => {
        setError("Invalid email or password.");
      });
  };

  const handleLogout = () => {
    setUser(null);
  };

  useEffect(() => {
    fetch("http://localhost:3000/sneakers")
      .then((res) => res.json())
      .then((data) => setSneakers(data));
  }, []);

  return (
    <div className="app">
      <Header />
      {user ? (
        <div className="sneaker-tinder">
          <h1>Welcome, {user.email}</h1>
          <button onClick={handleLogout}>Logout</button>
          <SneakerList sneakers={sneakers} />
        </div>
      ) : (
        <div>
          <Home />
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            error={error}
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
