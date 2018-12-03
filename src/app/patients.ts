import {PATIENTS} from './mock-patients';

export class Patient {
    sv: number;
    first_name: string;
    last_name: string;
    gender: string;
    age: number;
    registered: string;
    last_visit: string;
    current_medication: string;
    medication_interval: string;
    used_medication: string;
}

/*export function createPatient(sv: number, first_name: string, last_name: string, gender: string, age: number, registered: string,
                              last_visit: string, current_medication: string, medication_interval: string, used_medication: string) {

    let newPatient = 'sv: ' + sv + ', first_name: "' + first_name + '", last_name: "' + last_name + '", gender: "' + gender +
    '", age: ' + age + ', registered: "' + registered + '", last_visit: "' + last_visit + '", current_medication: "' +
    current_medication + '", medication_interval: "' + medication_interval + '", used_medication: "' + used_medication + '"';
    PATIENTS.push('{' + newPatient + '}');
};*/