import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';


export default function Navigation() {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{
            marginRight: "5%"
            
          }}>
            Employee Directory
          </Typography>
          <Button 
            color="inherit"
            component={Link} to="/"
            ><HomeIcon /></Button>
          <Button 
            color="inherit"
            component={Link} to="/employees"
          >Employees</Button>
          <Button 
            color="inherit"
            component={Link} to="/add-employee"
            ><AddIcon />Add Employee</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}