import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ReactSelect from "react-select";
import Fade from "@mui/material/Fade";

const TabContent = ({ title, options, selectedOptions, onSelectOption }) => {
  const handleOptionSelect = (selected) => {
    onSelectOption(selected);
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#3A39404D",
      borderRadius: 11,
      borderColor: state.isFocused ? "#3A39404D" : "#3A39404D",
      boxShadow: state.isFocused ? null : null,
      color: "white",
      "&:hover": {
        borderColor: state.isFocused ? "#3A39404D" : "#3A39404D",
      },
    }),
    menu: (base, state) => ({
      ...base,
      zIndex: 9999,
      borderRadius: 0,
      background: "black",
      marginTop: 0,
    }),
    menuList: (base, state) => ({
      ...base,
      zIndex: 9999,
      padding: 0,
      color: "white",
      background: state.isFocused ? "white" : "#3A39404D",
      "&:hover": {
        background: state.isFocused ? "#3A39404D" : "#3A39404D",
      },
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "#3A39404D" : "#3A39404D",
    }),
  };

  return (
    <div className="mt-4">
      <Fade in={true} unmountOnExit style={{ transformOrigin: "0 0 0" }}>
        <Box className="mt-5 w-full sm:w-[400px]">
          <ReactSelect
            styles={customStyles}
            options={options}
            isSearchable
            isClearable
            value={selectedOptions}
            onChange={handleOptionSelect}
          />
          <div className="mt-5 mb-10">
            <h3 className="font-medium text-[20px] pb-4">
              Set the number of words for output text.
            </h3>
          </div>
          <div className="flex items-center wrapper">
            <p className="pr-1">100</p>{" "}
            <Slider
              aria-label="Set length of discussion"
              value={500}
              min={100}
              max={1000}
              step={10}
              valueLabelDisplay="on"
            />
            <p className="pl-1">1000</p>
          </div>
        </Box>
      </Fade>
    </div>
  );
};

export default TabContent;
