import {DATES} from '../../../mock-files/mock-vital-parameter';

export function StatusCheck(): string {
    let status = '';
    const last = [];
    let x = 0;
    DATES.find(function (tmp) {
        if (tmp.sv.toString() === localStorage.getItem('sv')) {
            x++;
            last.unshift(tmp);
            if (x === 3) {
                return true;
            }
        }
    });
    if (last[0].systole <= 140 && last[1].systole <= 140 && last[2].systole <= 140) {
        status = 'check-circle';
    } else if (last[0].systole <= 140 && last[1].systole <= 140) {
        status = 'exclamation-circle';
    } else if (last[1].systole <= 140 && last[2].systole <= 140) {
        status = 'exclamation-circle';
    } else if (last[0].systole <= 140 && last[2].systole <= 140) {
        status = 'exclamation-circle';
    } else {
        status = 'times-circle';
    }
    return status;
}
