import {EventEmitter} from "events";
import dispatcher from "./dispatcher";

class EmployeeStore extends EventEmitter {
    constructor() {
        super();
        this.employees = []
        fetch("https://jsonplaceholder.typicode.com/posts").then(function (res) {
            res.json().then(function (data) {
                console.log("calliing");
                this.employees = data;
                this.emit("change");
            }.bind(this))
        }.bind(this))

    }

    getAll() {
        return this.employees;
    }

    handleActions(action) {
        fetch("", {
            method: "post",
            body: JSON.stringify(action.payLoad)
        }).then(function (response) {
            return response.json()
        }).then(function (data) {
        });
    }
}

const employeeStore = new EmployeeStore();
dispatcher.register(employeeStore.handleActions.bind(employeeStore));
export default employeeStore;
