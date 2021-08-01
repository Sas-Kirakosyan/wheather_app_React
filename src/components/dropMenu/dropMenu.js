import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { sities } from "../../helper/helper";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    marginRight: "25px",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  menuList: {
    color: "#3f51b5",
  },
}));

export default function DropMenu(props) {
  const classes = useStyles();

  const handleButtonClick = (e) => {
    props.handleClose(e);
    props.handleChooseCity(e);
  };

  return (
    <div className={classes.root}>
      <Button
        ref={props.anchorRef}
        aria-controls={props.open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={props.handleToggle}
        variant="contained"
        color="primary"
        size="large"
      >
        Choose the city
      </Button>
      <Popper
        open={props.open}
        anchorEl={props.anchorEl}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={props.handleClose}>
                <MenuList
                  className={classes.menuList}
                  autoFocusItem={props.autoFocusItem}
                  id="menu-list-grow"
                  onKeyDown={props.handleListKeyDown}
                >
                  {sities.map((el) => (
                    <MenuItem onClick={(e) => handleButtonClick(el)}>
                      {el}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
