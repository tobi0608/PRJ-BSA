import {MESSAGES} from '../../mock-files/mock-messages';

export function MessageFilter(filter): object {
    const sv = localStorage.getItem('sv');
    const docSV = localStorage.getItem('DocSV');
    const messages = [];
    switch (filter) {
        case 'Termin':
            MESSAGES.forEach(function (value) {
                if (value.svTo.toString() === sv && value.type === 'Termin') {
                    messages.push(value);
                }
            });
            break;
        case 'Bluthochdruck':
            MESSAGES.forEach(function (value) {
                if (value.svTo.toString() === sv && value.type === 'Bluthochdruck') {
                    messages.push(value);
                }
            });
            break;
        case 'Pat':
            MESSAGES.forEach(function (value) {
                if (value.svTo.toString() === sv && value.svFrom.toString() === docSV) {
                    messages.push(value);
                }
            });
            break;
    }
    return messages;
}


