import {Counter} from './counter';

export const NEWUSERSCOUNT: Counter[] = [
    {date: Date.now() - 604800000, users: 10},
    {date: Date.now() - 518400000, users: 2},
    {date: Date.now() - 432000000, users: 6},
    {date: Date.now() - 345600000, users: 8},
    {date: Date.now() - 259200000, users: 17},
    {date: Date.now() - 172800000, users: 9},
    {date: Date.now() - 86400000, users: 5}
];
