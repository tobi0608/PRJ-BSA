import {DATES} from '../../mock-files/mock-vital-parameter';

/**
 * Übergibt die Vitalwerte des gewünschten Users
 * @param sv Für welchen User die Werte gesucht werden
 * @param filter Welche Werte gesucht werden
 * @returns {any} Übergibt die gewünschten Werte
 */
export function PushData(sv, filter): any {
    const Data = [];
    DATES.forEach(function (value) {
        if (value.sv.toString() === sv) {
            switch (filter) {
                case 'bloodPressure':
                    Data.unshift([value.timestamp + 3600000, value.systole, value.diastole]);
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
