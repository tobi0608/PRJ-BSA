import {USERS} from '../../../../mock-files/mock-user';

export function GetDocDetails(): string {
    const user = document.cookie.split(',');
    let doc = '';
    USERS.find(function (tmp) {
        if (tmp.sv.toString() === user[4]) {
            doc = 'Dr.' + ' '  + tmp.last_name + ' ' + tmp.first_name;
            return true;
        }
    });
    return doc;
}
