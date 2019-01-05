import {DATES} from '../../../mock-files/mock-vital-parameter';

export function ThreeDaysList(filter): any {
    const data = [];
    const user = document.cookie.split(',');
    switch (filter) {
        case 'systole':
            DATES.forEach(function (value) {
                if (value.sv.toString() === user[0]) {
                    if (value.timestamp > Date.now() - 345600001) { // letzten 3 Tage
                        data.unshift([value.timestamp + 3600000, value.systole]);
                    }
                }
            });
            break;
        case 'diastole':
            DATES.forEach(function (value) {
                if (value.sv.toString() === user[0]) {
                    if (value.timestamp > Date.now() - 345600001) { // letzten 3 Tage
                        data.unshift([value.timestamp + 3600000, value.diastole]);
                    }
                }
            });
            break;
        case 'heartbeat':
            DATES.forEach(function (value) {
                if (value.sv.toString() === user[0]) {
                    if (value.timestamp > Date.now() - 345600001) { // letzten 3 Tage
                        data.unshift([value.timestamp + 3600000, value.heartbeat]);
                    }
                }
            });
            break;
    }
    return data;
}
