import {NEWUSERSCOUNT} from '../../../mock-files/mock-counter';

/**
 * Übergibt die Werte für die Chart Ansicht der letzte Woche registrierten User
 * @returns {any} Übergibt die Werte im richtigen Format
 */
export function UserCounter(): any {
    const newUsersCount = [];
    NEWUSERSCOUNT.forEach(function (value) {
        newUsersCount.push([value.date, value.users]);
    });
    return newUsersCount;
}
