export function SectionSelection(sv): void {
    if (sv === 'new') {
        document.getElementById('newPatient').style.display = 'block';
        document.getElementById('noSelectedPatient').style.display = 'none';
        document.getElementById('selectedPatient').style.display = 'none';
    } else if (sv === 'sv') {
        document.getElementById('newPatient').style.display = 'none';
        document.getElementById('noSelectedPatient').style.display = 'block';
        document.getElementById('selectedPatient').style.display = 'none';
    } else {
        document.getElementById('newPatient').style.display = 'none';
        document.getElementById('noSelectedPatient').style.display = 'none';
        document.getElementById('selectedPatient').style.display = 'block';
    }
}
