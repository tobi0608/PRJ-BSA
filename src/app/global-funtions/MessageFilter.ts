import {MESSAGES} from '../mock-files/mock-messages';

export function MessageFilter(filter): object {
    const user = document.cookie.split(',');
    const messages = [];
    switch (filter) {
        case 'Termin':
            MESSAGES.forEach(function (value) {
                if (value.svTo.toString() === user[0] && value.type === 'Termin') {
                    messages.push(value);
                }
            });
            break;
        case 'Bluthochdruck':
            MESSAGES.forEach(function (value) {
                if (value.svTo.toString() === user[0] && value.type === 'Bluthochdruck') {
                    messages.push(value);
                }
            });
            break;
        case 'Pat':
            MESSAGES.forEach(function (value) {
                if (value.svTo.toString() === user[0] && value.svFrom.toString() === user[4]) {
                    messages.push(value);
                }
            });
            break;
    }
    return messages;
}


