import React, { useContext } from "react";
import { Container, LeftSide, RightSide } from "./styled";
import Form from "../components/form/Form";
import DataContext from "../contexts/dataContext";
import { getDate } from "../utility/index";

function Home() {
  const { data, setData } = useContext(DataContext);
  const date = data.shippingDay;
  const shdate = getDate(date);
  console.log(shdate);
  return (
    <Container>
      <LeftSide>
        <h2>The Company</h2>
        <h1>Shipping Time Calculater</h1>
        <Form />
        {date === null ? (
          <p>
            Please enter your order information
            <br /> to estimate shipping date
          </p>
        ) : (
          <p>
            Your Estimated Shipping Time is
            <span> {`${shdate.day} ${shdate.month} ${shdate.year}`} </span>
          </p>
        )}
      </LeftSide>
      <RightSide>
        <div></div>
      </RightSide>
    </Container>
  );
}

export default Home;
