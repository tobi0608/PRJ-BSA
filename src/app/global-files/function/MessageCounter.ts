import {MESSAGES} from '../../mock-files/mock-messages';

export function MessageCounter(filter): string {
    let countMessage = 0;
    let messageTxt = ' ';
    const user = document.cookie.split(',');
    switch (filter) {
        case 'Termin':
            MESSAGES.forEach(function (value) {
                if (value.svTo.toString() === user[0] && value.type === 'Termin' && value.seen === 'bell') {
                    countMessage++;
                }
                if (countMessage === 1) {
                    messageTxt = countMessage.toString() + ' neue Terminanfrage';
                } else if (countMessage > 1) {
                    messageTxt = countMessage.toString() + ' neue Terminanfragen';
                } else {
                    messageTxt = 'keine neue  Terminanfrage';
                }
            });
            break;
        case 'Alert':
            MESSAGES.forEach(function (value) {
                if (value.svTo.toString() === user[0] && value.type === 'Bluthochdruck' && value.seen === 'bell') {
                    countMessage++;
                }
                if (countMessage === 1) {
                    messageTxt = countMessage.toString() + ' neuen Alert';
                } else if (countMessage > 1) {
                    messageTxt = countMessage.toString() + ' neue Alerts';
                } else {
                    messageTxt = 'keinen neuen Alert';
                }
            });
            break;
        case 'Message':
            MESSAGES.forEach(function (value) {
                if (value.svTo.toString() === user[0] && value.svFrom.toString() === user[4]
                    && value.seen === 'bell') {
                    countMessage++;
                }
                if (countMessage === 1) {
                    messageTxt = countMessage.toString() + ' neue Nachricht';
                } else if (countMessage > 1) {
                    messageTxt = countMessage.toString() + ' neue Nachrichten';
                } else {
                    messageTxt = 'keine neue Nachricht';
                }
            });
            break;
    }
    return messageTxt;
}
