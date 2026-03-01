function validasiNama() {
    let nama = document.getElementById("nama").value;
    let kontak = document.getElementById("kontak").value;
    let lapangan = document.getElementById("lapangan").value;
    let pola = /^[a-zA-Z' ]+$/;
    

    if(!pola.test(nama)) {
        alert("Nama Harus Berisi huruf ");
    }
    else if(!pola.test(kontak)) {
        alert("alamat Harus Berisi huruf ");
    }
    else if(!pola.test(lapangan)) {
        alert("tempat lahir Harus Berisi huruf ");
    }

    else
    alert("nama,alamat,tempat dan tanggal lahir valid");
}