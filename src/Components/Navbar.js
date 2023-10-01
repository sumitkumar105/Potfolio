import React from "react";
import { AppBar, Box, Toolbar, Typography, Stack } from "@mui/material";

import Brightness6Icon from "@mui/icons-material/Brightness6";
import { useNavigate } from "react-router-dom";
import { NavData } from "../data/Navdata";
import profile from "../Assets/sumit.jpeg";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#A555EC" }}>
          <Toolbar>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">Portfolio</Typography>

              <Box sx={{ display: "flex", gap: "30px", cursor: "pointer" }}>
                {NavData?.map((item) => {
                  return (
                    <Box key={item.title}>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        onClick={() => handleNavigate(item.path)}
                      >
                        <Typography variant="h6">{item.title}</Typography>
                        {item.icon}
                      </Stack>
                    </Box>
                  );
                })}
              </Box>

              <Stack direction="row" spacing={2}>
                <Brightness6Icon sx={{ fontSize: 40 }} />
                <EmojiEventsIcon sx={{ fontSize: 40 }} />
              </Stack>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;
