# Kalkulator Nilai Rapor

Aplikasi web sederhana untuk membantu mensimulasikan rerata nilai rapor dan nilai gabungan sebagai persiapan PPDB SMA/SMK Negeri Provinsi Jawa Timur jalur nilai akademik 2024.

> **Catatan:** Ini adalah simulasi, bukan layanan resmi PPDB. Metode perhitungan belum tentu sama dengan ketentuan resmi dan informasi pada aplikasi merujuk pada PPDB 2024. Periksa aturan penerimaan terbaru dari sumber resmi sebelum menggunakannya sebagai acuan.

## Fitur

- Input nilai tujuh mata pelajaran untuk semester 1 sampai 5.
- Menampilkan jumlah dan rerata untuk setiap mata pelajaran.
- Menghitung rerata nilai rapor serta nilai gabungan berdasarkan nilai indeks dan akreditasi sekolah.
- Tampilan responsif; tabel dapat digeser ke samping pada layar kecil.

## Menjalankan Aplikasi

Aplikasi tidak memerlukan instalasi atau proses build. Buka `index.html` langsung di browser modern.

Font pada halaman dimuat dari Google Fonts. Jika koneksi internet tidak tersedia, browser akan menggunakan font pengganti.

## Cara Menggunakan

1. Masukkan nilai rapor untuk setiap mata pelajaran di semester 1 sampai 5.
2. Tinjau jumlah dan rerata yang muncul pada bagian bawah tabel.
3. Masukkan nilai akreditasi dan indeks sekolah untuk melihat nilai gabungan.
4. Pada ponsel, geser tabel ke samping untuk mengisi atau melihat semua mata pelajaran.

## Metode Perhitungan

Rerata setiap mata pelajaran dihitung dari nilai lima semester. Rerata rapor kemudian dihitung dari rerata tujuh mata pelajaran:

```text
Rerata rapor = jumlah rerata tujuh mata pelajaran / 7
```

Nilai gabungan saat rerata rapor tersedia dihitung dengan rumus:

```text
Nilai gabungan = (indeks sekolah x 0,3)
			   + (akreditasi sekolah x 0,2)
			   + (rerata rapor x 0,5)
```

Rerata rapor yang digunakan pada perhitungan akhir ditampilkan dengan dua angka desimal. Jika rerata rapor belum tersedia, implementasi saat ini menghitung sementara 30% nilai indeks ditambah 20% nilai akreditasi.

## Struktur Proyek

```text
.
├── index.html       # Struktur halaman dan form nilai
├── style.css        # Tampilan dan aturan responsif
├── method.md        # Catatan metode dan eksplorasi perhitungan
└── script/
	├── main.js      # Perhitungan jumlah dan rerata mata pelajaran
	└── final.js     # Perhitungan nilai gabungan
```
