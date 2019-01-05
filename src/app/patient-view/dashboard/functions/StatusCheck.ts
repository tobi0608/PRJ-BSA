import {DATES} from '../../../mock-files/mock-vital-parameter';

export function StatusCheck(): string {
    let status = '';
    if (DATES[0].systole <= 140 && DATES[1].systole <= 140 && DATES[2].systole <= 140) {
        status = 'check-circle';
    } else if (DATES[0].systole <= 140 && DATES[1].systole <= 140) {
        status = 'exclamation-circle';
    } else if (DATES[1].systole <= 140 && DATES[2].systole <= 140) {
        status = 'exclamation-circle';
    } else if (DATES[0].systole <= 140 && DATES[2].systole <= 140) {
        status = 'exclamation-circle';
    } else {
        status = 'times-circle';
    }
    return status;
}
