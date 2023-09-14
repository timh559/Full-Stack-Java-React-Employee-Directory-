import React from "react";
import { Typography } from "@mui/material";
import logo from "../images/logo.png";

export default function Homepage() {
  return (
    <div style={{
      backgroundImage: `url(${logo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width: "100vw",
      position: "fixed"
    }}
    >
      <div>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            margin: "5%",
            color: "white",
          }}
        >
          Employee Directory
        </Typography>
      </div>
    </div>
  );
}
