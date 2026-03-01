function validasiNama() {
    let nama = document.getElementById("nama").value;
    let kontak = document.getElementById("kontak").value;
    let lapangan = document.getElementById("lapangan").value;
    let pola = /^[a-zA-Z' ]+$/;
    

    if(!pola.test(nama)) {
        alert("Nama Harus Berisi huruf ");
    }
    else if(!pola.test(kontak)) {
        alert("kontak Harus Berisi angka ");
    }
    else if(!pola.test(lapangan)) {
        alert("pilih salah satu lapangan");
    }

    else
    alert("nama,alamat,tempat dan tanggal lahir valid");
}