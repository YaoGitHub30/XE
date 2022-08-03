import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Convert from "./Component/Convert";
import Chart from "./Component/Chart";
import LiveRate from "./Component/LiveRate";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <BrowserRouter>
        <AppBar color="primary" position="static" style={{ height: "64px" }}>
          <Toolbar>
            <nav>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/"
              >
                Home
              </NavLink>{" "}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/convert"
              >
                Convert
              </NavLink>{" "}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/Chart"
              >
                Chart
              </NavLink>{" "}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/LiveRate"
              >
                Live FX Rate
              </NavLink>
            </nav>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<p>Welcome to Exchange World</p>}></Route>
          <Route path="/Convert" element={<Convert />}></Route>
          <Route path="/Chart" element={<Chart />}></Route>
          <Route path="/LiveRate" element={<LiveRate />}></Route>
          <Route path="*" element={<p>uh Oh</p>}></Route>
        </Routes>
      </BrowserRouter>
    </Paper>
    </div>
  )
}

export default App;
