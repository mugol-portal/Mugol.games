// Eğer dizi yoksa oluştur, varsa içine ekle (Bu kod modüler yapıyı sağlar)
window.tumSorular = window.tumSorular || [];

window.tumSorular.push(
    { kategori: "Genel Kültür", seviye: 1, soru: "Haftanın ilk günü hangisidir?", secenekler: { A: "Salı", B: "Pazartesi", C: "Çarşamba", D: "Pazar" }, dogruCevap: "B" },
    { kategori: "Genel Kültür", seviye: 4, soru: "Aspirinin ham maddesi olan ağaç hangisidir?", secenekler: { A: "Çam", B: "Meşe", C: "Söğüt", D: "Kavak" }, dogruCevap: "C" },
    { kategori: "Genel Kültür", seviye: 7, soru: "Japonya'nın para birimi hangisidir?", secenekler: { A: "Dolar", B: "Yen", C: "Euro", D: "Won" }, dogruCevap: "B" },
    { kategori: "Genel Kültür", seviye: 10, soru: "Nobel ödülleri hangi ülkenin başkentinde dağıtılır? (Barış ödülü hariç)", secenekler: { A: "Norveç", B: "İsviçre", C: "İsveç", D: "Finlandiya" }, dogruCevap: "C" }
);