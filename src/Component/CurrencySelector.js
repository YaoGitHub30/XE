import { useState, useEffect } from "react";
import { v4 } from "uuid";
import * as React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";


const CurrencySelector = ({ id, value, onChange }) => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    // const XE_API_KEY=process.env.REACT_APP_XE_API_KEY;
    // const credentials = btoa(XE_API_KEY);
    const credentials = btoa("ga690126616:pg49tjn29ru6p0l4m1mmppdi21");
    const auth = { Authorization: `Basic ${credentials}` };
    const url = "https://xecdapi.xe.com/v1/currencies/";
    let success_callback = (response) => {
      response.json().then((jsonData) => {
        setCurrencies(jsonData.currencies);
      });
    };
    fetch(url, { headers: auth }).then(success_callback);
  }, []);
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
    <InputLabel id={id}>{id}</InputLabel>
    <Select labelId={id} onChange={onChange} label={id} value={value}>
      {currencies.map((currency) => (
        <MenuItem value={currency.iso} key={v4()}>
          {currency.iso}-{currency.currency_name}
        </MenuItem>
      ))}
    </Select>
    </FormControl>
  );
};
export default CurrencySelector;
