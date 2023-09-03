import { Typography } from '@mui/material';
import React from 'react'

export default function Header({ className }) {
    let title = "";

    if (className === "directory") {
        title = "Employee Directory";
      } else if (className === "employee") {
        title = "Employee";
      }
  return (
    <Typography variant="h4" component="div" sx={{
        textAlign: "center"
    }}>
        {title}
    </Typography>
  )
}
