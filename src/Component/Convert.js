import { useState, useEffect } from "react";
import { CurrencySelector } from "./CurrencySelector";
import * as React from "react";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import SwapHorizontalCircleRoundedIcon from "@mui/icons-material/SwapHorizontalCircleRounded";
import InputLabel from "@mui/material/InputLabel";

const Convert = () => {
  const [amount, setAmount] = useState();
  const [baseCurrency, setBaseCurrency] = useState();
  const [counterCurrency, setCounterCurrency] = useState();
  const [cost, setCost] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const swap = () => {
    const baseTemp = baseCurrency;
    const counterTemp = counterCurrency;
    setBaseCurrency(counterTemp);
    setCounterCurrency(baseTemp);
  };

  useEffect(() => {
    const XE_API_KEY = process.env.REACT_APP_XE_API_KEY;
    const credentials = btoa(XE_API_KEY);
    //const credentials = btoa("ga690126616:pg49tjn29ru6p0l4m1mmppdi21");
    const auth = { Authorization: `Basic ${credentials}` };
    const url =
      "https://xecdapi.xe.com/v1/convert_from?" +
      new URLSearchParams({
        from: baseCurrency,
        to: counterCurrency,
        amount: amount,
      });
    if (isClicked === true) {
      fetch(url, { headers: auth })
        .then((response) => response.json())
        .then((jsonData) => setCost(jsonData.to[0].mid));
    }
  }, [[], baseCurrency, counterCurrency]);

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <TextField
            id="amount"
            label="Amount"
            varient="standard"
            onChange={(e) => setAmount(e.target.value)}
          ></TextField>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 60 }}>
          {/* <InputLabel id="From">From</InputLabel> */}
          <CurrencySelector
            id="From"
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 60 }}>
          <IconButton>
            <SwapHorizontalCircleRoundedIcon
              onClick={swap}
              fontSize="large"
              color="primary"
            />
          </IconButton>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 60 }}>
          {/* <InputLabel id="To">To</InputLabel> */}
          <CurrencySelector
            id="To"
            value={counterCurrency}
            onChange={(e) => setCounterCurrency(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Button variant="contained" onClick={() => setIsClicked(true)}>
            Convert
          </Button>
        </FormControl>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {amount && baseCurrency && cost && counterCurrency
          ? `${amount} ${baseCurrency} = ${cost} ${counterCurrency}`
          : null}
      </Grid>
    </div>
  );
};
export default Convert;
