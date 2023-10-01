import React from "react";
import { Typography, Stack } from "@mui/material";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
const TimeLine = ({ position }) => {
  return (
    <>
      {position?.map((pos) => {
        return (
          <>
            <TimelineItem>
              <TimelineSeparator>
                {pos.active ? (
                  <TimelineDot color="success" />
                ) : (
                  <TimelineDot color="secondary" />
                )}

                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Stack
                  direction="column"
                  sx={{
                    width: "80%",
                    height: "100px",

                    marginLeft: "55px",
                  }}
                >
                  <Typography variant="h6">{pos?.designation}</Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography>{pos?.type}</Typography>
                    <span>-</span>
                    <Typography>{pos?.duration}</Typography>
                  </Stack>

                  <Typography>{pos?.city}</Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
          </>
        );
      })}
    </>
  );
};
export default TimeLine;
