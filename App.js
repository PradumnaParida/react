import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";



const App = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  const submitHandler = (e) => {
    if (email != "" && password != "") {
      e.preventDefault();
      console.log(data);
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Enter your email address"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <input type="submit" name="submit" />
      </form>
    </div>
  );
};

export default App;
