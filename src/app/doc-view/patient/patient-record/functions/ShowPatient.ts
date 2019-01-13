import {PATIENTS} from '../../../../mock-files/mock-patients';
import {Patient} from '../../../../mock-files/patients';


export function ShowPatient(sv): Patient {
    let count = 0;
    let patient;
    PATIENTS.forEach(function (value) {
        count++;
        if (value.sv.toString() === sv) {
            patient = value;
        } else if (sv === 'sv' || sv === 'new') {
            const tmp: Patient = {
                sv: null,
                first_name: null,
                last_name: null,
                gender: null,
                registered: null,
                last_visit: null,
                assignedDoc: null
            };
            patient = tmp;
        }
    });
    return patient;
}
