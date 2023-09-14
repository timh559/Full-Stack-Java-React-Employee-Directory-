import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/Employees";

export const fetchEmployees = createAsyncThunk(
    "employee/fetchEmployees",
    async () => {
        const response = await axios.get(EMPLOYEE_API_BASE_URL);
        return response.data;
    }
);

export const addNewEmployee = createAsyncThunk(
    "employee/addNewEmployee",
    async (employee) => {
        console.log(employee);
        const response = await axios.post(EMPLOYEE_API_BASE_URL, employee);
        console.log(response);
        return response.data;

    }
);

export const updateEmployee = createAsyncThunk(
    "employee/updateEmployee",
    async (employee) => {
        console.log(employee);
        const response = await axios.put(
            EMPLOYEE_API_BASE_URL + "/" + employee.id + "/edit",
            employee
        );
        console.log(response);
        return
    }
);

export const deleteEmployee = createAsyncThunk(
    "employee/deleteEmployee",
    async (employeeId) => {
        await axios.delete(EMPLOYEE_API_BASE_URL + "/" + employeeId);
        console.log(response);
        return
    }
);

export const fetchEmployeeById = createAsyncThunk(
    "employee/fetchEmployeeById",
    async (employeeId) => {
        const response = await axios.get(
            EMPLOYEE_API_BASE_URL + "/" + employeeId
        );
        return response.data;
    }
);

const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        employees: [],
        selectedEmployee: null,
        status: 'idle',
        error: null
    },
    reducers: {
        employeesFetched(state, action) {
            state.employees = action.payload;
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchEmployees.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchEmployees.fulfilled, (state, action) => {
            state.employees = action.payload;
            state.status = 'succeeded';
            console.log(state.employees);
        })
        .addCase(fetchEmployees.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(addNewEmployee.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(addNewEmployee.fulfilled, (state, action) => {
            state.employees.push(action.payload);
            state.status = 'succeeded';
            console.log(state.employees);
        })
        .addCase(addNewEmployee.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(updateEmployee.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(updateEmployee.fulfilled, (state, action) => {
            console.log(action.payload);
            // const index = state.employees.findIndex(
            //     (employee) => employee.id === action.payload.id);
            // state.employees[index] = action.payload;
            state.status = 'succeeded';
            console.log(state.employees);
            // window.location.reload(true);
        })
        .addCase(updateEmployee.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(deleteEmployee.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(deleteEmployee.fulfilled, (state, action) => {
            const index = state.employees.findIndex(
                (employee) => employee.id === action.payload
            );
            state.employees.splice(index, 1);
            state.status = 'succeeded';
            console.log(state.employees);
        })
        .addCase(deleteEmployee.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(fetchEmployeeById.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchEmployeeById.fulfilled, (state, action) => {
            console.log(action.payload);
            state.selectedEmployee = action.payload;
            state.status = 'succeeded';
            console.log(state.selectedEmployee);
        })
        .addCase(fetchEmployeeById.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        // add a case to change the selectedEmployee to null
        .addCase("employee/selectedEmployeeChanged", (state, action) => {
            state.selectedEmployee = null;
        })
    }
});

export const { employeesFetched } = employeeSlice.actions;

export default employeeSlice.reducer;

