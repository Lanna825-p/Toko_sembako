# NanaMart Pro - Marketplace Sembako Lengkap

Website ini adalah versi lengkap marketplace sembako untuk usaha warung.

## Fitur Utama

- Login dan register multi user.
- Role `customer` dan `admin`.
- Katalog produk modern dengan:
  - Search.
  - Filter kategori.
  - Sort harga/nama/stok.
  - Toggle stok tersedia.
- Wishlist per user.
- Keranjang per user.
- Promo code:
  - `DISKON10` (10%).
  - `HEMAT20` (20%).
- Checkout lengkap:
  - Nama, WhatsApp, alamat.
  - Metode pembayaran.
  - Metode pengiriman.
- Buat pesanan langsung.
- Kirim pesanan ke WhatsApp admin.
- Riwayat pesanan + modal detail order.
- Panel admin:
  - CRUD produk.
  - Lihat semua order.
  - Update status order.

## Akun Demo

### Admin

- Email: `admin@nanamart.id`
- Password: `admin123`

### Customer

- Email: `pelanggan@nanamart.id`
- Password: `pelanggan123`

## Cara Menjalankan

1. Buka file `index.html` di browser.
2. Atau jalankan dengan Live Server di VS Code.

## Konfigurasi WhatsApp Admin

Edit file `script.js`:

```js
const ADMIN_WHATSAPP = "6281234567890";
```

Gunakan format internasional tanpa tanda `+`.

## Penyimpanan Data

Semua data disimpan di `localStorage` browser:

- Users
- Session login
- Products
- Carts
- Wishlists
- Orders

Jika ingin reset data, hapus `localStorage` untuk domain yang dipakai.
