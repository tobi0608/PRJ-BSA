import {USERS} from '../../mock-files/mock-user';

/**
 * Überprüft die Zugangsberechtigung
 * @param filter Welche Typ sich gesucht ist
 */
export function LogInCheck(filter): void {
    const sv = localStorage.getItem('sv');
    const type = localStorage.getItem('type');
    let user;
    if (sv !== null) {
        user = USERS.find(function (tmp) {
            return tmp.sv.toString() === sv.toString() && type === filter;
        });
    }
    if (!user) {
        document.getElementById('loginSite').style.display = 'none';
        document.getElementById('noAccess').style.display = 'block';
        return;
    }
}
