import {MEDICATION} from '../../../../mock-files/mock-medication';

export function FilterMedication(sv, filter): object {
    const Meds = [];
    let count = 0;
    switch (filter) {
        case 'fresh':
            MEDICATION.forEach(function (x) {
                count++;
                if (x.sv.toString() === sv && x.fresh === true) {
                    Meds.push(x);
                } else {
                    if (count === MEDICATION.length && Meds.length < 1) {
                        document.getElementById('currentMed').innerHTML = 'Keine verschriebene Medikation';
                    }
                }
            });
            break;
        case 'expired':
            MEDICATION.forEach(function (y) {
                count++;
                if (y.sv.toString() === sv && y.fresh === false) {
                    Meds.push(y);
                } else {
                    if (count === MEDICATION.length && Meds.length < 1) {
                        document.getElementById('usedMed').innerHTML = 'Noch keine probierten Medikammente';
                    }
                }
            });
            break;
    }
    return Meds;
}
