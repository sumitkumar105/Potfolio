import React from "react";
import { Paper, Box, Typography, Stack, Divider } from "@mui/material";
import { Timeline, timelineItemClasses } from "@mui/lab";
import { experienceData, educationData } from "../data/ExperinceData";
import TimeLine from "../Components/TimeLine";
import CheckIcon from "@mui/icons-material/Check";
const Experience = () => {
  return (
    <Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Paper
          sx={{
            height: "500px",
            width: "80%",
            marginTop: "15px",
            display: "flex",
            justifyContent: "space-around",
            overflowY: "scroll",
          }}
          elevation={0}
        >
          <Box>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Experience
            </Typography>

            <Box>
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                    marginLeft: "30px",
                  },
                }}
              >
                {experienceData.map((expericence, index) => {
                  return (
                    <div key={expericence.id}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <img
                          style={{ height: "80px", width: "100px" }}
                          src={expericence.imgUrl}
                          alt="companyProfile"
                        />
                        <Typography variant="h6">
                          {expericence.companyName}
                        </Typography>
                        {expericence?.present ? (
                          <CheckIcon sx={{ color: "green" }} />
                        ) : null}
                      </Stack>
                      <TimeLine position={expericence?.position} />
                      <Divider sx={{ margin: "15px" }} />
                    </div>
                  );
                })}
              </Timeline>
            </Box>
          </Box>
          <Box>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Education
            </Typography>

            <Box sx={{ marginTop: "20px" }}>
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                    marginLeft: "30px",
                  },
                }}
              >
                {educationData.map((education, index) => {
                  return (
                    <div key={education.id}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        {education.icon}
                        <Typography variant="h6">
                          {education.companyName}
                        </Typography>
                        {education?.present ? (
                          <CheckIcon sx={{ color: "green" }} />
                        ) : null}
                      </Stack>
                      <TimeLine position={education?.position} />
                      <Divider sx={{ margin: "15px" }} />
                    </div>
                  );
                })}
              </Timeline>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
export default Experience;
