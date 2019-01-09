import {USERS} from '../../mock-files/mock-user';

export function LogInCheck(filter): void {
    const sv = localStorage.getItem('sv');
    const type = localStorage.getItem('type');
    const user = USERS.find(function (tmp) {
        return tmp.sv.toString() === sv.toString() && type  === filter;
    });
    if (!user) {
        document.getElementById('loginSite').style.display = 'none';
        document.getElementById('noAccess').style.display = 'block';
        return;
    } else {
        return;
    }
}
