// =========================================================
//  GAMES-DATA.JS — MuGöl GAMES Oyun Veritabanı
//  MuGöl GAMES (index.html) ve MuGöl PORTAL (script.js)
//  tarafından ortak kullanılır.
//  Yeni oyun eklemek için bu dosyayı düzenleyin.
// =========================================================

/* global var olarak tanımlanır; her iki sayfa da erişebilir */
var gamesDB = [
    { id: "ok_labirenti",  title: "Ok Labirenti",      catId: "puzzle",     catName: "Zeka",       desc: "Okları takip ederek doğru çıkışı bul!",                         icon: "🏹", url: "ok_labirenti.html",        color1: "#6c63ff", color2: "#22d3ae", badge: "YENİ"    },
    { id: "tas_kirma",     title: "3D Stack Ball",      catId: "action",     catName: "Aksiyon",    desc: "Ekrana basılı tut, kuleyi yık, öfke modunu aç!",                icon: "💥", url: "tas-kirma.html",           color1: "#ff0844", color2: "#ffb199", badge: "YENİ"    },
    { id: "hokey",         title: "Neon Masa Hokeyi",   catId: "action",     catName: "Aksiyon",    desc: "Neon ışıklar altında yapay zekaya karşı kapış!",                icon: "🏒", url: "masa-hokeyi.html",         color1: "#d900ff", color2: "#00ffff", badge: "POPÜLER" },
    { id: "kelime_puz",    title: "Kelime Puzzle",      catId: "puzzle",     catName: "Bulmaca",    desc: "Kozmik uzayda kelimeleri bul, zekanı test et!",                 icon: "🔠", url: "kelime_puzzle.html",       color1: "#6366f1", color2: "#8b5cf6"                  },
    { id: "2048",          title: "2048 Pro",            catId: "puzzle",     catName: "Zeka",       desc: "Sayıları birleştir, 2048'e ulaş!",                              icon: "🔢", url: "2048.html",                color1: "#f59e0b", color2: "#fbbf24"                  },
    { id: "enerji",        title: "Enerji Tüpleri",     catId: "strategy",   catName: "Strateji",   desc: "Tüpleri bağla, enerjiyi akıt!",                                 icon: "⚡", url: "enerji-toplari.html",      color1: "#eab308", color2: "#fde047"                  },
    { id: "kuantum",       title: "Kuantum Kalkanı",    catId: "action",     catName: "Aksiyon",    desc: "Kalkanını yönet, düşmanları savuş!",                            icon: "🛡️", url: "kuantum-kalkani.html",     color1: "#06b6d4", color2: "#67e8f9"                  },
    { id: "word_master",   title: "Word Master",         catId: "puzzle",     catName: "Eğitim",     desc: "Gizli kelimeleri bul, siber dünyanın hakimi ol!",               icon: "W",  url: "word-master.html",         color1: "#7c3aed", color2: "#c084fc", isTextIcon: true },
    { id: "ucak",          title: "Uçak Simülasyonu",   catId: "simulation", catName: "Simülasyon", desc: "3D kokpite geç, gökyüzünü fethet!",                             icon: "✈️", url: "ucak-simulasyonu.html",    color1: "#0284c7", color2: "#38bdf8"                  },
    { id: "block",         title: "Block Legend",        catId: "puzzle",     catName: "Bulmaca",    desc: "Blokları yerleştir, kombolar yap!",                             icon: "🧩", url: "block-puzzle.html",        color1: "#d946ef", color2: "#f472b6"                  },
    { id: "ninja",         title: "Fruit Ninja",         catId: "action",     catName: "Aksiyon",    desc: "Bıçaklarını bile, meyveleri kes.",                              icon: "🍉", url: "fruit-ninja.html",         color1: "#ef4444", color2: "#fca5a5"                  },
    { id: "flappy",        title: "Flappy Bird",         catId: "action",     catName: "Beceri",     desc: "Boruların arasından geç ve rekoru kır.",                        icon: "🐦", url: "flappy-bird.html",         color1: "#f59e0b", color2: "#fcd34d"                  },
    { id: "space",         title: "Space Shooter",       catId: "action",     catName: "Uzay",       desc: "Galaksiyi düşman istilasından kurtar!",                         icon: "🚀", url: "space-shooter.html",       color1: "#3b82f6", color2: "#93c5fd"                  },
    { id: "stack",         title: "Stack Tower",         catId: "puzzle",     catName: "Zeka",       desc: "Blokları üst üste diz, kule inşa et.",                          icon: "🏗️", url: "stack-tower.html",         color1: "#10b981", color2: "#6ee7b7"                  },
    { id: "bubble",        title: "Bubble Shooter",      catId: "puzzle",     catName: "Bulmaca",    desc: "Aynı renk topları eşleştir ve patlat.",                         icon: "🔮", url: "bubble.html",              color1: "#8b5cf6", color2: "#c4b5fd"                  },
    { id: "memory",        title: "Hafıza Kartları",     catId: "puzzle",     catName: "Zeka",       desc: "Kartları eşleştir, hafızanı zorla.",                            icon: "🃏", url: "kart-eslestirme.html",     color1: "#14b8a6", color2: "#5eead4"                  },
    { id: "snake",         title: "Yılan Oyunu",         catId: "action",     catName: "Klasik",     desc: "Klasik efsane! Yemi ye, uza.",                                  icon: "🐍", url: "yilan-oyunu.html",         color1: "#22c55e", color2: "#86efac"                  },
    { id: "race",          title: "Araba Yarışı",        catId: "action",     catName: "Yarış",      desc: "Trafikte makas at, rekor kır.",                                 icon: "🏎️", url: "araba.html",               color1: "#ef4444", color2: "#f87171"                  },
    { id: "kelime_ust",    title: "Kelime Üstadı",       catId: "puzzle",     catName: "Kelime",     desc: "Harfleri birleştir, kelime türet.",                             icon: "🔡", url: "kelime-ustadi.html",       color1: "#f97316", color2: "#fdba74"                  },
    { id: "dama",          title: "Dama Oyunu",          catId: "strategy",   catName: "Strateji",   desc: "Türk daması kurallarıyla rakibini alt et.",                     icon: "⚫", url: "turk-damasi.html",         color1: "#64748b", color2: "#cbd5e1"                  },
    { id: "kizma",         title: "Kızma Birader",       catId: "strategy",   catName: "Klasik",     desc: "Zarlarını at, piyonlarını eve ulaştır.",                        icon: "🎲", url: "kizma-birader.html",       color1: "#eab308", color2: "#fde047"                  },
    { id: "mugolyoner",    title: "MuGölyoner",          catId: "puzzle",     catName: "Bilgi",      desc: "Kim Milyoner Olmak İster tarzı bilgi yarışması!",               icon: "💰", url: "mugolyoner.html",          color1: "#ffaa00", color2: "#00d4ff", badge: "YENİ"    },
    { id: "adam_asmaca",   title: "Adam Asmaca",         catId: "puzzle",     catName: "Kelime",     desc: "Harfleri tahmin et, adamı kurtar!",                             icon: "🪢", url: "adam-asmaca.html",         color1: "#1e293b", color2: "#38bdf8", badge: "YENİ"    }
];

/* Kategori meta verisi */
var gamesCategories = {
    'action':     { name: 'Aksiyon',       icon: '⚡', color: '#ef4444' },
    'puzzle':     { name: 'Zeka & Bulmaca', icon: '🧠', color: '#a855f7' },
    'strategy':   { name: 'Strateji',      icon: '♟️', color: '#eab308' },
    'simulation': { name: 'Simülasyon',    icon: '✈️', color: '#0ea5e9' }
};
