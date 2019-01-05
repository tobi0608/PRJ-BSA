import {PATIENTS} from '../../../../mock-files/mock-patients';

export function ShowPatient(sv): object {
    let count = 0;
    let patient = [];
    PATIENTS.forEach(function (value) {
        count++;
        if (value.sv.toString() === sv) {
            patient = value;
        }
    });
    return patient;
}
