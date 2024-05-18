// src/components/Login.js
import { Button, Card, CardContent, TextField } from "@mui/material";
import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem",
      }}
    >
      <Card
        sx={{ maxWidth: 600 }}
        style={{
          padding: "1.5rem",
        }}
      >
        <CardContent>
          <h2
            style={{
              color: "red",
              fontSize: "1.5rem",
              textAlign: "center",
              marginTop: "-12px",
            }}
          >
            tailwebs.
          </h2>
          <TextField
            fullWidth
            label="UserName"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <br />
          <br />
          <TextField
            fullWidth
            label="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Button variant="contained" type="submit">
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default Login;
