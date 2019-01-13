import {USERS} from '../../../../mock-files/mock-user';

export function GetDocDetails(): string {
    const DocSV = localStorage.getItem('DocSV');
    const docInfo = USERS.find(function (tmp) {
        return tmp.sv.toString() === DocSV;
    });
    const doc = 'Dr.' + ' ' + docInfo.last_name + ' ' + docInfo.first_name;
    return doc;
}

