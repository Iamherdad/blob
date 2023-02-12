import React from "react";
import Navbar from "../../components/navbar";
import Welcome from "../welcome";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Welcome />
    </div>
  );
}
