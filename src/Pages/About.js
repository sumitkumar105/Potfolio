import React from "react";
import { Box, Stack, Grid } from "@mui/material";
import TechInfo from "../Components/TechInfo";
import MyInfo from "../Components/MyInfo";

const About = () => {
  return (
    <Box sx={{ marginTop: "10px", width: "90%" }}>
      <Stack direction="column" alignItems="center" spacing={2}>
        <Grid container columnSpacing={4}>
          <Grid item lg={4}>
            <MyInfo />
          </Grid>
          <Grid item xs={8}>
            <TechInfo />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
export default About;
