import {USERS} from '../../../../mock-files/mock-user';

export function ShowOwnPatients(): object {
    const ownPatients = [];
    USERS.forEach(function (value) {
        if (value.assignedDoc.toString() === localStorage.getItem('sv')) {
            ownPatients.push(value);
        }
    });
    return ownPatients;
}
