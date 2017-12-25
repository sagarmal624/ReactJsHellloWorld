import React, {Component} from 'react';
import dispatcher from './dispatcher';

class EmployeeActions {

    saveEmployee(payload) {
        console.log(payload);
        dispatcher.dispatch(payload)
    }


}

export default new EmployeeActions;
