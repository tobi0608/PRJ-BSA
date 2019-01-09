import {USERS} from '../../mock-files/mock-user';

export function GetUserData(sv): object {
    const user = USERS.find(function (tmp) {
        return tmp.sv.toString() === sv;
    });
    return user;
}
