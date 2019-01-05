import { Message } from './messages';

export const MESSAGES: Message[] = [
    {svFrom: 3198060896, svTo: 2167050980, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Termin', text: 'Terminvereinbarung 10.01.2019 - 12Uhr', timestamp: 3093084053080,
        seen: 'bell', check: 'check', times: 'times'},
    {svFrom: 3198060896, svTo: 2167050980, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Bluthochdruck', text: 'Bluthochdruck! 146/87/79!', timestamp: 1546700426540,
        seen: 'bell', check: ' ', times: ' '},
    {svFrom: 3198060896, svTo: 2167050980, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Bluthochdruck', text: 'Bluthochdruck! 145/83/103', timestamp:  1546642826540,
        seen: 'bell', check: ' ', times: ' '},
    {svFrom: 1234010100, svTo: 2167050980, first_name: 'Max', last_name: 'Mustermann',
        type: 'Bluthochdruck', text: 'Bluthochdruck! 180/85/110!', timestamp: 1546642800000,
        seen: ' ', check: ' ', times: ' '},
    {svFrom: 2167050980, svTo: 3198060896, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Termin', text: 'Terminvereinbarung 08.01.2019 - 9Uhr', timestamp: 1546412426540,
        seen: ' ', check: ' ', times: ' '},
    {svFrom: 1234010100, svTo: 2167050980, first_name: 'Max', last_name: 'Mustermann',
        type: 'Bluthochdruck', text: 'Bluthochdruck! 200/80/120', timestamp: 1546369226540,
        seen: ' ', check: ' ', times: ' '}
];
