import React from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CardCustom(props) {
  const { day } = props;
  const navigate = useNavigate();
  const handleDetailSchedule = (day) => {
    navigate("/schedule/" + day);
  };

  return (
    <>
      <Card data-cy="card-day">
        <Container
          onClick={(e) => {
            e.preventDefault();
            handleDetailSchedule(day);
          }}
          style={{ cursor: "pointer" }}
        >
          <h5 data-cy={`card-title-${day}`}>{day} </h5>
          <p data-cy={`card-desc-${day}`}>Desc</p>
        </Container>
      </Card>
    </>
  );
}

export default CardCustom;
