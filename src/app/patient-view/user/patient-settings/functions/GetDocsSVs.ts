import {USERS} from '../../../../mock-files/mock-user';

export function GetDocsSVs(): object {
    const doc = [];
    USERS.forEach(function (tmp) {
        if (tmp.type === 'doctor') {
            doc.push(tmp);
        }
    });
    return doc;
}
