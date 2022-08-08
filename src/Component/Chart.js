import {CurrencySelector} from "./CurrencySelector";
import { useState } from "react";
import LineChart from "./LineChart";
import * as React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import SwapHorizontalCircleRoundedIcon from "@mui/icons-material/SwapHorizontalCircleRounded";

const Chart = () => {
  const [baseCurrency, setBaseCurrency] = useState();
  const [counterCurrency, setCounterCurrency] = useState();
  const [isClicked, setIsClicked] = useState(false);
  
  const swap = () => {
    const baseTemp = baseCurrency;
    const counterTemp = counterCurrency;
    setBaseCurrency(counterTemp);
    setCounterCurrency(baseTemp);
  };
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <FormControl sx={{ m: 1, minWidth: 60 }}>
          <CurrencySelector
            id="From"
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 60 }}>
          <IconButton onClick={swap}>
            <SwapHorizontalCircleRoundedIcon
              fontSize="large"
              color="primary"
            />
          </IconButton>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 60 }}>
          <CurrencySelector
            id="To"
            value={counterCurrency}
            onChange={(e) => setCounterCurrency(e.target.value)}
          />
        </FormControl>
        <Button variant="contained" onClick={() => setIsClicked(true)}>
          View Chart
        </Button>
      </Grid>
      {isClicked ? (
        <LineChart
          isClicked={isClicked}
          baseCurrency={baseCurrency}
          counterCurrency={counterCurrency}
        />
      ) : null}
    </div>
  );
};
export default Chart;
