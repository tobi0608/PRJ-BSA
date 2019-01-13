import {USERS} from '../../../../mock-files/mock-user';
import {User} from '../../../../mock-files/user';


export function ShowPatient(sv): any {
    let patient;
    USERS.forEach(function (value) {
        if (value.sv.toString() === sv) {
            patient = value;
        } else if (sv === 'sv' || sv === 'new') {
            const tmp: User = {
                sv: null,
                first_name: null,
                last_name: null,
                gender: null,
                registered: null,
                last_visit: null,
                assignedDoc: null,
                password: null,
                type: null,
                email: null
            };
            patient = tmp;
        }
    });
    return patient;
}
