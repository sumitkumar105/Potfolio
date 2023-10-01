import React from "react";
import { Paper, Box, Grid, Avatar, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import profile from "../Assets/sumit.jpeg";
import { summryData } from "../data/SummryData";
const Home = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
      <Paper
        elevation={3}
        sx={{ height: "500px", width: "90%", borderRadius: "20px" }}
      >
        <Grid container>
          <Grid item xs={12} md={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "500px",
                width: "100%",
                backgroundColor: "#A555EC",
                borderRadius: "20px 0px 0px 20px",
              }}
            >
              <Avatar
                sx={{ height: "370px", width: "370px" }}
                alt="profile picture"
                src={profile}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <>
              <Box
                sx={{
                  display: "flex",

                  alignItems: "center",
                  flexDirection: "column",
                  height: "500px",
                  width: "100%",
                  backgroundColor: "#D8D9CF",
                  borderRadius: "0px 20px 20px 0px",
                }}
              >
                <Box>
                  <Typography variant="h4">Summary</Typography>
                </Box>
                <Box sx={{ overflowY: "scroll" }}>
                  <Timeline position="alternate-reverse">
                    {summryData?.map((summry, index) => {
                      return (
                        <>
                          <TimelineItem key={index}>
                            <TimelineSeparator>
                              {index % 2 == 0 ? (
                                <TimelineDot color="success" />
                              ) : (
                                <TimelineDot color="secondary" />
                              )}

                              <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ width: "100%" }}>
                              {summry}
                            </TimelineContent>
                          </TimelineItem>
                        </>
                      );
                    })}
                  </Timeline>
                  <Box></Box>
                </Box>
              </Box>
            </>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
export default Home;
