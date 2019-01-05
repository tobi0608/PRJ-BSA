import {PATIENTS} from '../../../../mock-files/mock-patients';

export function ShowOwnPatients(): object {
    const user = document.cookie.split(',');
    const ownPatients = [];
    PATIENTS.forEach(function (value) {
        if (value.assignedDoc.toString() === user[0]) {
            ownPatients.push(value);
        }
    });
    return ownPatients;
}
