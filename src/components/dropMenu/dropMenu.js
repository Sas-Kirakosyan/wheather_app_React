import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";

import { cities } from "../../helper/helper";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    marginLeft: "25px",
    paddingTop: "25px",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  menuList: {
    color: "#3f51b5",
  },
}));

function DropMenu({
  handleClose,
  handleChooseCity,
  anchorRef,
  open,
  handleToggle,
  anchorEl,
  autoFocusItem,
  handleListKeyDown,
}) {
  const classes = useStyles();

  const handleButtonClick = (e) => {
    handleClose(e);
    handleChooseCity(e);
  };

  return (
    <div className={classes.root}>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        variant="contained"
        color="primary"
        size="large"
        className={classes.btn}
      >
        Choose the city
      </Button>
      <Popper
        open={open}
        anchorEl={anchorEl}
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
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  className={classes.menuList}
                  autoFocusItem={autoFocusItem}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {cities.map((el) => (
                    <MenuItem key={el} onClick={(e) => handleButtonClick(el)}>
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

DropMenu.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleChooseCity: PropTypes.func,
  anchorRef: PropTypes.instanceOf(Object),
  handleToggle: PropTypes.func,
  anchorEl: PropTypes.instanceOf(Object),
  autoFocusItem: PropTypes.bool,
  handleListKeyDown: PropTypes.func,
};

export default DropMenu;
