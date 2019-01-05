import {DATES} from '../mock-files/mock-vital-parameter';

export function PushData(sv, filter): object {
    const Data = [];
    DATES.forEach(function (value) {
        if (value.sv.toString() === sv) {
            switch (filter) {
                case 'systole':
                    Data.unshift([value.timestamp + 3600000, value.systole]);
                    break;
                case 'diastole':
                    Data.unshift([value.timestamp + 3600000, value.diastole]);
                    break;
                case 'heartbeat':
                    Data.unshift([value.timestamp + 3600000, value.heartbeat]);
                    break;
                case 'all':
                    Data.push(value);
                    break;
            }
        }
    });
    return Data;
}
