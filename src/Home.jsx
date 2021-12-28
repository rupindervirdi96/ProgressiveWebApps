import React from "react";
import { useSelector } from "react-redux";

function Home(props) {
  const { appName, username, password } = useSelector((state) => ({
    appName: state?.app?.appName,
    username: state?.app?.username,
    password: state?.app?.password,
  }));
  return (
    <div>
      <h3>{appName}</h3>
      <h3>Welcome, {username}</h3>
    </div>
  );
}

export default Home;
