import React from "react";

export default function Footer() {
  return (
    <div>
      <nav
        className="navbar-expand-lg navbar-dark bg-dark text-center border-top fixed-bottom"
        style={{
          height: "40px"
        }}
      >
        <p className="text-light">&copy; WeatherApp - WeatherApp 2021</p>
      </nav>
    </div>
  );
}
