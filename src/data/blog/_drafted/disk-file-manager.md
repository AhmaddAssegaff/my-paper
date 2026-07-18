---
title: Bagaimana File Manager Bekerja dan Cara File Disimpan di Disk
author: Ahmad
pubDatetime: 2026-04-24T04:06:31Z
slug: bagaimana-file-manager-bekerja-dan-cara-file-disimpan-di-disk
featured: false
draft: true
# ogImage: ../../assets/images/forrest-gump-quote.png
tags:
  - Fundamentals
  - Disk
  - File System
  - Storage
description: Kamu mungkin sering copy, delete, atau save file setiap hari. Tapi, apa yang sebenarnya terjadi di balik itu semua?, Artikel ini membahas cara kerja file manager dan bagaimana file benar-benar disimpan di disk, dari yang terlihat sederhana hingga proses tersembunyi di baliknya.
---

## Apa itu File dan File Manager?

**Apa `itu file?`**  
File adalah satuan data yang digunakan untuk menyimpan `informasi`, seperti dokumen, gambar, audio, video, atau program aplikasi.

**Apa itu `file manager?`**  
File manager adalah `software` yang menyediakan antarmuka pengguna (GUI) untuk mengelola file dan directory (folder) di dalam sistem komputer maupun smartphone.

### File Manager Populer di Berbagai Desktop Environment

- `File Explorer` (default di Windows)
- `Dolphin` (default di KDE)
- `Nautilus` (default di GNOME)
- `Thunar` (default di XFCE)
- `Yazi` (berbasis terminal)

### Apa saja yang biasa kita lakukan di dalam file manager?

- Membuka folder
- Menyimpan `save` file
- `copy` dan `paste`
- `cut` atau memindahkan file
- `delete` file
- Compress file `zip`
- Mencari informasi yang detail sebuah file
- Mencari informasi pada disk kita

---

## Apa aja yang sebenarnya file manager lakukan?

`File manager` itu software yang memudahkan kita mengelola file melalui tampilan visual.
Namun di balik itu, semua aksi yang kita lakukan sebenarnya adalah `operasi dasar sistem operasi`.
Semua operasi tersebut sebenarnya juga bisa dilakukan melalui `command line interface (CLI)`.

> **Catatan:** Perintah-perintah di bawah menggunakan OS Linux.  
> Pada OS lain seperti Windows atau macOS, beberapa perintah mungkin berbeda, meskipun konsep dasarnya tetap sama.

##### List & navigation command

```bash
ls # Melihat isi dalam directory
```

```bash
ls -l # Melihat isi dalam directory lebih Detail file
```

```bash
ls -a # Melihat isi dalam directory Termasuk hidden file
```

```bash
cd folder-1 # Masuk ke folder 1 tingkat
cd folder-1/folder-2 # Masuk folder ke 2 tingkat
cd .. # Kembali ke folder sebelumnya (parent directory)
cd / # Pindah ke root directory
cd ~ # Pindah ke home directory
```

```bash
pwd # Menampilkan path saat ini
```

---

###### Create and delete command

```bash
touch file.txt #Membuat file baru di directory saat ini
touch folder-1/file.txt #Membuat file baru di dalam sebuah directory
```

```bash
mkdir folder-1 #Membuat directory/folder
mkdir -p folder-1/folder-2/ # Membuat folder bertingkat
```

```bash
rm file.txt # Menghapus file di direktori saat ini
rm folder-1/file.txt # Menghapus 1 file di dalam folder 1 tingkat di directory saat ini
```

```bash
rm -r folder-1 # Menghapus folder beserta seluruh isinya (recursive)
```

```bash
rm *.txt # Menghapus semua file dengan ekstensi .txt
```

```bash
rm -i file.txt # Menghapus file dengan konfirmasi (interactive)
```

```bash
rm -rf folder-1 # Menghapus folder (paksa, tanpa konfirmasi)
```

> **Hati-hati:** perintah `rm -rf` dapat menghapus seluruh data secara permanen tanpa konfirmasi. Tidak ada `"recycle bin"` / `"trash"` di CLI seperti di file manager.

---

###### Move and copy command

```bash
cp file.txt salinan.txt # Menyalin file (file asli tetap ada)
cp file.txt folder-1/salinan.txt # Menyalin file ke dalam folder lain
cp -i file.txt salinan.txt # Konfirmasi sebelum overwrite jika file tujuan sudah ada
cp -n file.txt tujuan.txt # jangan overwrite jika sudah ada
```

```bash
mv file.txt folder-1/ # Memindahkan file ke folder lain
mv file.txt file-baru.txt # Rename file (mengganti nama)
mv -i file.txt file-baru.txt # Konfirmasi sebelum overwrite jika file tujuan sudah ada
mv -n file.txt tujuan.txt # jangan overwrite jika sudah ada
```

> **Hati-hati:** perintah `mv` dan `cp` bisa overwrite sebuah file dan tidak bisa di kembalikan lagi

### Perbedaan secara singkat:

| Command | Fungsi               | File asli |
| ------- | -------------------- | --------- |
| `cp`    | Menyalin             | Tetap ada |
| `mv`    | Memindahkan / rename | Pindah    |

---

##### View & info command

```bash
cat file.txt # Print / Menampilkan / Melihat isi file
```

```bash
less file.txt # Melihat isi file (scroll)
```

```bash
file file.txt # Mengetahui tipe file
```

```bash
du -h # Melihat ukuran folder/file
```

```bash
lsblk   # Melihat struktur disk dan partisi
```

```bash
df -h   # Melihat penggunaan storage (disk usage)
```

```bash
mount /nama_partisi   # Mount sebuah partisi
```

> Informasi yang ditampilkan oleh perintah seperti `lsblk` atau `df` biasanya juga ditampilkan dalam file manager dalam bentuk yang lebih visual, seperti daftar disk, kapasitas storage, dan penggunaan ruang.

---

### Kesimpulan:

> File manager membantu kita mengelola file dengan cara yang lebih mudah melalui tampilan visual.  
> Namun di balik itu, semua operasi seperti membuat, menyalin, memindahkan, dan menghapus file sebenarnya adalah perintah dasar yang dijalankan oleh sistem operasi.
> Perintah-perintah tersebut juga dapat dilakukan melalui command line interface (CLI), yang menunjukkan bahwa file manager hanyalah antarmuka (GUI) dari proses yang sama.
> Lebih jauh lagi, setiap file yang kita kelola tidak disimpan sebagai satu kesatuan utuh, melainkan diatur oleh file system dan disimpan dalam bentuk blok-blok data di dalam disk.
> Dengan memahami hal ini, kita bisa melihat bahwa aktivitas sederhana seperti drag & drop atau delete file sebenarnya melibatkan proses yang jauh lebih kompleks di balik layar.

---

## Bagaimana Disk itu nyimpan data?

### Disk memiliki 2 jenis cara menyimpannya:

- HDD (Hard Disk Drive)
- SSD (Solid State Drive)

### Lalu apa data yang sebenarnya di simpan ?? binary (01) ? elektron ?

`Disk sebenarnya hanya menyimpan 0 dan 1`, sedangkan bentuk file (foto, video, dll) hanyalah interpretasi dari sistem operasi.
`Data tidak disimpan “utuh sebagai file”`, melainkan dipecah menjadi bagian kecil yang disebut block (atau allocation unit / cluster).
Setiap block terdiri dari beberapa sector, di mana 1 sector umumnya berukuran 4 KB (modern) atau 512 byte (legacy).
Kemudian Setiap sector berisi kumpulan byte, di mana: 1 byte terdiri dari 8 bit, 1 bit terdiri dari 0 atau 1,

> Contoh katakan kita punya sebuah file : `foto.jpg = 1 MB` (megaBytes)
> file tersebut akan di simpan maka dia akan di ubah ke byte 1 MB = 1024 KB kemudian 1 KB = 1024 byte
> jadi `1 MB = 1,048,576 byte`
> Kemudian Block block tadi di pecah menjadi sector sector 1 sector = 4 KB = 4096 byte
> Jadi `1,048,576 ÷ 4096 = 256 sector`
> Kemudian kumpulan sector di ubah ke bit
> jadi `1,048,576 byte = 8,388,608 bit`

### Gimana caranya bit tersebut disimpan

SSD mengunakan cara `elektronik` dengan cara baca level muatan listrik (tegangan) di sel,
jika HDD menggunakan `mekanik` dengan cara tersebut HDD dan SSD dapat mengetahui

| Komponen         | HDD (Hard Disk Drive)                | SSD (Solid State Drive)            |
| ---------------- | ------------------------------------ | ---------------------------------- |
| Media Simpan     | Piringan magnetik                    | Chip flash (NAND)                  |
| Cara Kerja       | Mekanik (lengan & piringan berputar) | Elektrik (aliran elektron)         |
| Representasi Bit | Arah kutub magnet (utara/selatan)    | Muatan listrik pada sel (tegangan) |

> Meskipun cara kerja fisik menyimpannya berbeda (elektronik vs mekanik),
> hasilnya sama: sebuah sistem yang bisa mempertahankan status 0 dan 1 meskipun aliran listrik dimatikan (Non-volatile memory).

### Penjelasan detail cara HDD dan SSD sebenarnya bekerja:

- [SSD](https://www.youtube.com/watch?v=5Mh3o886qpg)
- [HDD](https://www.youtube.com/watch?v=wtdnatmVdIg)

## Peran File System

File system adalah lapisan Abstraksi. Tanpa file system, komputer hanya melihat disk sebagai jutaan "kotak" (block) berisi angka biner tanpa nama.
File system memberikan struktur sehingga biner tersebut punya identitas.

### Flat File System

Jadi dulu data yg di simpan pada disk pada awalnya dia di simpan langsung berurutan / linear dan tidak terorganisi,
sehingga rawan terjadi konflik penulisan data atau kesulitan dalam melacak lokasi file
seperti yang saya katakan di awal `komputer hanya melihat disk sebagai jutaan "kotak" (block) berisi angka biner tanpa nama.`, maka dari itu
file system hadir untuk pertama kalinya di sebut FAT (File Allocation Table) hadir menggantikan Flat File System, sehingga komputer mudah menyimpan dan mengelola file.

dan masih banyak jenis jenis file system lain punya kelebihan dan kekurangannya masing masing.

### Penjelasan lebih lengkap perbedaan antar file system

- [Di sini](https://thesweetbits.com/ntfs-fat32-exfat-apfs-hfs-ext4-explained/)

> Namun, file system hanya mengatur bagaimana data disimpan, bukan memahami isi data tersebut. Data tetap berupa biner, dan agar bisa dimengerti manusia,
> diperlukan encoding seperti ASCII atau UTF-8.

### Tidak hanya data yang di simpan ?

Setiap kali kita menyimpan file, ada `"data tentang data"` yang ikut dicatat agar file tersebut bisa dikelola.
di sebut juga Header dan Metadata

`Header (Identitas Internal)`: seperti Magic Numbers, Versi Format File, dan masih banyak lagi sesuai dengan format file,

### Contoh Magic Numbers

| File Type     | Magic Number (Hex) | Keterangan                   |
| ------------- | ------------------ | ---------------------------- |
| JPEG          | FF D8 FF           | Header awal file gambar JPEG |
| PNG           | 89 50 4E 47        | Header file gambar PNG       |
| PDF           | 25 50 44 46        | Header dokumen PDF           |
| ZIP           | 50 4B              | Header arsip ZIP             |
| EXE (Windows) | 4D 5A              | Header executable Windows    |

`Metadata (Identitas Eksternal)`: seperti Nama File & Lokasi, kapan file di buat dan di rubah (Timestamps), hak akses file menentukan user bisa melakukan apa aja dan siapa aja
(Permissions), file tersebut hidden atau gak (Attributes)

> Header adalah kontrak teknis antara file dan aplikasi atau software. Jika Metadata memberitahu sistem operasi "di mana" file itu berada,
> maka Header memberitahu aplikasi "apa" isi file itu sebenarnya dan "bagaimana" cara mengolahnya.
> Tanpa header, data biner hanyalah sampah yang tidak bisa diinterpretasikan.
