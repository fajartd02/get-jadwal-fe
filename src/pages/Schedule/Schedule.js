import React from "react";
import NavbarCustom from "../../components/Navbar";
import { useParams } from "react-router-dom";

function Schedule() {
  const { day } = useParams();
  console.log(day);
  return (
    <>
      <NavbarCustom />
      <h1>Schedule</h1>
      <h1>{day}</h1>
    </>
  );
}

export default Schedule;
