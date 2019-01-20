import {Message} from './messages';

export const MESSAGES: Message[] = [
    {
        svFrom: 3985290578, svTo: 2167050980, first_name: 'Robert', last_name: 'Schmidt',
        type: 'NewPat', text: 'Ein neuer Patient hat Sie als Arzt zugewiesen!', timestamp: 1547506826540,
        seen: 'bell', check: ' ', times: ' ', info: ' '
    },
    {
        svFrom: 2870180796, svTo: 2167050980, first_name: 'Benjamin', last_name: 'Titlbach',
        type: 'Termin', text: 'Terminvereinbarung 2019-01-17 - 12:00', timestamp: 1547506826540,
        seen: 'bell', check: 'check', times: 'times', info: ' '
    },
    {
        svFrom: 3198060896, svTo: 2167050980, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Termin', text: 'Terminvereinbarung 2019-01-10 - 12:30', timestamp: 1547074826540,
        seen: ' ', check: ' ', times: ' ', info: 'accept'
    },
    {
        svFrom: 2167050980, svTo: 3198060896, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Termin', text: 'Ihre Terminvereinbarung wurde angenommen', timestamp: 1547074826540,
        seen: 'bell', check: ' ', times: ' ', info: ' '
    },
    {
        svFrom: 3198060896, svTo: 2167050980, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Termin', text: 'Terminvereinbarung 2019-01-11 - 14:45', timestamp: 1546758026540,
        seen: ' ', check: ' ', times: ' ', info: 'denied'
    },
    {
        svFrom: 2167050980, svTo: 3198060896, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Termin', text: 'Ihre Terminvereinbarung wurde abgelehnt', timestamp: 1546758026540,
        seen: ' ', check: ' ', times: ' ', info: ' '
    },
    {
        svFrom: 3198060896, svTo: 2167050980, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Bluthochdruck', text: 'Bluthochdruck! 146/87/79!', timestamp: 1546700426540,
        seen: 'bell', check: ' ', times: ' ', info: ' '
    },
    {
        svFrom: 3198060896, svTo: 2167050980, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Bluthochdruck', text: 'Bluthochdruck! 145/83/103', timestamp: 1546642826540,
        seen: 'bell', check: ' ', times: ' ', info: ' '
    },
    {
        svFrom: 2870180796, svTo: 2167050980, first_name: 'Benjamin', last_name: 'Titlbach',
        type: 'Bluthochdruck', text: 'Bluthochdruck! 180/85/110!', timestamp: 1546642800000,
        seen: ' ', check: ' ', times: ' ', info: ' '
    },
    {
        svFrom: 2167050980, svTo: 3198060896, first_name: 'Tobias', last_name: 'Schwab',
        type: 'Termin', text: 'Ihre Terminvereinbarung wurde angenommen', timestamp: 1546412426540,
        seen: ' ', check: ' ', times: ' ', info: ' '
    },
    {
        svFrom: 2870180796, svTo: 2167050980, first_name: 'Benjamin', last_name: 'Titlbach',
        type: 'Bluthochdruck', text: 'Bluthochdruck! 200/80/120', timestamp: 1546369226540,
        seen: ' ', check: ' ', times: ' ', info: ' '
    }
];
