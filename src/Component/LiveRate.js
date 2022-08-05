import * as React from "react";
import { useEffect, useState } from "react";
import useToggleState from "../Hooks/useToggleState";
import { CurrencySelector } from "./CurrencySelector";
import { v4 } from "uuid";
import { Paper, List, ListItem, ListItemText, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { yesterday } from "./CurrencySelector";

const LiveRate = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [counterCurrencies, setCounterCurrencies] = useState(["AUD"]);
  const [exRate, setExRate] = useState([]);
  const [yesterdayRate, setYesterdayRate] = useState([]);
  const [isEditing, toggleIsEditing] = useToggleState();

  useEffect(() => {
    const credentials = btoa("ga690126616:pg49tjn29ru6p0l4m1mmppdi21");
    const auth = { Authorization: `Basic ${credentials}` };
    const url1 =
      "https://xecdapi.xe.com/v1/convert_from?" +
      new URLSearchParams({
        from: baseCurrency,
        to: counterCurrencies.join(),
        amount: 1,
      });
    const url2 =
      "https://xecdapi.xe.com/v1/historic_rate/period/?" +
      new URLSearchParams({
        from: baseCurrency,
        to: counterCurrencies.join(),
        start_timestamp: `2022-08-04T00:00`,
        end_timestamp: `2022-08-04T00:00`,
        interval: "daily",
        amount: 1,
      });

    fetch(url1, { headers: auth })
      .then((response) => response.json())
      .then((jsonData) => {
        setExRate(jsonData.to);
        // console.log(jsonData.to);
      });
    fetch(url2, { headers: auth })
      .then((response) => response.json())
      .then((jsonData) => {
        setYesterdayRate(jsonData.to);
      });
  }, [counterCurrencies]);

  console.log({ yesterdayRate });

  const addCurrency = (e) => {
    console.log(e);
    setCounterCurrencies([...counterCurrencies, e.target.value]);
    toggleIsEditing();
  };
  const remove = (e) => {
    setCounterCurrencies(
      counterCurrencies.filter((counterCurrency) => counterCurrency !== e)
    );
  };
  const changeBaseCurrency = (currency) => {
    const newCounterCurrencies = counterCurrencies.filter(
      (counterCurrency) => counterCurrency !== currency
    );
    setCounterCurrencies([...newCounterCurrencies, baseCurrency]);
    setBaseCurrency(currency);
  };
  console.log({ EX: exRate });
  const currentRate = (currency) => {
    return (
      exRate.length > 0 &&
      exRate.filter((rate) => rate.quotecurrency === currency)[0] &&
      exRate.filter((rate) => rate.quotecurrency === currency)[0].mid.toFixed(2)
    );
  };

  const prevRate = (currency) => {
    return (
      yesterdayRate &&
      yesterdayRate[currency] &&
      yesterdayRate[currency][0] &&
      yesterdayRate[currency][0].mid
    );
  };

  return (
    <div>
      <Paper>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {/* <Title>Live Exchange Rates</Title> */}
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>CURRENCY</TableCell>
                <TableCell>EX RATE</TableCell>
                <TableCell>CHANGE(24H)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={v4()}>
                <TableCell>{baseCurrency}</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
              {counterCurrencies.map((currency) => (
                <TableRow key={v4()}>
                  <TableCell onClick={() => changeBaseCurrency(currency)}>
                    {currency}
                  </TableCell>
                  <TableCell>{currentRate(currency)}</TableCell>
                  <TableCell>
                    {(
                      (prevRate(currency) &&
                        1 - prevRate(currency) / currentRate(currency)) * 100
                    ).toFixed(2) + "%"}
                  </TableCell>
                  <IconButton aria-label="delete">
                    <DeleteIcon onClick={() => remove(currency)} />
                  </IconButton>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {isEditing ? (
            <CurrencySelector onChange={addCurrency} id="Add Currency" />
          ) : (
            <Button variant="outlined" onClick={toggleIsEditing}>
              Add Currency
            </Button>
          )}
        </Grid>
      </Paper>
    </div>
  );
};
export default LiveRate;
