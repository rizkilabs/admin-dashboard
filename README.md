# Admin Dashboard

Dashboard admin berbasis React (Vite) dengan tampilan responsive untuk desktop dan mobile.

## Fitur

- Sidebar navigasi (drawer di mobile)
- Navbar dengan judul halaman, search, dan profil admin
- Statistik jumlah user dan transaksi
- Tabel data pengguna
- Responsive untuk desktop dan mobile

## Teknologi

- React
- Vite
- CSS

## Cara Menjalankan

```bash
# Clone repository
git clone https://github.com/rizkilabs/admin-dashboard.git

# Masuk ke folder project
cd admin-dashboard

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

## Demo

https://rizkilabs.github.io/admin-dashboard

## Struktur Folder

```text
src/
├── components/
│   ├── Sidebar
│   ├── Navbar
│   ├── StatCard
│   └── UsersTable
├── pages/
│   └── Dashboard
└── data/
    └── Data dummy
```

- `src/components/` - Komponen UI seperti Sidebar, Navbar, StatCard, dan UsersTable.
- `src/pages/` - Halaman aplikasi seperti Dashboard.
- `src/data/` - Tempat penyimpanan data dummy.

## Catatan

Data yang ditampilkan saat ini masih berupa data dummy (statis) yang disimpan di folder `src/data/`.
