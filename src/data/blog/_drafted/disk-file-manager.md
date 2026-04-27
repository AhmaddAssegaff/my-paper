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
| Command | Fungsi               | File asli        |
| ------- | -------------------- | ---------------- |
| `cp`    | Menyalin             | Tetap ada        |
| `mv`    | Memindahkan / rename | Pindah           |

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
mount /nama_partisi   # Melihat partisi yang sedang terpasang
```

> Informasi yang ditampilkan oleh perintah seperti lsblk atau df biasanya juga ditampilkan dalam file manager dalam bentuk yang lebih visual, seperti daftar disk, kapasitas storage, dan penggunaan ruang.
> Pengelolaan partisi (seperti membuat atau menghapus partisi) sebaiknya dilakukan dengan hati-hati karena dapat menyebabkan kehilangan data.

---

### Kesimpulan:
> File manager membantu kita mengelola file dengan cara yang lebih mudah melalui tampilan visual.  
> Namun di balik itu, semua operasi seperti membuat, menyalin, memindahkan, dan menghapus file sebenarnya adalah perintah dasar yang dijalankan oleh sistem operasi.
> Perintah-perintah tersebut juga dapat dilakukan melalui command line interface (CLI), yang menunjukkan bahwa file manager hanyalah antarmuka (GUI) dari proses yang sama.
> Lebih jauh lagi, setiap file yang kita kelola tidak disimpan sebagai satu kesatuan utuh, melainkan diatur oleh file system dan disimpan dalam bentuk blok-blok data di dalam disk.
> Dengan memahami hal ini, kita bisa melihat bahwa aktivitas sederhana seperti drag & drop atau delete file sebenarnya melibatkan proses yang jauh lebih kompleks di balik layar.

---

## Bagaimana Disk itu nyimpan data?
Disk (HDD / SSD) menyimpan data dalam:
block / sector
Data tidak disimpan “utuh sebagai file”
tapi dipecah jadi bagian kecil

## Peran File System
File system adalah suatu cara sistem operasi (OS) untuk mengatur dan menyimpan file di storage device seperti harddisk (HDD), Solid State Drive (SSD) USB Flash Drive (UFD),
File system juga berguna mengatur di mana file disimpan dan bagaimana datanya tersusun, sehingga komputer dapat dengan cepat read, write, dan manage informasi.

File system memiliki banyak jenis, sistem operasi windows yang paling banyak di gunakan dalam file system mereka yaitu "File Allocation Table" (FAT)
versi pertama pada FAT itu release pada tahun 1980 yang bernama FAT12 dia hanya dapat menyimpan file yang lebih kecil dari 32MB dan memiliki volume pertisi maksimal 32MB.

tak lama setelah itu pada tahun 1984 muncul FAT16 untuk pertama kalinya storage dapat menyimpan 2GB dan memiliki volume pertisi maksimal 2GB,
setelah itu pada tahun 1996 hadir FAT32 yang sampai detik ini kita masih digunakan dia dapat menyimpan hingga 4GB di windows dan mimiliki volume pertisi maksimal 2TB.

FAT32 memiliki banyak kekurangan jika kita mencoba copy sebuah file yang lebih besar dari 4GB ke sebuah file system FAT32 sudah dipastikan akan error walaupun storage kita
masih memiliki banyak kapasitas ruang kosong,
dari limitasi itu FAT32 masih sering di gunakan untuk USB Flash Drive (UFD), memory card, dan beberapa external disk, dengan alasan kompatibilitas yang sangat baik,
FAT32 kompatibel dengan banyak sistem operasi bukan hanya windows dan linux tapi juga macOS kamera TV konsol, dll.

NTFS

Contoh:
NTFS
ext4

Yang dijelaskan:

menyimpan:
lokasi file
nama file
ukuran
mapping:
file → block di disk

## Proses saat file disimpan
Aplikasi (misal text editor) kirim data ke OS
OS minta file system simpan
File system:
cari block kosong
pecah data jadi chunk
Data ditulis ke disk
Metadata dicatat (nama, lokasi, dll)

