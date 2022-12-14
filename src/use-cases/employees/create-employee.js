const createEmployeeUseCase = ({
  createEmployeeReqValidation,
  employeesDB,
}) => {
  return async function post(info) {
    let data = await createEmployeeReqValidation(info);

    data = {
      firstName: data.getFirstName(),
      lastName: data.getLastName(),
      age: data.getAge(),
    };

    //check if employee already exists
    const check = await employeesDB.checkNameExists({ data });
    if (check.rowCount > 0) {
      throw new Error('Employee already exists');
    }
    //insert employee
    const res = await employeesDB.insertNewEmployee({ data });

    let message = 'There was some error while inserting the employee';
    if (res) message = 'Employee added succesfully';

    return message;
  };
};

module.exports = createEmployeeUseCase;
