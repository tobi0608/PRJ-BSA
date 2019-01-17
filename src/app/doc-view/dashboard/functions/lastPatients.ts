import {USERS} from '../../../mock-files/mock-user';

/**
 * Übergibt die letzten registrierten User
 * @returns {object} Übergibt Objekt mit den letzten zugewiesenen Users
 */
export function lastPatients(): object {
    const newUsers = [];
    USERS.forEach(function (value) {
        if (value.assignedDoc.toString() === localStorage.getItem('sv')) {
            newUsers.push(value);
        }
    });
    return newUsers;
}


