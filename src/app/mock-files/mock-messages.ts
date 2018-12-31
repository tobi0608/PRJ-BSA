import { Message } from './messages';

export const MESSAGES: Message[] = [
    {sv: 5678041295, sv_doc: 2167050980, first_name: 'Maria', last_name: 'Musterfrau',
    type: 'Termin', text: 'Terminvereinbarung 10.01.2019 - 12Uhr', timestamp: 162, from: 'Pat'},
    {sv: 3198060896, sv_doc: 2167050980, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Bluthochdruck', text: 'Bluthochdruck! 170/90/130', timestamp: 11, from: 'Pat'},
    {sv: 3198060896, sv_doc: 2167050980, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Termin', text: 'Terminbestätigung', timestamp: 11, from: 'Doc'},
    {sv: 1234010100, sv_doc: 2167050980, first_name: 'Max', last_name: 'Mustermann',
        type: 'Bluthochdruck', text: 'Bluthochdruck! 180/85/110', timestamp: 11, from: 'Pat'},
    {sv: 3187060896, sv_doc: 2167050980, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Termin', text: 'Terminvereinbarung 08.01.2019 - 9Uhr', timestamp: 11, from: 'Pat'},
    {sv: 1234010100, sv_doc: 2167050980, first_name: 'Max', last_name: 'Mustermann',
        type: 'Bluthochdruck', text: 'Bluthochdruck! 200/80/120', timestamp: 11, from: 'Pat'}
];
