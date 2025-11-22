import React from "react";
import Sidebar from "./components/Sidebar";
import AnimatedRouter from "./router";

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main">
        <AnimatedRouter />
      </div>
    </div>
  );
}
