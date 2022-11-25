import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";
function Sidebar({selectedCategory,setSelectedCategory}) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sm: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((item) => (
        <button
          key = {item.name}
          className="category-btn"
          style={{
            background: selectedCategory === item.name && "#fc1503",
            color: "white",
          }}
          onClick = {()=>setSelectedCategory(item.name)}
        >
          <span
            style={{
              color: item.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {item.icon}
          </span>
          <span
            style={{
              opacity: item.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
