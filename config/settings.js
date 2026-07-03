/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "3007";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Princess Cinta";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "love",             // ← GANTI JUDUL LAGU
    artist: "wave to earth",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "ngl one smile from you and my whole day just gets so much better." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "you're literally the reason my heart feels this full, no cap." },
  { file: "img3.jpeg", caption: "every single sec with you is hands down my fave." },
  { file: "img4.jpeg", caption: "some people search their whole life for happiness, i just found it in you, fr." },
  { file: "img5.jpeg", caption: "you turned my whole ordinary life into something this beautiful, idk how." },
  { file: "img6.jpeg", caption: "my heart genuinely feels safest whenever it's with you." },
  { file: "img7.jpeg", caption: "if i could relive literally any moment, i'd pick us every single time." },
  { file: "img8.jpeg", caption: "still my favorite person, like, always and forever." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
"Selamat ulang tahun, sayang.",
"Hari ini adalah hari yang sangat spesial karena di hari inilah seseorang yang begitu berarti dalam hidup Fadly dilahirkan. Fadly bersyukur karena semesta mempertemukan Fadly dengan sayang. Terima kasih sudah menjadi bagian terindah dalam perjalanan hidup Fadly, terima kasih atas semua cinta, perhatian, kesabaran, dan kebahagiaan yang selalu sayang berikan.",
"Di usia sayang yang baru ini, Fadly berdoa semoga Allah selalu memberikan kesehatan, kebahagiaan, umur yang penuh berkah, rezeki yang melimpah, serta memudahkan setiap langkah dan impian yang ingin sayang capai. Semoga setiap doa yang sayang panjatkan dikabulkan, setiap kesedihan digantikan dengan kebahagiaan, dan setiap usaha yang sayang lakukan membuahkan hasil yang terbaik.",
"Fadly tahu perjalanan hidup tidak selalu mudah. Akan ada hari-hari yang melelahkan, ada air mata, ada rasa kecewa, dan ada saat ketika semuanya terasa berat. Tapi Fadly ingin sayang selalu ingat bahwa sayang tidak pernah sendirian. Selama Fadly masih diberi kesempatan oleh Tuhan, Fadly akan selalu berusaha ada untuk menemani, mendengarkan, menguatkan, dan menggenggam tangan sayang melewati semuanya.",
"Terima kasih sudah menerima Fadly apa adanya, dengan segala kekurangan dan kelebihan yang Fadly miliki. Terima kasih karena selalu membuat Fadly merasa dicintai dan dihargai. Kehadiran sayang membuat hidup Fadly lebih berwarna, lebih tenang, dan lebih bermakna.",
"Semoga hubungan kita selalu dipenuhi rasa saling percaya, saling menghargai, dan saling menguatkan. Semoga apa pun yang sedang kita perjuangkan hari ini dapat membawa kita menuju masa depan yang selama ini kita impikan bersama. Fadly berharap semoga suatu hari nanti kita bisa mengenang semua perjalanan ini sambil tersenyum dan berkata bahwa semua penantian dan perjuangan kita tidak pernah sia-sia.",
"Sekali lagi, selamat ulang tahun, sayang.",
"Teruslah menjadi pribadi yang baik, rendah hati, dan kuat seperti yang selama ini Fadly kenal. Jangan pernah ragu pada diri sendiri, karena di mata Fadly, sayang adalah seseorang yang luar biasa.",
"Fadly mencintai sayang, hari ini, besok, dan selama Tuhan masih mengizinkan Fadly untuk terus menjaga dan menyayangi sayang.",
"Selamat ulang tahun, cintaku. Semoga hari ini menjadi awal dari tahun yang penuh kebahagiaan, keberkahan, dan cinta. 🤍"
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Bagian 1",
    title: "Selamat Ulang Tahun",
    text:  "Selamat ulang tahun, sayang. Hari ini adalah hari yang sangat spesial karena dunia pernah menghadirkan seseorang sebaik dan seindah sayang.",
  },
  {
    depth: "8m",
    year:  "Bagian 2",
    title: "Rasa Terima Kasih",
    text:  "Terima kasih sudah lahir ke dunia ini dan menjadi perempuan paling hebat. Fadly bangga banget sama sayang. Fadly akan selalu menjadi fans no.1 sayang dan akan selalu mendukung sayang, apapun yang terjadi.",
  },
  {
    depth: "16m",
    year:  "Bagian 3",
    title: "Harapan",
    text:  "Semoga di usia yang baru ini, semua impian sayang satu per satu menjadi kenyataan. Semoga sayang selalu sehat, bahagia, dan dikelilingi oleh hal-hal baik.",
  },
  {
    depth: "24m",
    year:  "Bagian 4",
    title: "Penutup",
    text:  "Fadly sayang sama sayang, hari ini, besok, dan seterusnya. Selamat ulang tahun, sayang. Semoga fadly dan sayang selalu bersama dalam setiap langkah kehidupan.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "Semoga tahun ini memberimu semua ketenangan lautan, dan sedalam itu juga hatimu yang selalu penuh dengan kebaikan." },
  { icon: "shell",   text: "Semoga hari-harimu tetap secerah ini, seperti matahari yang memantul di atas air, dan malam-malammu tetap damai seperti ombak yang perlahan kembali ke laut." },
  { icon: "star",    text: "Semoga setiap harapan kecilmu perlahan menjadi kenyataan, tepat saat kamu paling membutuhkannya." },
  { icon: "compass", text: "Ke manapun tahun ini membawamu, aku harap kamu selalu menemukan jalan pulang ke orang-orang yang tulus peduli dan menyayangimu." },
  { icon: "anchor",  text: "Tetap membumi, tetap bersyukur, dan tetaplah menjadi dirimu yang sekarang — cantik dengan caramu sendiri, selalu." },
  { icon: "heart",   text: "Happy birthday, princess. Fadly sayang banget sama sayang. Semoga sayang happy terus ya sama fadly" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6281234567890";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "heyy i just opened the bottle, tysm for making my day so much better! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);