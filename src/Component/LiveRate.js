import { useEffect, useState } from "react";
import useToggleState from "../Hooks/useToggleState";
import CurrencySelector from "./CurrencySelector";
import { v4 } from "uuid";
import { Paper, List, ListItem, ListItemText, Divider } from "@mui/material";

const LiveRate = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [counterCurrencies, setCounterCurrencies] = useState(["AUD"]);
  const [exRate, setExRate] = useState([]);
  const [isEditing, toggleIsEditing] = useToggleState();

  useEffect(() => {
    const credentials = btoa("ga630297588:5ffi12493ts3b85utvme5he247");
    const auth = { Authorization: `Basic ${credentials}` };
    const url =
      "https://xecdapi.xe.com/v1/convert_from?" +
      new URLSearchParams({
        from: baseCurrency,
        to: counterCurrencies.join(),
        amount: 1,
      });
    fetch(url, { headers: auth })
      .then((response) => response.json())
      .then((jsonData) => {
        setExRate(jsonData.to);
        console.log(jsonData.to);
      });
  }, [counterCurrencies]);

  const addCurrency = (e) => {
    console.log(e);
    setCounterCurrencies([...counterCurrencies, e.target.value]);
    toggleIsEditing();
  };

  const changeBaseCurrency = (currency) => {
    const newCounterCurrencies = counterCurrencies.filter(
      (counterCurrency) => counterCurrency !== currency
    );
    setCounterCurrencies([...newCounterCurrencies, baseCurrency]);
    setBaseCurrency(currency);
  };
  console.log({ EX: exRate });

  return (
    <Paper>
      <List>
        <ListItem>{baseCurrency}</ListItem>
        <Divider></Divider>

        {counterCurrencies.map((currency) => (
          <ListItem>
            <ListItemText
              onClick={() => changeBaseCurrency(currency)}
              key={v4()}
            >
              {currency}{" "}
              {exRate.length > 0 &&
                exRate.filter((rate) => rate.quotecurrency === currency)[0] &&
                exRate.filter((rate) => rate.quotecurrency === currency)[0].mid}
            </ListItemText>
            <Divider></Divider>
          </ListItem>
        ))}

        {isEditing ? (
          <CurrencySelector onChange={addCurrency} id="Add Currency" />
        ) : (
          <button onClick={toggleIsEditing}>Add Currency</button>
        )}
      </List>
    </Paper>
  );
};
export default LiveRate;
