import { Message } from './messages';

export const MESSAGES: Message[] = [
    {svFrom: 5678041295, svTo: 2167050980, first_name: 'Maria', last_name: 'Musterfrau',
    type: 'Termin', text: 'Terminvereinbarung 10.01.2019 - 12Uhr', timestamp: 162, seen: 'bell'},
    {svFrom: 3198060896, svTo: 2167050980, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Bluthochdruck', text: 'Bluthochdruck! 170/90/130', timestamp: 11, seen: ' '},
    {svFrom: 2167050980, svTo: 3198060896, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Termin', text: 'Terminbestätigung', timestamp: 11, seen: 'bell'},
    {svFrom: 1234010100, svTo: 2167050980, first_name: 'Max', last_name: 'Mustermann',
        type: 'Bluthochdruck', text: 'Bluthochdruck! 180/85/110', timestamp: 11, seen: ' '},
    {svFrom: 3187060896, svTo: 2167050980, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Termin', text: 'Terminvereinbarung 08.01.2019 - 9Uhr', timestamp: 11, seen: 'bell'},
    {svFrom: 1234010100, svTo: 2167050980, first_name: 'Max', last_name: 'Mustermann',
        type: 'Bluthochdruck', text: 'Bluthochdruck! 200/80/120', timestamp: 11, seen: ' '}
];
