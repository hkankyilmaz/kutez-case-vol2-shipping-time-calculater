import React, { useContext, useRef, useState } from "react";
import { InputWrapper, StyledForm, SubmitButton } from "./styled";
import IDatePicker from "../datePicker";
import ISelectField from "../selectField";
import ITextFields from "../textField";
import DataContext from "../../contexts/dataContext";
import Alert from "../Alert";
import dayjs from "dayjs";
import dayjsBusinessDays from "dayjs-business-days";

dayjs.extend(dayjsBusinessDays);

function Form() {
  const now = dayjs();
  const ref = useRef();
  const { data, setData } = useContext(DataContext);
  const [state, setState] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (now.isBefore(data.orderDate, "day") == true ||
        now.isSame(data.orderDate, "day") == true) &&
      data.orderDate !== null &&
      data.fabricType !== "" &&
      typeof +data.quantity === "number" &&
      +data.quantity <= 100
    ) {
      setState(true);
      ref.current.openAlert();
      if (data.fabricType == "cotton") {
        if (data.quantity < 50) {
          setData({
            ...data,
            shippingDay: dayjs(data.orderDate).businessDaysAdd(2),
          });
        } else {
          setData({
            ...data,
            shippingDay: dayjs(data.orderDate).businessDaysAdd(3),
          });
        }
      }
      if (data.fabricType == "linen") {
        if (data.quantity < 50) {
          setData({
            ...data,
            shippingDay: dayjs(data.orderDate).businessDaysAdd(4),
          });
        } else {
          setData({
            ...data,
            shippingDay: dayjs(data.orderDate).businessDaysAdd(5),
          });
        }
      }
    } else {
      setState(false);
      ref.current.openAlert();
    }
  };

  return (
    <>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <IDatePicker />
        <ISelectField />
        <ITextFields />
        <SubmitButton type="submit">Calculate</SubmitButton>
      </StyledForm>
      <Alert state={state} ref={ref} />
    </>
  );
}

export default Form;
