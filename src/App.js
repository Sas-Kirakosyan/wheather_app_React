import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import CircularProgress from "@material-ui/core/CircularProgress";
import DropMenu from "./components/dropMenu/dropMenu";
import { getDataCreateor } from "./redux/action";
import List from "./components/list/list";
import { dateBilder } from "./helper/helper";
import Input from "./components/textField/textField";
import { capitalizeFirstLetter } from "./helper/helper";

import "./style.scss";

function App() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [city, setCity] = useState("");
  const [value, setValue] = useState("");
  const state = useSelector((state) => state);
  const { loading, error } = state;

  const weather = state?.data?.main;
  const cloudOrSunny = state?.data?.weather[0];

  console.log("state", state, weather);
  useEffect(() => {
    if (city.length) {
      dispatch(getDataCreateor(city));
      setValue("");
    }
  }, [city]);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const prevOpen = useRef(open);
  const anchorRef = useRef(null);

  const classNamesArr = [
    { className: "city", title: city },
    { className: "date", title: dateBilder(new Date()) },
    { className: "temp", title: `${Math.floor(weather?.temp) - 273}°C` },
    { className: "cloud", title: cloudOrSunny?.main },
  ];

  const handleToggle = (e) => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleChooseCity = (city) => {
    setCity(city);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleChenge = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (value.length) {
      e.preventDefault();
      setCity(capitalizeFirstLetter(value));
    }
  };

  return (
    <div className="app">
      <div className="search_container">
        <DropMenu
          handleChooseCity={handleChooseCity}
          anchorRef={anchorRef}
          autoFocusItem={open}
          anchorEl={anchorRef.current}
          handleToggle={handleToggle}
          handleClose={handleClose}
          open={open}
        />
        <Input
          handleSubmit={handleSubmit}
          handleChenge={handleChenge}
          value={value}
        />
      </div>

      <div className="data_container">
        {loading ? (
          <CircularProgress
            variant="indeterminate"
            disableShrink
            size={40}
            thickness={4}
          />
        ) : (
          <ul>
            {typeof weather?.temp === "number" && !error ? (
              classNamesArr.map((el) => (
                <List
                  key={el.className}
                  class_name={el.className}
                  title={el.title}
                />
              ))
            ) : (
              <List class_name="error_case" title={error} />
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
