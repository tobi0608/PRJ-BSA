import {OPENHOURS} from '../../mock-files/mock-openhours';

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
            break;
    }
    return openhours;
}
