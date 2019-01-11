import {USERS} from '../../mock-files/mock-user';

export function GetUserData(sv): any {
    const user = USERS.find(function (tmp) {
        return tmp.sv.toString() === sv;
    });
    return user;
}
