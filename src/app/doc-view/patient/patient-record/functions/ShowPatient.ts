import {PATIENTS} from '../../../../mock-files/mock-patients';

export function ShowPatient(sv): any {
    let count = 0;
    const patient = [];
    PATIENTS.forEach(function (value) {
        count++;
        if (value.sv.toString() === sv) {
            patient.unshift(value);
        }
    });
    return patient;
}
