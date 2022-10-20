import React, { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DataContext from "../../contexts/dataContext";

export default function ISelectField() {
  const { data, setData } = useContext(DataContext);
  console.log(data);

  return (
    <FormControl
      sx={{
        width: "20%",
        marginLeft: "1rem",
        "& .MuiInputBase-root": { borderRadius: "2em" },
        "& .MuiSvgIcon-root": { right: "10%" },
        ["@media (max-width:1000px)"]: {
          marginLeft: "0",
          marginTop: "1rem",
          width: "75%",
          "& .MuiSvgIcon-root": { right: "3%" },
        },
      }}
    >
      <InputLabel id="demo-simple-select-label">Fabric Type</InputLabel>
      <Select
        autoComplete="false"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Fabric Type"
        value={data.fabricType}
        onChange={(event) =>
          setData({ ...data, fabricType: event.target.value })
        }
      >
        <MenuItem value="cotton">Cotton</MenuItem>
        <MenuItem value="linen">Linen</MenuItem>
      </Select>
    </FormControl>
  );
}
