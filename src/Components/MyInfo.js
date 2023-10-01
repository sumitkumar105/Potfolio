import React from "react";
import { Paper, Typography, Stack, Divider } from "@mui/material";
import { personalData } from "../data/PersonalData";
const MyInfo = () => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          height: "550px",
          backgroundColor: "#F45050",
          padding: "5px",
        }}
      >
        <Stack
          direction="column"
          sx={{
            marginLeft: "20px",
            color: "white",
          }}
        >
          {personalData?.map((item) => {
            return (
              <>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="h5">{item.value}</Typography>
                <Divider sx={{ border: "none", height: "20px" }} />
              </>
            );
          })}
        </Stack>
      </Paper>
    </>
  );
};
export default MyInfo;
