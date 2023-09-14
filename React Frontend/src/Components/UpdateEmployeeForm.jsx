import React, { useState } from "react";
import { Input, Button, Container, Typography, Box, Alert } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeById, updateEmployee } from "../Redux/employeeSlice";

export default function UpdateEmployeeForm() {
  const status = useSelector((state) => state.employee.status);
  const selectedEmployee = useSelector(
    (state) => state.employee.selectedEmployee
  );
  console.log(selectedEmployee);
  const [employee, setEmployee] = useState(selectedEmployee);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Update Employee")
    console.log(employee);
    dispatch(updateEmployee(employee));
    if (status === "succeeded") {
      setMessage("Employee Updated Successfully, Redirecting...");
      setTimeout(() => {
        dispatch({ type: "employee/selectedEmployeeChanged", payload: null });
        navigate("/employees");
      }, 2000);
    }
    else if (status === "failed") {
      setMessage("Employee Update Failed");
    }
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
        Update Employee Info
      </Typography>
      {message && (
        <Alert
          variant="filled"
          severity={status === "failed" ? "error" : "success"}
          sx={{
            marginBottom: 2,
            color: "white"
          }}
        >
          {message}
        </Alert>
      )}
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
              defaultValue={selectedEmployee.firstName}
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
              defaultValue={selectedEmployee.lastName}
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
              defaultValue={selectedEmployee.emailId}
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
              defaultValue={selectedEmployee.phoneNum}
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
              defaultValue={selectedEmployee.title}
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
              defaultValue={selectedEmployee.address}
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
              defaultValue={selectedEmployee.city}
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
            onSubmit={handleSubmit}
            sx={{ width: "40%" }}
          >
            Update Employee
          </Button>
          <Button
            type="cancel"
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
