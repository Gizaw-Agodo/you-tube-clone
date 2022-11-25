import React, { useState } from "react";
import { Stack, Paper, IconButton } from "@mui/material";
import {Search as SearchIcon } from "@mui/icons-material"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit =  (e)=>{
   e.preventDefault()
   if (searchTerm) {
     navigate(`/search/${searchTerm}`);
     setSearchTerm("");
   }
   else {
     navigate(`/search/ `);
     setSearchTerm("");
   }
   
  }
  return (
    <Stack
      direction="row"
      p={1}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link style={{ display: "flex", alignItems: "center" }} to = "/" >
        <img src="https://i.ibb.co/s9Qys2j/logo.png" alt="" height={40} />
      </Link>
      <Paper
        onSubmit={handleSubmit}
        component="form"
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          mr: { sm: 5 },
        }}
      >
        <input
          className="search-bar"
          placeholder="search..."
          value={searchTerm}

          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type = "submit" sx={{ p: "5px", color: "red" }}>
          <SearchIcon  />
        </IconButton>
      </Paper>
    </Stack>
  );
}

export default Navbar;
