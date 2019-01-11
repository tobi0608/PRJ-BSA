import {PATIENTS} from '../../../../mock-files/mock-patients';

export function ShowOwnPatients(): object {
    const ownPatients = [];
    PATIENTS.forEach(function (value) {
        if (value.assignedDoc.toString() === localStorage.getItem('sv')) {
            ownPatients.push(value);
        }
    });
    return ownPatients;
}
