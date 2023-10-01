import React from "react";
import { Paper, Typography, Stack, Divider } from "@mui/material";
import { technologies } from "../data/PersonalData";
import sumit from "../Assets/sumit.jpeg";
const TechInfo = () => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          height: "240px",
          backgroundColor: "#E9B824",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "200px", width: "200px", borderRadius: "50%" }}
          src={sumit}
          alt="about"
        />
        <Typography variant="h4">
          I`AM <br />
          Full Stack Developer
        </Typography>
      </Paper>
      <Divider />
      <Typography variant="h6">Front-end Technology Stack</Typography>
      <Stack direction="row" spacing={2}>
        {technologies.map((tech, index) => {
          return (
            <>
              {index < 5 ? (
                <Paper elevation={3} key={index}>
                  <img
                    style={{
                      height: "100px",
                      width: "130px",
                      margin: "10px",
                    }}
                    src={tech.techImg}
                    alt="technologies"
                  />
                </Paper>
              ) : null}
            </>
          );
        })}
      </Stack>
      <Stack direction="row" spacing={2} mt={4}>
        {technologies.map((tech, index) => {
          return (
            <>
              {index >= 5 ? (
                <Paper elevation={3} key={index}>
                  <img
                    style={{
                      height: "100px",
                      width: "130px",
                      margin: "10px",
                    }}
                    src={tech.techImg}
                    alt="technologies"
                  />
                </Paper>
              ) : null}
            </>
          );
        })}
      </Stack>
    </>
  );
};
export default TechInfo;
