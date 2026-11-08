// Fungsi bersama aplikasi siswa dan panel admin (token otomatis & kode reset)
const ZK={
 AL:"ABCDEFGHJKLMNPQRSTUVWXYZ23456789",
 h53(s){let a=0xdeadbeef,b=0x41c6ce57;for(let i=0,c;i<s.length;i++){c=s.charCodeAt(i);a=Math.imul(a^c,2654435761);b=Math.imul(b^c,1597334677)}
  a=Math.imul(a^(a>>>16),2246822507)^Math.imul(b^(b>>>13),3266489909);b=Math.imul(b^(b>>>16),2246822507)^Math.imul(a^(a>>>13),3266489909);return 4294967296*(2097151&b)+(a>>>0)},
 code(s,n=6){let x=ZK.h53(s),o="";for(let i=0;i<n;i++){o+=ZK.AL[x%32];x=Math.floor(x/32)}return o},
 token(sec,mnt,t=Date.now()){return ZK.code(sec+":T:"+Math.floor(t/(mnt*6e4)))},
 tokenOK(sec,mnt,inp,t=Date.now()){const m=mnt*6e4,s=Math.floor(t/m),c=[s];if(t-s*m<6e4)c.push(s-1);return c.some(x=>ZK.code(sec+":T:"+x)===inp)},
 reset(sec,nisn,ex,t=Date.now()){return ZK.code(sec+":R:"+nisn+":"+ex+":"+Math.floor(t/6e5))},
 resetOK(sec,nisn,ex,inp,t=Date.now()){const s=Math.floor(t/6e5);return[s,s-1].some(x=>ZK.code(sec+":R:"+nisn+":"+ex+":"+x)===inp)}
,
 DEF:{judulAdmin:"Panel Admin",subAdmin:"Exambro SMANPro · SMA Negeri 1 Pronojiwo",labelPilih:"Mata pelajaran",tombol:"Mulai ujian",petunjukJudul:"PETUNJUK PENGERJAAN UJIAN",petunjuk:[
  "Matikan **Wi-Fi** dan gunakan **paket data**.",
  "Ketik minimal 3 huruf nama Anda, lalu **pilih nama** dari saran yang muncul. Kelas dan NISN akan terisi otomatis.",
  "Pilih mata pelajaran, masukkan **token** dari pengawas, lalu tekan **Mulai ujian**.",
  "Kerjakan soal pada formulir. Sisa waktu tampil di pojok kanan atas dan berubah warna saat hampir habis.",
  "Jangan menekan tombol Kembali, power, atau membuka aplikasi lain. Layar akan **terkunci** dan hanya pengawas yang bisa membukanya dengan kode.",
  "Setelah selesai, tekan **Kirim** di formulir, lalu tekan **Selesai** dan minta kode kepada pengawas.",
  "Jika waktu habis, ujian tertutup otomatis."]}
};
