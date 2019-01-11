import {USERS} from '../../../mock-files/mock-user';

export function lastPatients(): object {
    const newUsers = [];
    USERS.forEach(function (value) {
        if (value.doctor_sv.toString() === localStorage.getItem('sv')) {
            newUsers.push(value);
        }
    });
    return newUsers;
}


