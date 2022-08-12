import { useState, useEffect } from "react";
import { v4 } from "uuid";
import * as React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import CurrencyList from "./CurrencyList";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;

var yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
var ddYe = String(yesterday.getDate()).padStart(2, "0");
var mmYe = String(yesterday.getMonth() + 1).padStart(2, "0");
var yyyyYe = yesterday.getFullYear();
yesterday = yyyyYe + "-" + mmYe + "-" + ddYe;

var lastMonth= new Date(new Date().getTime() - 30*24 * 60 * 60 * 1000);
var ddMth = String(lastMonth.getDate()).padStart(2, "0");
var mmMth = String(lastMonth.getMonth() + 1).padStart(2, "0");
var yyyyMth = lastMonth.getFullYear();
lastMonth = yyyyMth + "-" + mmMth + "-" + ddMth;


const CurrencySelector = ({ id, value, onChange }) => {
  const [currencies, setCurrencies] = useState([]);
//Due to the limited API click, I have copied the currencies to a seperate file.
  // useEffect(() => {
  // const XE_API_KEY=process.env.REACT_APP_XE_API_KEY;
  // const credentials = btoa(XE_API_KEY);
  // const credentials = btoa("ga690126616:pg49tjn29ru6p0l4m1mmppdi21");
  // const auth = { Authorization: `Basic ${credentials}` };
  // const url = "https://xecdapi.xe2.com/v1/currencies/";
  // let success_callback = (response) => {
  //   response.json().then((jsonData) => {
  //     setCurrencies(jsonData.currencies);
  //   });
  // };
  // fetch(url, { headers: auth }).then(success_callback);
  //}, []);
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id={id}>{id}</InputLabel>
      <Select labelId={id} onChange={onChange} label={id} value={value||""}>
        {CurrencyList.map((currency) => (
          <MenuItem value={currency.iso} key={v4()}>
            {currency.iso}-{currency.currency_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export { CurrencySelector, today, yesterday,lastMonth };
