import employeeStore from './EmployeeStore'
import React, {Component} from 'react';
import EmployeActions from './EmployeActions'

export default class EmployeTable extends Component {
    constructor() {
        super();
        this.state = {employee: {id: '', firstName: ''}, employees: []};
        console.log(this.state.employees)
        this.submitHandler = this.submitHandler.bind(this);
        // this.setValue = this.setValue.bind(this);
    }

    componentWillMount() {
        employeeStore.on("change", function () {
            console.log(employeeStore.getAll())
            this.setState({employees: employeeStore.getAll()})
        }.bind(this));

    }

    setValue(field, event) {
        var object = this.state.employee
        object[field] = event.target.value;
        this.setState({employee: object});
    }

    submitHandler(e) {
        var emp = this.state.employee;
        EmployeActions.saveEmployee({action_type: "SAVE_EMPLOYEE", payLoad: emp});
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="id" onChange={this.setValue.bind(this, 'id')}/>
                    <input type="text" name="firstName" onChange={this.setValue.bind(this, 'firstName')}/>
                    <input type="button" value="Submit" onClick={this.submitHandler}/>
                </form>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Firstname</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.employees.map(function (employee) {
                            return <tr>
                                <td>{employee.id}</td>
                                <td>{employee.title}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    };

}
