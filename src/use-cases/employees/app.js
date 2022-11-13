const {
    createEmployeeReqValidation,
    updateEmployeeReqValidation } = require('../../entities/employees/app');
const employeesDB = require('../../data-access/employees/app');

const createEmployee = require('./create-employee');
const updateEmployee = require('./update-employee');
const createEmployeeUseCase = createEmployee({ createEmployeeReqValidation, employeesDB });
const updateEmployeeUsecase = updateEmployee({ updateEmployeeReqValidation, employeesDB });

const services = Object.freeze({
    createEmployeeUseCase,
    updateEmployeeUsecase
});

module.exports = services;
module.exports = {
    createEmployeeUseCase,
    updateEmployeeUsecase
};