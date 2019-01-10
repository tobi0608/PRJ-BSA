import {DATES} from '../../../mock-files/mock-vital-parameter';

export function ThreeDaysList(filter): any {
    const data = [];
    const sv = localStorage.getItem('sv');
    switch (filter) {
        case 'bloodPressure':
            DATES.forEach(function (value) {
                if (value.sv.toString() === sv) {
                    if (value.timestamp > Date.now() - 345600001) { // letzten 3 Tage
                        data.unshift([value.timestamp + 3600000, value.systole, value.diastole]);
                    }
                }
            });
            break;
        case 'heartbeat':
            DATES.forEach(function (value) {
                if (value.sv.toString() === sv) {
                    if (value.timestamp > Date.now() - 345600001) { // letzten 3 Tage
                        data.unshift([value.timestamp + 3600000, value.heartbeat]);
                    }
                }
            });
            break;
    }
    return data;
}
