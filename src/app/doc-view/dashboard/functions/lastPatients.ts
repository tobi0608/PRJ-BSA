import {USERS} from '../../../mock-files/mock-user';

export function lastPatients(): object {
    const user = document.cookie.split(',');
    const newUsers = [];
    USERS.forEach(function (value) {
        if (value.doctor_sv.toString() === user[0]) {
            newUsers.push(value);
        }
    });
    return newUsers;
}


