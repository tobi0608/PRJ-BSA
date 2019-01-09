import {USERS} from '../../../../mock-files/mock-user';

export function GetDocDetails(): string {
    const sv = localStorage.getItem('sv');
    let doc = '';
    USERS.find(function (tmp) {
        if (tmp.sv.toString() === sv) {
            USERS.find(function (tmp2) {
                if (tmp.doctor_sv === tmp2.sv) {
                    doc = 'Dr.' + ' ' + tmp2.last_name + ' ' + tmp2.first_name;
                    return true;
                }
            });
            return true;
        }
    });
    return doc;
}
