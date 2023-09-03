import React, { useState } from "react";
import { Input, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addNewEmployee } from "../Redux/employeeSlice";

export default function AddEmployeeForm() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNum: "",
    title: "",
    address: "",
    city: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employee);
    dispatch(addNewEmployee(employee));
    setTimeout(() => {
      navigate("/employees");
    }, 500);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        border: "1px solid black",
        borderRadius: "5%",
        margin: "10% auto",
        padding: "2%",
        backgroundColor: "rgba(0,0,0,0.05)",
        color: "black",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{
          textAlign: "center",
          marginBottom: 2,
        }}
      >
        Add New Employee
      </Typography>
      <Box component="form">
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "49%",
            }}
          >
            <Typography
              variant="button"
              component="div"
              sx={{
                textAlign: "start",
              }}
            >
              First Name
            </Typography>
            <Input
              type="text"
              placeholder="Enter First Name"
              variant="outlined"
              onChange={(e) => {
                console.log(employee);
                setEmployee({ ...employee, firstName: e.target.value });
              }}
              required
              sx={{
                margin: "2% auto",
                color: "black",
                width: "100%",
                height: "2.8rem",
                background: "#f5f5f5",
                outline: "none",
                border: "1px solid black",
                padding: "0 3.5rem 0 1.5rem",
                fontSize: "1rem",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "49%",
              marginLeft: "auto",
            }}
          >
            <Typography
              variant="button"
              component="div"
              sx={{
                textAlign: "start",
              }}
            >
              Last Name
            </Typography>
            <Input
              type="text"
              placeholder="Enter Last Name"
              variant="outlined"
              onChange={(e) => {
                setEmployee({ ...employee, lastName: e.target.value });
              }}
              required
              sx={{
                margin: "2% auto",
                color: "black",
                width: "100%",
                height: "2.8rem",
                background: "#f5f5f5",
                outline: "none",
                border: "1px solid black",
                padding: "0 3.5rem 0 1.5rem",
                fontSize: "1rem",
              }}
            />
          </Box>
        </Container>

        <Container>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Typography
              variant="button"
              component="div"
              sx={{
                textAlign: "start",
              }}
            >
              Email
            </Typography>
            <Input
              type="email"
              placeholder="Enter Email"
              variant="outlined"
              onChange={(e) => {
                setEmployee({ ...employee, emailId: e.target.value });
              }}
              required
              sx={{
                margin: "2% auto",
                color: "black",
                width: "100%",
                height: "2.8rem",
                background: "#f5f5f5",
                outline: "none",
                border: "1px solid black",
                padding: "0 3.5rem 0 1.5rem",
                fontSize: "1rem",
              }}
            />
          </Box>
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "49%",
            }}
          >
            <Typography
              variant="button"
              component="div"
              sx={{
                textAlign: "start",
              }}
            >
              Phone Number
            </Typography>
            <Input
              type="tel"
              placeholder="Enter Phone Number"
              variant="outlined"
              onChange={(e) => {
                setEmployee({ ...employee, phoneNum: e.target.value });
              }}
              required
              sx={{
                margin: "2% auto",
                color: "black",
                width: "100%",
                height: "2.8rem",
                background: "#f5f5f5",
                outline: "none",
                border: "1px solid black",
                padding: "0 3.5rem 0 1.5rem",
                fontSize: "1rem",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "49%",
              marginLeft: "auto",
            }}
          >
            <Typography
              variant="button"
              component="div"
              sx={{
                textAlign: "start",
              }}
            >
              Title
            </Typography>
            <Input
              type="text"
              placeholder="Enter Title"
              variant="outlined"
              onChange={(e) => {
                setEmployee({ ...employee, title: e.target.value });
              }}
              required
              sx={{
                margin: "2% auto",
                color: "black",
                width: "100%",
                height: "2.8rem",
                background: "#f5f5f5",
                outline: "none",
                border: "1px solid black",
                padding: "0 3.5rem 0 1.5rem",
                fontSize: "1rem",
              }}
            />
          </Box>
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "2%",
          }}
        >
          <Box
            sx={{
              width: "49%",
            }}
          >
            <Typography
              variant="button"
              component="div"
              sx={{
                textAlign: "start",
              }}
            >
              Address
            </Typography>
            <Input
              type="text"
              placeholder="Enter Address"
              variant="outlined"
              onChange={(e) => {
                setEmployee({ ...employee, address: e.target.value });
              }}
              required
              sx={{
                margin: "2% auto",
                color: "black",
                width: "100%",
                height: "2.8rem",
                background: "#f5f5f5",
                outline: "none",
                border: "1px solid black",
                padding: "0 3.5rem 0 1.5rem",
                fontSize: "1rem",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "49%",
              marginLeft: "auto",
            }}
          >
            <Typography
              variant="button"
              component="div"
              sx={{
                textAlign: "start",
              }}
            >
              City
            </Typography>
            <Input
              type="text"
              placeholder="Enter City"
              variant="outlined"
              onChange={(e) => {
                setEmployee({ ...employee, city: e.target.value });
              }}
              required
              sx={{
                margin: "2% auto",
                color: "black",
                width: "100%",
                height: "2.8rem",
                background: "#f5f5f5",
                outline: "none",
                border: "1px solid black",
                padding: "0 3.5rem 0 1.5rem",
                fontSize: "1rem",
              }}
            />
          </Box>
        </Container>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="success"
            onClick={handleSubmit}
            sx={{ width: "40%" }}
          >
            Add Employee
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="error"
            onClick={() => {
              navigate("/employees");
            }}
            sx={{ width: "40%" }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
