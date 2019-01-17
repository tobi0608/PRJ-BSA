import {MEDICATION} from '../../mock-files/mock-medication';

/**
 * Gibt gewünschte und auf User zugewiesene Medikation aus
 * @param sv Übergibt die SV-Nummer des Users
 * @param filter Welche Art von Med. gefragt ist
 * @returns {object} Übergibt Objekt mit den gewünschten Medikamenten
 */
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
