import {USERS} from '../../../../mock-files/mock-user';

export function GetDocsSVs(): object {
    const doc = [];
    USERS.find(function (tmp) {
        if (tmp.type === 'doctor') {
            doc.unshift(tmp);
            return true;
        }
    });
    return doc;
}
