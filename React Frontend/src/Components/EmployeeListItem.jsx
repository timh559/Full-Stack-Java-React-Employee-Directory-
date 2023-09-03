import React from "react";
import pfp from "../images/pfp.jpg";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { fetchEmployeeById } from "../Redux/employeeSlice";

export default function EmployeeListItem({ employee }) {
  const dispatch = useDispatch();
  const search = document.getElementById("search");

  return (
    <div>
      <Card
        onClick={() => {
          dispatch(fetchEmployeeById(employee.id));
          search.value = "";
        }}
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "rgba(0,0,0,0.05)",
          color: "black",
          margin: "2% 5%",
        }}
      >
        <Box
          sx={{
            width: "25%",
          }}
        >
          <CardMedia
            component="img"
            image={pfp}
            sx={{
              borderRadius: "100%",
              maxWidth: "80%",
              maxHeight: "80%",
              margin: "10%",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "75%",
          }}
        >
          <CardContent>
            <Typography variant="subtitle1" component="div" mb={1}>
              {employee.firstName} {employee.lastName}
            </Typography>
            <Typography variant="caption" color="dark-grey" component="div">
              {employee.title}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}
