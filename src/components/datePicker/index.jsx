import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControl from "@mui/material/FormControl";
import DataContext from "../../contexts/dataContext";

export default function IDatePicker() {
  const { data, setData } = useContext(DataContext);

  return (
    <FormControl
      sx={{
        width: "20%",
        "& .MuiInputBase-root": { borderRadius: "2em" },
        ["@media (max-width:1000px)"]: {
          width: "75%",
        },
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={{ "& .MuiSvgIcon-root": { right: "10%" } }}
          label="Order Date"
          value={data.orderDate}
          onChange={(newValue) => {
            setData({ ...data, orderDate: newValue });
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </FormControl>
  );
}
