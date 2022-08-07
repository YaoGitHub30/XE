import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Button } from "@mui/material";

export default function TriggersTooltips({ badge }) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Grid item>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={badge.join()}
            >
              <IconButton color="inherit" onClick={handleTooltipOpen}>
                <Badge badgeContent={badge.length} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </div>
        </ClickAwayListener>
      </Grid>
    </div>
  );
}
