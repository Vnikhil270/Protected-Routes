import React from "react";
import Navbar from "../components/Navbar";
import "../styles/home.scss";
function Home() {
  return (
    <>
      <Navbar />
      <div>
        <header>
          <h1>Assignment for WebReinvent Technology</h1>
        </header>
        <main>
          <p>
            Welcome to my simple React home page! This app is created with
            Reactjs js with included functionality of
          </p>
          <ul>
            <li>React Router Dom - for Routing</li>
            <li>React Hook Form - For state handling</li>
            <li>Tailwind css</li>
            <li>
              I have used Login and Signup api from prebuild api provider i.e{" "}
              <a href="https://mock-api.binaryboxtuts.com" style={{color:"blue", textDecoration:"underline"}}>
                https://mock-api.binaryboxtuts.com
              </a>
            </li>
            <li>
              I have implemented middleware using Higher Order Component for the dashboard route and file for this protected route is in PrivateRoute.js
            </li>
          </ul>
          <img src="https://via.placeholder.com/300" alt="Placeholder" />
        </main>
      </div>
    </>
  );
}

export default Home;
