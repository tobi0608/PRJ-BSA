import {MESSAGES} from '../../mock-files/mock-messages';
import {Message} from '../../mock-files/messages';

export function MessageFilter(filter): object {
    const sv = localStorage.getItem('sv');
    const docSV = localStorage.getItem('DocSV');
    const messages = [];
    switch (filter) {
        case 'request':
            MESSAGES.forEach(function (value) {
                if (value.svTo.toString() === sv && value.type === 'Termin' && value.seen === 'bell') {
                    messages.push(value);
                }
            });
            break;
        case 'accept':
            MESSAGES.forEach(function (value) {
                if (value.svTo.toString() === sv && value.type === 'Termin' && value.info === 'accept') {
                    messages.push(value);
                }
            });
            break;
        case 'denied':
            MESSAGES.forEach(function (value) {
                if (value.svTo.toString() === sv && value.type === 'Termin' && value.info === 'denied') {
                    messages.push(value);
                }
            });
            break;
        case 'nothing':
            MESSAGES.forEach(function (value) {
                messages.push(value);
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
    if (!(messages && messages.length)) {
        console.log(0);
        const tmp: Message = {
            svFrom: 0,
            svTo: 0,
            first_name: ' ',
            last_name: ' ',
            type: ' ',
            text: 'Keine Anfragen',
            timestamp: null,
            seen: ' ',
            check: ' ',
            times: ' ',
            info: 'noRequest'
        };
        messages.push(tmp);
    }
    return messages;
}


