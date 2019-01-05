export function SectionSelection(url): void {
    if (url === 'new') {
        document.getElementById('newPatient').style.display = 'block';
        document.getElementById('noSelectedPatient').style.display = 'none';
        document.getElementById('selectedPatient').style.display = 'none';
    } else if (url === 'sv') {
        document.getElementById('newPatient').style.display = 'none';
        document.getElementById('noSelectedPatient').style.display = 'block';
        document.getElementById('selectedPatient').style.display = 'none';
    } else {
        document.getElementById('newPatient').style.display = 'none';
        document.getElementById('noSelectedPatient').style.display = 'none';
        document.getElementById('selectedPatient').style.display = 'block';
    }
}
