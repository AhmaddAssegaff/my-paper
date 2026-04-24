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

## Apa itu file? dan file manager?
Apa itu file?
Apa itu file manager?
Contoh aktivitas:
save file
copy file
delete file

## File itu sebenarnya apa?
File = kumpulan data (byte)
Semua file (gambar, video, txt) → ujungnya binary (0 dan 1)
Peran ekstensi (.jpg, .txt, .mp4)

## Apa aja yang sebenarnya file manager lakukan?
bandingin pakai cli sama file manager
keuntungan pake file manager

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
FAT32 kompatibel dengan banyak sistem operasi bukan hanya windows dan linux api juga macOS kamera TV konsol, dll.

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

