import { Routes, Route } from "react-router-dom"
import Navigation from "./Components/Navigation"
import { ThemeProvider, createTheme } from "@mui/material"
import Homepage from "./Pages/Homepage"
import Employees from "./Pages/Employees"
import AddEmployee from "./Pages/AddEmployee"
import UpdateEmployee from "./Pages/UpdateEmployee"

const theme = createTheme({
  palette: {
    mode: "dark"
  }
})



function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/edit-employee/:id" element={<UpdateEmployee />} />
      </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
