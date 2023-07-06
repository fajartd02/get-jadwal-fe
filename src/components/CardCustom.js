import React from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { textPurple } from "../constant";

function CardCustom(props) {
  const { day, data } = props;
  const length = data.length;
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
          style={{ cursor: "pointer", padding: "10px", paddingLeft: "20px" }}
        >
          <h4 data-cy={`card-title-${day}`} style={{ fontWeight: "bold" }}>
            {day}
          </h4>
          {length > 0 ? (
            <p data-cy={`card-desc-${day}`} style={{ color: textPurple }}>
              {length} Mata Kuliah
            </p>
          ) : (
            <p data-cy={`card-desc-${day}`} style={{ color: textPurple }}>
              Belum ada mata kuliah
            </p>
          )}
        </Container>
      </Card>

      {length > 0 && (
        <>
          <Card style={{ padding: "8px", marginTop: "24px" }}>
            {data.map((item) => {
              return (
                <Card.Header
                  style={{
                    margin: "6px",
                    fontWeight: "normal",
                    fontSize: "16px",
                  }}
                  className="rounded"
                  key={item.id}
                >
                  {item.title}
                </Card.Header>
              );
            })}
          </Card>
        </>
      )}
    </>
  );
}

export default CardCustom;
