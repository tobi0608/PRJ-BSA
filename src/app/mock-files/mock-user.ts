import {User} from './user';

export const USERS: User[] = [
    {
        sv: 3198060896, first_name: 'Tobias', last_name: 'Schwab', password: 'root', type: 'patient',
        email: 'tobias@schwab.st', assignedDoc: 2167050980, gender: 'm',
        registered: 1545663626540, last_visit: 1547535626540
    },
    {
        sv: 2870180796, first_name: 'Benjamin', last_name: 'Titlbach', password: 'root', type: 'patient',
        email: 'benjamin.titlbach@a1.net', assignedDoc: 2167050980, gender: 'm',
        registered: 1546268426540, last_visit: 1546268426540
    },
    {
        sv: 2167050980, first_name: 'Hubert', last_name: 'Mayer', password: 'root', type: 'doctor',
        email: 'test@mock.at', assignedDoc: 0, gender: 'm',
        registered: 1546268426540, last_visit: 1546556426540
    }
];
