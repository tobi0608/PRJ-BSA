import {NEWUSERSCOUNT} from '../../../mock-files/mock-counter';

export function UserCounter(): any {
    const newUsersCount = [];
    NEWUSERSCOUNT.forEach(function (value) {
        newUsersCount.push([value.date, value.users]);
    });
    return newUsersCount;
}
