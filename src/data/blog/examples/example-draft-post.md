---
title: Apa Itu REST API?
author: Ahmad
pubDatetime: 2026-04-12T04:06:31Z
slug: basic-rest-api
featured: false
draft: false
tags:
  - Backend
  - REST API
  - Fundamentals
description: Penjelasan dasar tentang REST API dan best pratice dalam develop sebuah REST API
---

# Apa Itu REST API?
REST API adalah cara komunikasi antara client dan server menggunakan protokol HTTP, yang berjalan di atas TCP/IP.
Ketika terjadi sebuah komunikasi pasti di situ terjadi pertukaran informasi antar client dan server,
informasi tersebut di sebut dengan data

# Format Data?
Data yang dikirim biasanya dalam format:
- JSON (paling umum)
- XML (jarang dipakai sekarang)

Contoh response JSON:
```json
{
  "id": 1,
  "name": "Ahmad"
}
```

```xml
<user>
  <id>1</id>
  <name>Ahmad</name>
</user>
```
## Perbandingan singkat JSON VS XML

| Aspek        | JSON               | XML                         |
|--------------|--------------------|------------------------------|
| Format       | Ringan & simpel    | Lebih verbose (panjang)      |
| Readability  | Mudah dibaca       | Lebih kompleks               |
| Ukuran       | Lebih kecil        | Lebih besar                  |
| Parsing      | Cepat              | Lebih lambat                 |
| Penggunaan   | Modern Web API     | Sistem lama / enterprise     |

alasan utama kenapa XML mulai di tinggalkan karena XML memiliki ukuran yang lebih banyak di banding JSON dengan
ukuran yang lebih kecil performa jadi lebih cepat dan juga tidak memakan banyak bandwidth

# Request: Header dan Body
Saat client mengirim request ke server, ada beberapa bagian penting:

## Header
Berisi informasi tambahan, seperti:

Content-Type (format data, misalnya JSON)
Authorization (token login)

## Body
Berisi data utama yang dikirim, biasanya dipakai saat:

POST (buat data)
PUT/PATCH (update data)

# Penamaan sebuah endpoint / url

# Penggunaan Dasar HTTP Method
- Mengambil data (GET)
- Mengirim data (POST)
- Update data (PUT)
- Update data (PATCH)
- Menghapus data (DELETE)
- mengambil data tentang sebuah endpoint memiliki Method apa (OPTIONS)
- mengambil data header (HEAD)


