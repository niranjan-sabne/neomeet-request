import { Card, Typography } from "@mui/material";
import React from "react";
import "./Reuseableimage.css";
const Reusableimage: React.FC = () => {
  return (
    <>
      <div className="reusableMainDiv">
        <Card className="titlecss">
          <Typography variant="h3" className="TitleColor">
            Welcome To Meeting Portal
          </Typography>
          <Typography variant="caption" className="TitleColor">
            Web application that allows you to book meeting room.
          </Typography>
        </Card>
      </div>
    </>
  );
};

export default Reusableimage;
