import {MEDICATION} from '../../mock-files/mock-medication';

export function FilterMedication(sv, filter): object {
    const Meds = [];
    let count = 0;
    switch (filter) {
        case 'fresh':
            MEDICATION.forEach(function (x) {
                count++;
                if (x.sv.toString() === sv && x.fresh === true) {
                    Meds.push(x);
                }
            });
            break;
        case 'expired':
            MEDICATION.forEach(function (y) {
                count++;
                if (y.sv.toString() === sv && y.fresh === false) {
                    Meds.push(y);
                }
            });
            break;
    }
    return Meds;
}
