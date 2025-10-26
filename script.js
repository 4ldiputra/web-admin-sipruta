document.addEventListener('DOMContentLoaded', function () {
    // === LOGIN ===
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username === 'admin' && password === 'password') {
                alert('Login berhasil!');
                window.location.href = 'dashboard.html';
            } else {
                alert('Username atau password salah!');
            }
        });
    }

    // === MODAL DATA WARGA ===
// Tambah Warga
const btnTambahWarga = document.getElementById('btnTambahWarga');
const tambahWargaModal = document.getElementById('tambahWargaModal');
const btnBatalTambahWarga = document.getElementById('btnBatalTambahWarga');
const btnSimpanTambahWarga = document.getElementById('btnSimpanTambahWarga');
const formTambahWarga = document.getElementById('formTambahWarga');

if (btnTambahWarga && tambahWargaModal) {
    btnTambahWarga.addEventListener('click', function () {
        tambahWargaModal.style.display = 'block';
    });
}

if (btnBatalTambahWarga) {
    btnBatalTambahWarga.addEventListener('click', function () {
        tambahWargaModal.style.display = 'none';
        formTambahWarga.reset();
    });
}

if (formTambahWarga) {
    formTambahWarga.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('✅ Data warga baru berhasil ditambahkan!');
        tambahWargaModal.style.display = 'none';
        formTambahWarga.reset();
    });
}

// Edit Warga
const editWargaModal = document.getElementById('editWargaModal');
const btnBatalEditWarga = document.getElementById('btnBatalEditWarga');
const btnSimpanEditWarga = document.getElementById('btnSimpanEditWarga');
const formEditWarga = document.getElementById('formEditWarga');

if (btnBatalEditWarga) {
    btnBatalEditWarga.addEventListener('click', function () {
        editWargaModal.style.display = 'none';
        formEditWarga.reset();
    });
}

if (formEditWarga) {
    formEditWarga.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('✅ Data warga berhasil diperbarui!');
        editWargaModal.style.display = 'none';
        formEditWarga.reset();
    });
}

// Hapus Warga
const hapusWargaModal = document.getElementById('hapusWargaModal');
const btnOkHapusWarga = document.getElementById('btnOkHapusWarga');
const btnBatalHapusWarga = document.getElementById('btnBatalHapusWarga');

if (btnBatalHapusWarga) {
    btnBatalHapusWarga.addEventListener('click', function () {
        hapusWargaModal.style.display = 'none';
    });
}

if (btnOkHapusWarga) {
    btnOkHapusWarga.addEventListener('click', function () {
        alert('🗑️ Data warga berhasil dihapus!');
        hapusWargaModal.style.display = 'none';
    });
}

// Fungsi untuk membuka modal edit (Warga)
function openEditWargaModal(id) {
    const row = document.querySelector(`tr[data-id="${id}"]`);
    const cells = row.querySelectorAll('td');
    
    document.getElementById('editWargaId').value = id;
    document.getElementById('editNamaLengkap').value = cells[1].textContent.trim();
    document.getElementById('editNik').value = cells[2].textContent.trim();
    document.getElementById('editJenisKelamin').value = cells[3].textContent.trim();
    document.getElementById('editTempatTanggalLahir').value = cells[4].textContent.trim();
    document.getElementById('editAgama').value = cells[5].textContent.trim();
    document.getElementById('editAlamat').value = cells[6].textContent.trim();

    editWargaModal.style.display = 'block';
}

// Fungsi untuk membuka modal hapus (Warga)
function openHapusWargaModal(id) {
    hapusWargaModal.style.display = 'block';
    hapusWargaModal.dataset.id = id;
}

// Event listener untuk tombol di tabel
document.addEventListener('click', function (e) {
    // Edit Warga
    if (e.target.classList.contains('btn-edit')) {
        const page = window.location.pathname.split('/').pop();
        if (page === 'data-warga.html') {
            openEditWargaModal(e.target.dataset.id);
        }
    }

    // Hapus Warga
    if (e.target.classList.contains('btn-delete')) {
        const page = window.location.pathname.split('/').pop();
        if (page === 'data-warga.html') {
            openHapusWargaModal(e.target.dataset.id);
        }
    }
});

    // === SIDEBAR ACTIVE ===
    const currentPath = window.location.pathname.split('/').pop();
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // === MODAL TAMBAH KK ===
    const btnTambahKK = document.getElementById('btnTambahKK');
    const tambahKKModal = document.getElementById('tambahKKModal');
    const btnBatalTambahKK = document.getElementById('btnBatalTambahKK');
    const btnSimpanTambahKK = document.getElementById('btnSimpanTambahKK');
    const formTambahKK = document.getElementById('formTambahKK');

    if (btnTambahKK && tambahKKModal) {
        btnTambahKK.addEventListener('click', function () {
            tambahKKModal.style.display = 'block';
        });
    }

    if (btnBatalTambahKK) {
        btnBatalTambahKK.addEventListener('click', function () {
            tambahKKModal.style.display = 'none';
            formTambahKK.reset();
        });
    }

    if (formTambahKK) {
        formTambahKK.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('✅ Kartu Keluarga baru berhasil ditambahkan!');
            tambahKKModal.style.display = 'none';
            formTambahKK.reset();
        });
    }

    // === MODAL EDIT KK ===
    const editKKModal = document.getElementById('editKKModal');
    const btnBatalEditKK = document.getElementById('btnBatalEditKK');
    const btnSimpanEditKK = document.getElementById('btnSimpanEditKK');
    const formEditKK = document.getElementById('formEditKK');

    if (btnBatalEditKK) {
        btnBatalEditKK.addEventListener('click', function () {
            editKKModal.style.display = 'none';
            formEditKK.reset();
        });
    }

    if (formEditKK) {
        formEditKK.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('✅ Data Kartu Keluarga berhasil diperbarui!');
            editKKModal.style.display = 'none';
            formEditKK.reset();
        });
    }

    // === MODAL DETAIL KK ===
    const detailKKModal = document.getElementById('detailKKModal');
    const btnCloseDetail = document.getElementById('btnCloseDetail');
    const addMemberCard = document.querySelector('.add-member-card');

    if (btnCloseDetail) {
        btnCloseDetail.addEventListener('click', function () {
            detailKKModal.style.display = 'none';
        });
    }

    if (addMemberCard) {
        addMemberCard.addEventListener('click', function () {
            detailKKModal.style.display = 'none';
            document.getElementById('tambahAnggotaModal').style.display = 'block';
        });
    }

    // === MODAL TAMBAH ANGGOTA ===
    const tambahAnggotaModal = document.getElementById('tambahAnggotaModal');
    const btnBatalTambahAnggota = document.getElementById('btnBatalTambahAnggota');
    const btnSimpanTambahAnggota = document.getElementById('btnSimpanTambahAnggota');
    const formTambahAnggota = document.getElementById('formTambahAnggota');

    if (btnBatalTambahAnggota) {
        btnBatalTambahAnggota.addEventListener('click', function () {
            tambahAnggotaModal.style.display = 'none';
            formTambahAnggota.reset();
        });
    }

    if (formTambahAnggota) {
        formTambahAnggota.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('✅ Anggota keluarga baru berhasil ditambahkan!');
            tambahAnggotaModal.style.display = 'none';
            formTambahAnggota.reset();
        });
    }

    // === MODAL HAPUS ===
    const hapusModal = document.getElementById('hapusModal');
    const btnOkHapus = document.getElementById('btnOkHapus');
    const btnBatalHapus = document.getElementById('btnBatalHapus');

    if (btnBatalHapus) {
        btnBatalHapus.addEventListener('click', function () {
            hapusModal.style.display = 'none';
        });
    }

    if (btnOkHapus) {
        btnOkHapus.addEventListener('click', function () {
            alert('🗑️ Data Kartu Keluarga berhasil dihapus!');
            hapusModal.style.display = 'none';
        });
    }

    // === MODAL KEJADIAN ===
    // Tambah Kejadian
    const btnTambahKejadian = document.getElementById('btnTambahKejadian');
    const tambahKejadianModal = document.getElementById('tambahKejadianModal');
    const btnBatalTambahKejadian = document.getElementById('btnBatalTambahKejadian');
    const btnSimpanTambahKejadian = document.getElementById('btnSimpanTambahKejadian');
    const formTambahKejadian = document.getElementById('formTambahKejadian');

    if (btnTambahKejadian && tambahKejadianModal) {
        btnTambahKejadian.addEventListener('click', function () {
            tambahKejadianModal.style.display = 'block';
        });
    }

    if (btnBatalTambahKejadian) {
        btnBatalTambahKejadian.addEventListener('click', function () {
            tambahKejadianModal.style.display = 'none';
            formTambahKejadian.reset();
        });
    }

    if (formTambahKejadian) {
        formTambahKejadian.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('✅ Kejadian baru berhasil ditambahkan!');
            tambahKejadianModal.style.display = 'none';
            formTambahKejadian.reset();
        });
    }

    // Edit Kejadian
    const editKejadianModal = document.getElementById('editKejadianModal');
    const btnBatalEditKejadian = document.getElementById('btnBatalEditKejadian');
    const btnSimpanEditKejadian = document.getElementById('btnSimpanEditKejadian');
    const formEditKejadian = document.getElementById('formEditKejadian');

    if (btnBatalEditKejadian) {
        btnBatalEditKejadian.addEventListener('click', function () {
            editKejadianModal.style.display = 'none';
            formEditKejadian.reset();
        });
    }

    if (formEditKejadian) {
        formEditKejadian.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('✅ Data kejadian berhasil diperbarui!');
            editKejadianModal.style.display = 'none';
            formEditKejadian.reset();
        });
    }

    // Hapus Kejadian
    const hapusKejadianModal = document.getElementById('hapusKejadianModal');
    const btnOkHapusKejadian = document.getElementById('btnOkHapusKejadian');
    const btnBatalHapusKejadian = document.getElementById('btnBatalHapusKejadian');

    if (btnBatalHapusKejadian) {
        btnBatalHapusKejadian.addEventListener('click', function () {
            hapusKejadianModal.style.display = 'none';
        });
    }

    if (btnOkHapusKejadian) {
        btnOkHapusKejadian.addEventListener('click', function () {
            alert('🗑️ Data kejadian berhasil dihapus!');
            hapusKejadianModal.style.display = 'none';
        });
    }

    // === MODAL PENGUMUMAN ===
    // Edit Pengumuman
    const editPengumumanModal = document.getElementById('editPengumumanModal');
    const btnBatalEditPengumuman = document.getElementById('btnBatalEditPengumuman');
    const btnSimpanEditPengumuman = document.getElementById('btnSimpanEditPengumuman');
    const formEditPengumuman = document.getElementById('formEditPengumuman');

    if (btnBatalEditPengumuman) {
        btnBatalEditPengumuman.addEventListener('click', function () {
            editPengumumanModal.style.display = 'none';
            formEditPengumuman.reset();
        });
    }

    if (formEditPengumuman) {
        formEditPengumuman.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('✅ Pengumuman berhasil diperbarui!');
            editPengumumanModal.style.display = 'none';
            formEditPengumuman.reset();
        });
    }

    // Hapus Pengumuman
    const hapusPengumumanModal = document.getElementById('hapusPengumumanModal');
    const btnOkHapusPengumuman = document.getElementById('btnOkHapusPengumuman');
    const btnBatalHapusPengumuman = document.getElementById('btnBatalHapusPengumuman');

    if (btnBatalHapusPengumuman) {
        btnBatalHapusPengumuman.addEventListener('click', function () {
            hapusPengumumanModal.style.display = 'none';
        });
    }

    if (btnOkHapusPengumuman) {
        btnOkHapusPengumuman.addEventListener('click', function () {
            alert('🗑️ Pengumuman berhasil dihapus!');
            hapusPengumumanModal.style.display = 'none';
        });
    }

    // === FORM PENGUMUMAN ===
    const announcementForm = document.getElementById('announcementForm');
    if (announcementForm) {
        announcementForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('📢 Pengumuman berhasil ditambahkan!');
            announcementForm.reset();
        });
    }

    // === MODAL SURAT MENYURAT ===
    // Edit Surat
    const editSuratModal = document.getElementById('editSuratModal');
    const btnBatalEditSurat = document.getElementById('btnBatalEditSurat');
    const btnSimpanEditSurat = document.getElementById('btnSimpanEditSurat');
    const formEditSurat = document.getElementById('formEditSurat');

    if (btnBatalEditSurat) {
        btnBatalEditSurat.addEventListener('click', function () {
            editSuratModal.style.display = 'none';
            formEditSurat.reset();
        });
    }

    if (formEditSurat) {
        formEditSurat.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('✅ Data permintaan surat berhasil diperbarui!');
            editSuratModal.style.display = 'none';
            formEditSurat.reset();
        });
    }

    // Hapus Surat
    const hapusSuratModal = document.getElementById('hapusSuratModal');
    const btnOkHapusSurat = document.getElementById('btnOkHapusSurat');
    const btnBatalHapusSurat = document.getElementById('btnBatalHapusSurat');

    if (btnBatalHapusSurat) {
        btnBatalHapusSurat.addEventListener('click', function () {
            hapusSuratModal.style.display = 'none';
        });
    }

    if (btnOkHapusSurat) {
        btnOkHapusSurat.addEventListener('click', function () {
            alert('🗑️ Data permintaan surat berhasil dihapus!');
            hapusSuratModal.style.display = 'none';
        });
    }

    // === FORM SURAT MENYURAT ===
    const suratForm = document.getElementById('suratForm');
    if (suratForm) {
        suratForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('✉️ Permintaan surat berhasil disimpan!');
            suratForm.reset();
        });
    }

    // === EVENT LISTENER UNTUK TOMBOL DI TABEL ===
    document.addEventListener('click', function (e) {
        // Detail (KK)
        if (e.target.classList.contains('btn-detail')) {
            openDetailModal(e.target.dataset.id);
        }

        // Edit (KK, Kejadian, Pengumuman, Surat)
        if (e.target.classList.contains('btn-edit')) {
            const page = window.location.pathname.split('/').pop();
            if (page === 'kartu-keluarga.html') {
                openEditModal(e.target.dataset.id);
            } else if (page === 'kejadian.html') {
                openEditKejadianModal(e.target.dataset.id);
            } else if (page === 'pengumuman.html') {
                openEditPengumumanModal(e.target.dataset.id);
            } else if (page === 'surat-menyurat.html') {
                openEditSuratModal(e.target.dataset.id);
            }
        }

        // Hapus (KK, Kejadian, Pengumuman, Surat)
        if (e.target.classList.contains('btn-delete')) {
            const page = window.location.pathname.split('/').pop();
            if (page === 'kartu-keluarga.html') {
                openHapusModal(e.target.dataset.id);
            } else if (page === 'kejadian.html') {
                openHapusKejadianModal(e.target.dataset.id);
            } else if (page === 'pengumuman.html') {
                openHapusPengumumanModal(e.target.dataset.id);
            } else if (page === 'surat-menyurat.html') {
                openHapusSuratModal(e.target.dataset.id);
            }
        }
    });

    // Fungsi untuk membuka modal detail (KK)
    function openDetailModal(id) {
        document.getElementById('detailNamaKepala').textContent = 'Seful Rhoman';
        document.getElementById('detailEmail').textContent = 'seful.rhoman@example.com';
        document.getElementById('detailTelepon').textContent = '+62 812 - 2309 - 1319';
        document.getElementById('detailNoKK').textContent = '21903U97197108';
        document.getElementById('detailAlamat').textContent = 'Blok A No.1, RT 03 / RW 06';
        document.getElementById('detailKelurahan').textContent = 'Karang Duren';
        document.getElementById('detailKecamatan').textContent = 'Sokaraja';
        document.getElementById('detailKabupaten').textContent = 'Banyumas';

        detailKKModal.style.display = 'block';
    }

    // Fungsi untuk membuka modal edit (KK)
    function openEditModal(id) {
        const row = document.querySelector(`tr[data-id="${id}"]`);
        const cells = row.querySelectorAll('td');
        
        document.getElementById('editKKId').value = id;
        document.getElementById('editNoKK').value = cells[1].textContent.trim();
        document.getElementById('editKepalaKeluarga').value = cells[2].textContent.trim();
        document.getElementById('editAlamat').value = cells[3].textContent.trim();
        document.getElementById('editJumlahAnggota').value = cells[4].textContent.trim();
        document.getElementById('editNomorTelepon').value = '';
        document.getElementById('editEmail').value = '';

        editKKModal.style.display = 'block';
    }

    // Fungsi untuk membuka modal hapus (KK)
    function openHapusModal(id) {
        hapusModal.style.display = 'block';
        hapusModal.dataset.id = id;
    }

    // Fungsi untuk membuka modal edit (Kejadian)
    function openEditKejadianModal(id) {
        const row = document.querySelector(`tr[data-id="${id}"]`);
        const cells = row.querySelectorAll('td');
        
        document.getElementById('editKejadianId').value = id;
        document.getElementById('editNamaKejadian').value = cells[1].textContent.trim();
        document.getElementById('editDeskripsi').value = cells[2].textContent.trim();
        document.getElementById('editTanggal').value = cells[3].textContent.trim();

        editKejadianModal.style.display = 'block';
    }

    // Fungsi untuk membuka modal hapus (Kejadian)
    function openHapusKejadianModal(id) {
        hapusKejadianModal.style.display = 'block';
        hapusKejadianModal.dataset.id = id;
    }

    // Fungsi untuk membuka modal edit (Pengumuman)
    function openEditPengumumanModal(id) {
        const card = document.querySelector(`.announcement-card[data-id="${id}"]`);
        if (card) {
            const title = card.querySelector('h2').textContent;
            const meta = card.querySelector('.announcement-meta').textContent;
            const desc = card.querySelector('p').textContent;

            // Isi form edit
            document.getElementById('editPengumumanId').value = id;
            document.getElementById('editJenis').value = meta.includes('Kegiatan') ? 'Kegiatan' : 'Pengumuman';
            document.getElementById('editJudul').value = title;
            document.getElementById('editDeskripsi').value = desc;
            document.getElementById('editTanggal').value = meta.split('-')[1].trim();

            editPengumumanModal.style.display = 'block';
        }
    }

    // Fungsi untuk membuka modal hapus (Pengumuman)
    function openHapusPengumumanModal(id) {
        hapusPengumumanModal.style.display = 'block';
        hapusPengumumanModal.dataset.id = id;
    }

    // Fungsi untuk membuka modal edit (Surat)
    function openEditSuratModal(id) {
        const row = document.querySelector(`tr[data-id="${id}"]`);
        const cells = row.querySelectorAll('td');
        
        document.getElementById('editSuratId').value = id;
        document.getElementById('editNamaWarga').value = cells[1].textContent.trim();
        document.getElementById('editNoKTP').value = '3302213224211'; // Contoh data
        document.getElementById('editJenisSurat').value = cells[2].textContent.trim();
        document.getElementById('editTanggalPermintaan').value = cells[3].textContent.trim();
        document.getElementById('editTujuanSurat').value = 'Sebagai syarat administrasi perpanjangan kontrak kerja';
        document.getElementById('editCatatanTambahan').value = 'Harap dicetak rangkap dua';

        editSuratModal.style.display = 'block';
    }

    // Fungsi untuk membuka modal hapus (Surat)
    function openHapusSuratModal(id) {
        hapusSuratModal.style.display = 'block';
        hapusSuratModal.dataset.id = id;
    }

    // Tutup modal saat klik di luar
    window.onclick = function (event) {
        if (event.target === tambahKKModal) {
            tambahKKModal.style.display = 'none';
            formTambahKK.reset();
        }
        if (event.target === editKKModal) {
            editKKModal.style.display = 'none';
            formEditKK.reset();
        }
        if (event.target === detailKKModal) {
            detailKKModal.style.display = 'none';
        }
        if (event.target === tambahAnggotaModal) {
            tambahAnggotaModal.style.display = 'none';
            formTambahAnggota.reset();
        }
        if (event.target === hapusModal) {
            hapusModal.style.display = 'none';
        }
        if (event.target === tambahKejadianModal) {
            tambahKejadianModal.style.display = 'none';
            formTambahKejadian.reset();
        }
        if (event.target === editKejadianModal) {
            editKejadianModal.style.display = 'none';
            formEditKejadian.reset();
        }
        if (event.target === hapusKejadianModal) {
            hapusKejadianModal.style.display = 'none';
        }
        if (event.target === editPengumumanModal) {
            editPengumumanModal.style.display = 'none';
            formEditPengumuman.reset();
        }
        if (event.target === hapusPengumumanModal) {
            hapusPengumumanModal.style.display = 'none';
        }
        if (event.target === editSuratModal) {
            editSuratModal.style.display = 'none';
            formEditSurat.reset();
        }
        if (event.target === hapusSuratModal) {
            hapusSuratModal.style.display = 'none';
        }
    };

    // Tutup modal saat klik X
    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', function () {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
            const formId = {
                'tambahKKModal': 'formTambahKK',
                'editKKModal': 'formEditKK',
                'tambahAnggotaModal': 'formTambahAnggota',
                'tambahKejadianModal': 'formTambahKejadian',
                'editKejadianModal': 'formEditKejadian',
                'editPengumumanModal': 'formEditPengumuman',
                'hapusPengumumanModal': 'announcementForm',
                'editSuratModal': 'formEditSurat'
            }[modal.id];
            if (formId) {
                document.getElementById(formId)?.reset();
            }
        });
    });
});