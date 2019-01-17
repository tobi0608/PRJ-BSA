import {USERS} from '../../../../mock-files/mock-user';

/**
 * Übergibt alle bereits angemeldete Ärzte
 * @returns {object} Objekt mit allen Ärzten
 */
export function GetDocsSVs(): object {
    const doc = [];
    USERS.forEach(function (tmp) {
        if (tmp.type === 'doctor') {
            doc.push(tmp);
        }
    });
    return doc;
}
