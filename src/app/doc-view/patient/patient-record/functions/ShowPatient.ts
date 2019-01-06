import {PATIENTS} from '../../../../mock-files/mock-patients';
import {Patient} from '../../../../mock-files/patients';


export function ShowPatient(sv): Patient {
    let count = 0;
    let patient;
    PATIENTS.forEach(function (value) {
        count++;
        if (value.sv.toString() === sv) {
            patient = value;
        }
    });
    return patient;
}
