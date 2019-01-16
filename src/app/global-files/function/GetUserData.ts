import {USERS} from '../../mock-files/mock-user';
import {User} from '../../mock-files/user';

export function GetUserData(sv): any {
    let user = USERS.find(function (tmp) {
        return tmp.sv.toString() === sv;
    });
    if (!user) {
        const tmp: User = {
            sv: 0,
            password: ' ',
            first_name: ' ',
            last_name: ' ',
            email: ' ',
            type: ' ',
            gender: ' ',
            registered: 0,
            last_visit: 0,
            assignedDoc: 0
        };
        user = tmp;
    }
    return user;
}
