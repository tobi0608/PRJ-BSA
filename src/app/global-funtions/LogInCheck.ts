import {USERS} from '../mock-files/mock-user';

export function LogInCheck(filter): void {
    const user = document.cookie.split(',');
    let count = 0;
    USERS.find(function (tmp) {
        count++;
        if (tmp.sv.toString() === user[0] && tmp.type === filter) {
            return true;
        } else {
            if (count === USERS.length) {
                document.getElementById('loginSite').style.display = 'none';
                document.getElementById('noAccess').style.display = 'block';
                return true;
            }
        }
    });
}
