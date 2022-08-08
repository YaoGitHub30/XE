import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import { Divider } from '@mui/material';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton href='/'>   
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton href='/convert'>
      <ListItemIcon>
        <CurrencyExchangeSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Convert" />
    </ListItemButton>
    <ListItemButton href='/chart'>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Chart" />
    </ListItemButton>
    <ListItemButton href='/liveRate'>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Live Rate" />
    </ListItemButton>
 </React.Fragment>
);

