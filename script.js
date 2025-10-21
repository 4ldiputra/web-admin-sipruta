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

    // === SIDEBAR ACTIVE ===
    const currentPath = window.location.pathname.split('/').pop();
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // === MODAL TAMBAH WARGA ===
    const btnTambah = document.getElementById('btnTambahWarga');
    const tambahModal = document.getElementById('tambahModal');

    if (btnTambah && tambahModal) {
        btnTambah.addEventListener('click', function () {
            tambahModal.style.display = 'block';
        });
    }

    // === TUTUP MODAL ===
    function setupModalClose(modalId, formId) {
        const modal = document.getElementById(modalId);
        const closeBtn = modal?.querySelector('.close');
        const cancelBtn = modal?.querySelector('.btn-cancel');
        const form = formId ? document.getElementById(formId) : null;

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                if (form) form.reset();
            });
        }
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                if (form) form.reset();
            });
        }
        if (modal) {
            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    if (form) form.reset();
                }
            });
        }
    }

    // Setup semua modal
    setupModalClose('tambahModal', 'formTambahWarga');
    setupModalClose('editModal', 'formEditWarga');
    setupModalClose('hapusModal');

    // === FORM TAMBAH ===
    const formTambah = document.getElementById('formTambahWarga');
    if (formTambah) {
        formTambah.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('✅ Data warga baru berhasil ditambahkan!');
            document.getElementById('tambahModal').style.display = 'none';
            formTambah.reset();
        });
    }

    // === EDIT & HAPUS ===
    document.addEventListener('click', function (e) {
        // Edit
        if (e.target.classList.contains('btn-edit')) {
            const id = e.target.dataset.id;
            const row = document.querySelector(`tr[data-id="${id}"]`);
            if (row) {
                const cells = row.querySelectorAll('td');
                document.getElementById('editId').value = id;
                document.getElementById('editNamaLengkap').value = cells[1].textContent.trim();
                document.getElementById('editNik').value = cells[2].textContent.trim();
                document.getElementById('editJenisKelamin').value = cells[3].textContent.trim();
                document.getElementById('editTempatTanggalLahir').value = cells[4].textContent.trim();
                document.getElementById('editAgama').value = cells[5].textContent.trim();
                document.getElementById('editAlamat').value = cells[6].textContent.trim();
                document.getElementById('editModal').style.display = 'block';
            }
        }

        // Hapus
        if (e.target.classList.contains('btn-delete')) {
            document.getElementById('hapusModal').style.display = 'block';
            document.getElementById('hapusModal').dataset.targetId = e.target.dataset.id;
        }
    });

    // Konfirmasi hapus
    const btnOkHapus = document.getElementById('btnOkHapus');
    if (btnOkHapus) {
        btnOkHapus.addEventListener('click', function () {
            const id = document.getElementById('hapusModal').dataset.targetId;
            alert(`🗑️ Data warga dengan ID ${id} berhasil dihapus!`);
            document.getElementById('hapusModal').style.display = 'none';
        });
    }

    // === FORM LAINNYA ===
    const announcementForm = document.getElementById('announcementForm');
    if (announcementForm) {
        announcementForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('📢 Pengumuman berhasil ditambahkan!');
            announcementForm.reset();
        });
    }

    const suratForm = document.getElementById('suratForm');
    if (suratForm) {
        suratForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✉️ Permintaan surat berhasil disimpan!');
            suratForm.reset();
        });
    }
});