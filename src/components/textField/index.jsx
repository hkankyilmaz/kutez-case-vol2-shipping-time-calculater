import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { BsInfoCircleFill } from "react-icons/bs";
import DataContext from "../../contexts/dataContext";
import Tooltip from "@mui/material/Tooltip";

export default function ITextField() {
  const { data, setData } = useContext(DataContext);

  return (
    <Tooltip title="Shipping Dates May Vary Based on Quantity">
      <FormControl
        sx={{
          position: "relative",
          width: "20%",
          marginLeft: "1rem",
          "& .MuiInputBase-root": { borderRadius: "2em" },
          ["@media (max-width:1000px)"]: {
            marginLeft: "0",
            marginTop: "1rem",
            width: "75%",
          },
        }}
      >
        <BsInfoCircleFill
          style={{
            fontSize: "1.2rem",
            position: "absolute",
            right: "3%",
            top: "30%",
            zIndex: "3",
            cursor: "pointer",
          }}
        />
        <TextField
          autoComplete="off"
          onChange={(event) =>
            setData({ ...data, quantity: event.target.value })
          }
          id="outlined-basic"
          label="Ouantity"
          variant="outlined"
        />
      </FormControl>
    </Tooltip>
  );
}
