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
            if (!openhours) {
                const tmp: Openhours = {
                    sv: parseInt(docSV, 10),
                    mon: ' ',
                    tues: ' ',
                    wed: ' ',
                    thues: ' ',
                    fri: ' ',
                    sat: ' ',
                    sun: ' ',
                    address: ' '
                };
                openhours = tmp;
            }
            break;
        case 'doctor':
            const sv = localStorage.getItem('sv');
            openhours = OPENHOURS.find(function (tmp) {
                return tmp.sv.toString() === sv;
            });
            if (!openhours) {
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
                openhours = tmp;
            }
            break;
    }
    return openhours;
}
