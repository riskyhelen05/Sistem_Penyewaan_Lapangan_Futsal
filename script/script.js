
function validasiNama() {
    let nama = document.getElementById("nama").value.trim();
    let kontak = document.getElementById("kontak").value.trim();
    let lapangan = document.getElementById("lapangan").value;
    let tanggal = document.getElementById("tanggal").value;
    let jamMulai = document.getElementById("jamMulai").value;
    let jamSelesai = document.getElementById("jamSelesai").value;

    let polaHuruf = /^[a-zA-Z' ]+$/;
    let polaAngka = /^[0-9]+$/;

    if (!polaHuruf.test(nama)) {
        alert("Nama harus berisi huruf saja!");
        return false;
    }

    if (!polaAngka.test(kontak)) {
        alert("Kontak harus berisi angka saja!");
        return false;
    }

    if (tanggal === "") {
        alert("Tanggal harus dipilih!");
        return false;
    }

    if (jamMulai === "" || jamSelesai === "") {
        alert("Jam mulai dan jam selesai harus diisi!");
        return false;
    }

    if (jamSelesai <= jamMulai) {
        alert("Jam selesai harus lebih besar dari jam mulai!");
        return false;
    }

    return true;
}



let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
let editIndex = -1;

const form = document.getElementById("formBooking");
const tbody = document.getElementById("riwayatBody");

tampilkanData();


form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (!validasiNama()) {
        return;
    }

    const nama = document.getElementById("nama").value;
    const kontak = document.getElementById("kontak").value;
    const lapangan = document.getElementById("lapangan").value;
    const tanggal = document.getElementById("tanggal").value;
    const jamMulai = document.getElementById("jamMulai").value;
    const jamSelesai = document.getElementById("jamSelesai").value;

    const data = {
        nama,
        kontak,
        lapangan,
        tanggal,
        jam: jamMulai + " - " + jamSelesai,
        status: "Aktif"
    };

    if (editIndex === -1) {
        bookings.push(data);
    } else {
        bookings[editIndex] = data;
        editIndex = -1;
    }

    localStorage.setItem("bookings", JSON.stringify(bookings));
    form.reset();
    tampilkanData();
});

function tampilkanData() {
    tbody.innerHTML = "";

    bookings.forEach((item, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>${item.kontak}</td>
                <td>${item.lapangan}</td>
                <td>${item.tanggal}</td>
                <td>${item.jam}</td>
                <td>${item.status}</td>
                <td>
                    <button onclick="editData(${index})">Edit</button>
                    <button onclick="hapusData(${index})">Hapus</button>
                </td>
            </tr>
        `;
    });
}

function hapusData(index) {
    if (confirm("Yakin ingin menghapus booking ini?")) {
        bookings.splice(index, 1);
        localStorage.setItem("bookings", JSON.stringify(bookings));
        tampilkanData();
    }
}

function editData(index) {
    const data = bookings[index];

    document.getElementById("nama").value = data.nama;
    document.getElementById("kontak").value = data.kontak;
    document.getElementById("lapangan").value = data.lapangan;
    document.getElementById("tanggal").value = data.tanggal;

    const jamSplit = data.jam.split(" - ");
    document.getElementById("jamMulai").value = jamSplit[0];
    document.getElementById("jamSelesai").value = jamSplit[1];

    editIndex = index;
}