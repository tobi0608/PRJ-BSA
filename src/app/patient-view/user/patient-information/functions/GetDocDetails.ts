import {USERS} from '../../../../mock-files/mock-user';

export function GetDocDetails(): string {
    let doc;
    const DocSV = localStorage.getItem('DocSV');
    const docInfo = USERS.find(function (tmp) {
        return tmp.sv.toString() === DocSV;
    });
    if (!docInfo) {
        doc = 'Keinen Arzt ausgewählt!';
    } else {
        doc = 'Dr.' + ' ' + docInfo.last_name + ' ' + docInfo.first_name;
    }
    return doc;
}

