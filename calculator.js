function calculate() {

    const hbar = 1.0545717e-34; // SI units
    const m_e = 9.1093829e-31; // electron mass in kg
    const J_to_eV = 6.2415093e18;
    const eV_to_J = 1/J_to_eV;
    const m_to_angstrom = 1e10;
    const angstrom_to_m = 1/m_to_angstrom;

    var edge1_eV = parseFloat(document.getElementById("edge1_eV").value);
    var edge2_eV = parseFloat(document.getElementById("edge2_eV").value);

    var photoelectron1_eV = parseFloat(document.getElementById("photoelectron1_eV").value);
    var mono1_eV = edge1_eV + photoelectron1_eV;
    document.getElementById("mono1_eV").value = mono1_eV;

    var photoelectron1_J = photoelectron1_eV * eV_to_J;
    var k1 = Math.sqrt(2*m_e*photoelectron1_J / (hbar*hbar)) / m_to_angstrom;
    document.getElementById("k1").value = k1;

    var k2 = parseFloat(document.getElementById("k2").value);
    var k2_inverse_m = k2 / angstrom_to_m;
    var photoelectron2_eV = J_to_eV * Math.pow((hbar*k2_inverse_m), 2) / (2*m_e);
    document.getElementById("photoelectron2_eV").value = photoelectron2_eV;

    var mono2_eV = photoelectron2_eV + edge2_eV;
    document.getElementById("mono2_eV").value = mono2_eV;

    var diff_edge_eV = edge2_eV - edge1_eV;
    document.getElementById("diff_edge_eV").value = diff_edge_eV;

    var diff_mono_eV = mono2_eV - mono1_eV;
    document.getElementById("diff_mono_eV").value = diff_mono_eV;

    var diff_photoelectron_eV = photoelectron2_eV - photoelectron1_eV;
    document.getElementById("diff_photoelectron_eV").value = diff_photoelectron_eV;

    var diff_k = k2 - k1;
    document.getElementById("diff_k").value = diff_k;
}

window.onload = function() {
    calculate();

    var input_ids = new Array();
    input_ids.push("edge1_eV");
    input_ids.push("edge2_eV");
    input_ids.push("photoelectron1_eV");
    input_ids.push("k2");

    var i;
    for (i=0; i<input_ids.length; i++) {
        document.getElementById(input_ids[i]).addEventListener('input', calculate);
    }

}
