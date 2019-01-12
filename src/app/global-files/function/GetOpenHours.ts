import {OPENHOURS} from '../../mock-files/mock-openhours';
import {Openhours} from '../../mock-files/openhours';

export function GetOpenHours(filter): any {
    let openhours;
    switch (filter) {
        case 'patient':
            const docSV = localStorage.getItem('DocSV');
            openhours = OPENHOURS.find(function (tmp) {
                return tmp.sv.toString() === docSV;
            });
            break;
        case 'doctor':
            const sv = localStorage.getItem('sv');
            openhours = OPENHOURS.find(function (tmp) {
                return tmp.sv.toString() === sv;
            });
            if (!openhours) {
                console.log(0);
                const tmp: Openhours = {
                    sv: parseInt(sv, 10),
                    mon: ' ',
                    tues: ' ',
                    wed: ' ',
                    thues: ' ',
                    fri: ' ',
                    sat: ' ',
                    sun: ' ',
                    address: ' '
                };
                OPENHOURS.unshift(tmp);
                openhours = tmp;
                return;
            }
            break;
    }
    return openhours;
}
