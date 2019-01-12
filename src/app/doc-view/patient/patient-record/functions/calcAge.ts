export function calcAge(sv): any {
    const value = sv;
    const year = value.slice(8, 10);
    const month = value.slice(6, 8);
    const day = value.slice(4, 6);
    const birthDate = '19' + year + '-' + month + '-' + day;
    const age = (Date.now() - (new Date(birthDate)).getTime()) / 31556952000;
    return age;
}
