import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import pfp from "../images/pfp.jpg";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { deleteEmployee } from "../Redux/employeeSlice";
import { useNavigate } from "react-router";

export default function EmployeeCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employee = useSelector((state) => state.employee.selectedEmployee);


  if (employee === null) {
    return (
      <div>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0.05)",
            color: "black"
          }}
        >
          <CardContent>
            <Typography variant="h6" component="div" style={{
                textAlign: "center"
            }}>
              No Employee Selected
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return (
      <div style={{
        overflow: "scroll"
        }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0.05)",
            color: "black"
          }}
        >
          <Box
            sx={{
              border: "1px solid black",
              height: "25%",
              padding: "1%",
            }}
          >
            <Button
              color="inherit"
              onClick={() => {
                dispatch({
                  type: "employee/selectedEmployeeChanged",
                  payload: null,
                });
              }}
              sx={{
                float: "right",
                margin: "1%",
                zIndex: "1",
              }}
            >
              <CloseIcon />
            </Button>
            <CardMedia
              component="img"
              image={pfp}
              sx={{
                borderRadius: "100%",
                maxWidth: "30%",
                maxHeight: "30%",
                margin: "0 35%",
              }}
            />
          </Box>
          <Box
            sx={{
              border: "1px solid black",
              height: "75%",
            }}
          >
            <CardContent
              sx={{
                padding: "5% 15%",
              }}
            >
              <Typography variant="h6" component="div" mb={1}>
                {employee.firstName} {employee.lastName}
              </Typography>
              <Typography variant="body2" component="div" mb={1}>
                Title: {employee.title}
              </Typography>
              <Typography variant="body2" component="div" mb={1}>
                Email: {employee.emailId}
              </Typography>
              <Typography variant="body2" component="div" mb={1}>
                Phone: {employee.phoneNum}
              </Typography>
              <Typography variant="body2" component="div" mb={1}>
                Address: {employee.address}
              </Typography>
              <Typography variant="body2" component="div" mb={1}>
                City: {employee.city}
              </Typography>
            </CardContent>
            <Box sx={{
                display: "flex",
                justifyContent: "space-evenly"
            }}>
            <Button
                color="inherit"
                onClick={() => {
                    navigate("/edit-employee/" + employee.id);
                }}
                sx={{
                  float: "left",
                  margin: "1%",
                  zIndex: "1",
                }}
              >
                <EditIcon />
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  dispatch({
                    type: "employee/selectedEmployeeChanged",
                    payload: null,
                  });
                  dispatch(deleteEmployee(employee.id));
                  window.location.reload(true);
                }}
                sx={{
                  float: "right",
                  margin: "1%",
                  zIndex: "1",
                }}
              >
                <DeleteForeverIcon />
              </Button>
            </Box>
          </Box>
        </Card>
      </div>
    );
  }
}
