const WORD_POOLS = {
    "Renkler": [{w:"MAVİ",m:"Gökyüzü rengi"},{w:"YEŞİL",m:"Doğa rengi"},{w:"SARI",m:"Güneş rengi"},{w:"KIRMIZI",m:"Ateş rengi"},{w:"MOR",m:"Asalet rengi"},{w:"SİYAH",m:"Karanlık"},{w:"BEYAZ",m:"Aydınlık"},{w:"TURUNCU",m:"Portakal rengi"},{w:"PEMBE",m:"Şeker rengi"},{w:"GRİ",m:"Bulutlu hava"},{w:"LACİVERT",m:"Gece mavisi"},{w:"BORDO",m:"Koyu kırmızı"},{w:"TURKUAZ",m:"Deniz rengi"},{w:"BEJ",m:"Açık toprak"},{w:"LİLA",m:"Açık mor"},{w:"ALTIN",m:"Değerli sarı"},{w:"GÜMÜŞ",m:"Parlak gri"},{w:"KAHVERENGİ",m:"Toprak rengi"},{w:"HAKİ",m:"Asker yeşili"},{w:"KREM",m:"Açık sarımtırak"},{w:"FISTIK",m:"Açık yeşil tonu"},{w:"EFLATUN",m:"Açık mor tonu"}],
    "Meyveler": [{w:"ELMA",m:"Kırmızı/Yeşil"},{w:"ARMUT",m:"Sulu meyve"},{w:"MUZ",m:"Sarı uzun"},{w:"KİRAZ",m:"Çift saplı"},{w:"ÇİLEK",m:"Kırmızı benekli"},{w:"KARPUZ",m:"Yazın kralı"},{w:"KAVUN",m:"Sarı yaz meyvesi"},{w:"ÜZÜM",m:"Salkımlı"},{w:"ANANAS",m:"Tropikal"},{w:"AYVA",m:"Sarı kış meyvesi"},{w:"NAR",m:"Bereket simgesi"},{w:"KİVİ",m:"Yeşil içli"},{w:"DUT",m:"Ağaç yemişi"},{w:"İNCİR",m:"Tatlı"},{w:"MANDALİNA",m:"Turuncu"},{w:"PORTAKAL",m:"C vitamini"},{w:"ERİK",m:"Yeşil ekşi"},{w:"KAYISI",m:"Yumuşak"},{w:"ŞEFTALİ",m:"Tüylü"},{w:"BÖĞÜRTLEN",m:"Koyu orman meyvesi"},{w:"VİŞNE",m:"Ekşi kırmızı meyve"},{w:"KESTANE",m:"Kışın kavrulur"},{w:"BADEM",m:"Kuruyemiş/Meyve"}],
    "Vücut": [{w:"BAŞ",m:"Vücudun tepesi"},{w:"GÖZ",m:"Görme organı"},{w:"KULAK",m:"İşitme organı"},{w:"BURUN",m:"Koku organı"},{w:"AĞIZ",m:"Tat alma"},{w:"EL",m:"Tutma organı"},{w:"AYAK",m:"Yürüme organı"},{w:"KALP",m:"Kan pompalar"},{w:"MİDE",m:"Sindirir"},{w:"BEYİN",m:"Yönetir"},{w:"DİŞ",m:"Çiğneme aracı"},{w:"DİL",m:"Tat alma"},{w:"TIRNAK",m:"Parmak ucu"},{w:"SAÇ",m:"Baş örtüsü"},{w:"KOL",m:"Uzuv"},{w:"BACAK",m:"Uzuv"},{w:"OMUZ",m:"Kolun bağlandığı yer"},{w:"BOYUN",m:"Başı gövdeye bağlar"},{w:"BİLEK",m:"El/ayak eklemi"},{w:"DİRSEK",m:"Kol eklemi"},{w:"DİZ",m:"Bacak eklemi"},{w:"GÖĞÜS",m:"Üst gövde"}],
    "Hayvanlar": [{w:"ASLAN",m:"Orman kralı"},{w:"KAPLAN",m:"Çizgili kedi"},{w:"FİL",m:"Hortumlu dev"},{w:"ZÜRAFA",m:"Uzun boyunlu"},{w:"MAYMUN",m:"Muz sever"},{w:"YILAN",m:"Sürünür"},{w:"KARTAL",m:"Yırtıcı kuş"},{w:"YUNUS",m:"Zeki denizci"},{w:"PENGUEN",m:"Uçamaz"},{w:"KEDİ",m:"Evcil dost"},{w:"KÖPEK",m:"Sadık dost"},{w:"KUŞ",m:"Kanatlı"},{w:"BALIK",m:"Suda yaşar"},{w:"AT",m:"Binek hayvanı"},{w:"AYI",m:"Bal sever"},{w:"KURT",m:"Vahşi köpek"},{w:"TİLKİ",m:"Kurnaz"},{w:"TAVŞAN",m:"Havuç sever"},{w:"İNEK",m:"Süt verir"},{w:"KOYUN",m:"Yün verir"},{w:"KEÇİ",m:"İnatçı"},{w:"KARINCA",m:"Çalışkan böcek"},{w:"ARIBEYİ",m:"Kovan lideri"},{w:"TİMSAH",m:"Sürüngen avcı"},{w:"LEYLEK",m:"Göçmen kuş"}],
    "Astronomi": [{w:"GEZEGEN",m:"Yörüngede döner"},{w:"YILDIZ",m:"Işık kaynağı"},{w:"GÜNEŞ",m:"Isı kaynağı"},{w:"DÜNYA",m:"Yaşam alanı"},{w:"MARS",m:"Kızıl gezegen"},{w:"AY",m:"Uydumuz"},{w:"GALAKSİ",m:"Yıldız kümesi"},{w:"UZAY",m:"Sonsuz boşluk"},{w:"METEOR",m:"Gök taşı"},{w:"ASTRONOT",m:"Uzay adamı"},{w:"ROKET",m:"Uzay aracı"},{w:"SATÜRN",m:"Halkalı gezegen"},{w:"JÜPİTER",m:"Dev gezegen"},{w:"VENÜS",m:"Çoban yıldızı"},{w:"NEPTÜN",m:"Mavi gaz devi"},{w:"URANÜS",m:"Buz devi"},{w:"PLÜTON",m:"Cüce gezegen"},{w:"KARADELİK",m:"Işığı bile yutar"},{w:"YÖRÜNGE",m:"Dönüş yolu"},{w:"ASTEROİT",m:"Küçük gezegen"},{w:"TELESKOP",m:"Gözlem aracı"}],
    "Mutfak": [{w:"TENCERE",m:"Yemek pişirilir"},{w:"TAVA",m:"Kızartma aracı"},{w:"ÇATAL",m:"Yemek yerken"},{w:"KAŞIK",m:"Sıvı için"},{w:"BIÇAK",m:"Kesmek için"},{w:"TABAK",m:"Servis aracı"},{w:"BARDAK",m:"İçmek için"},{w:"FIRIN",m:"Isıtır"},{w:"BUZDOLABI",m:"Soğutur"},{w:"KEPÇE",m:"Çorba için"},{w:"SÜZGEÇ",m:"Süzmek için"},{w:"RENDE",m:"Parçalar"},{w:"TEPSİ",m:"Taşıma aracı"},{w:"KASE",m:"Derin kap"},{w:"CEZVE",m:"Kahve pişirilir"},{w:"ÇAYDANLIK",m:"Çay demlenir"},{w:"FİNCAN",m:"Kahve içilir"},{w:"TUZLUK",m:"Baharat kabı"},{w:"MİKSER",m:"Çırpıcı"},{w:"OCAK",m:"Ateş kaynağı"}],
    "Okul": [{w:"SINIF",m:"Derslik"},{w:"ÖĞRETMEN",m:"Eğitmen"},{w:"ÖĞRENCİ",m:"Talebe"},{w:"KİTAP",m:"Okuma aracı"},{w:"DEFTER",m:"Yazma aracı"},{w:"KALEM",m:"Yazar"},{w:"SİLGİ",m:"Siler"},{w:"CETVEL",m:"Ölçer"},{w:"TEBEŞİR",m:"Tahta kalemi"},{w:"TAHTA",m:"Yazı alanı"},{w:"ÇANTA",m:"Eşya taşır"},{w:"SIRASI",m:"Oturak"},{w:"DERS",m:"Konu"},{w:"TENEFFÜS",m:"Mola"},{w:"ÖDEV",m:"Ev çalışması"},{w:"SINAV",m:"Değerlendirme"},{w:"KARNE",m:"Not belgesi"},{w:"KÜTÜPHANE",m:"Kitap odası"},{w:"HARİTA",m:"Coğrafya aracı"}],
    "Meslekler": [{w:"DOKTOR",m:"Hastalara bakar"},{w:"MÜHENDİS",m:"Tasarım ve yapı"},{w:"AVUKAT",m:"Hukukçu"},{w:"MİMAR",m:"Bina çizer"},{w:"POLİS",m:"Güvenlik sağlar"},{w:"AŞÇI",m:"Yemek yapar"},{w:"BERBER",m:"Saç keser"},{w:"ŞOFÖR",m:"Araç kullanır"},{w:"TERZİ",m:"Kıyafet diker"},{w:"MANAV",m:"Sebze satar"},{w:"KASAP",m:"Et satar"},{w:"PİLOT",m:"Uçak kullanır"},{w:"RESSAM",m:"Tablo çizer"},{w:"YAZAR",m:"Kitap yazar"},{w:"HEMŞİRE",m:"Sağlık çalışanı"}],
    "Spor": [{w:"FUTBOL",m:"Ayak topu"},{w:"BASKETBOL",m:"Pota oyunu"},{w:"VOLEYBOL",m:"File oyunu"},{w:"TENİS",m:"Raketle oynanır"},{w:"YÜZME",m:"Suda ilerleme"},{w:"GÜREŞ",m:"Ata sporu"},{w:"BOKS",m:"Eldivenli dövüş"},{w:"HALTER",m:"Ağırlık kaldırma"},{w:"ATLETİZM",m:"Koşu ve atlama"},{w:"KAYAK",m:"Karda kayma"},{w:"BİSİKLET",m:"İki tekerlekli"},{w:"SATRANÇ",m:"Zeka sporu"},{w:"GOLF",m:"Delik ve sopa oyunu"},{w:"OKÇULUK",m:"Hedef vurma"}],
    "Bitkiler": [{w:"AĞAÇ",m:"Odunsu gövde"},{w:"ÇİÇEK",m:"Renkli bitki"},{w:"YAPRAK",m:"Yeşil bölüm"},{w:"TOHUM",m:"Bitki başlangıcı"},{w:"KÖK",m:"Toprak altı"},{w:"OT",m:"Kısa bitki"},{w:"MANTAR",m:"Farklı bir alem"},{w:"SARMAŞIK",m:"Tırmanıcı bitki"},{w:"KAKTÜS",m:"Çöl bitkisi"},{w:"GÜL",m:"Dikenli çiçek"},{w:"LALE",m:"Bahar çiçeği"},{w:"PAPATYA",m:"Seviyor sevmiyor"},{w:"MENEKŞE",m:"Mor çiçek"},{w:"ORKİDE",m:"Zarif çiçek"},{w:"ÇAM",m:"İğne yapraklı"}],
    "Bilim": [{w:"ATOM",m:"Maddenin yapı taşı"},{w:"HÜCRE",m:"Canlılığın temeli"},{w:"TEOREM",m:"İspatlanabilen önerme"},{w:"DENEY",m:"Bilimsel test"},{w:"FİZİK",m:"Doğa bilimi"},{w:"KİMYA",m:"Madde bilimi"},{w:"BİYOLOJİ",m:"Canlı bilimi"},{w:"GENETİK",m:"Kalıtım bilimi"},{w:"ENERJİ",m:"İş yapabilme yeteneği"},{w:"MOL",m:"Madde miktarı birimi"},{w:"EVRİM",m:"Değişim süreci"},{w:"FOSİL",m:"Taşlaşmış kalıntı"},{w:"GÖZLEM",m:"İnceleme"},{w:"HİPOTEZ",m:"Varsayım"},{w:"ENZİM",m:"Biyolojik katalizör"}],
    "Edebiyat": [{w:"ROMAN",m:"Uzun öykü"},{w:"ŞİİR",m:"Manzum eser"},{w:"HİKAYE",m:"Kısa anlatı"},{w:"MASAL",m:"Olağanüstü öykü"},{w:"YAZAR",m:"Eser üreten"},{w:"ŞAİR",m:"Şiir yazan"},{w:"DESTAN",m:"Kahramanlık öyküsü"},{w:"TİYATRO",m:"Sahne sanatı"},{w:"DENEME",m:"Fikir yazısı"},{w:"BİYOGRAFİ",m:"Yaşam öyküsü"},{w:"KAFİYE",m:"Ses benzerliği"},{w:"MISRA",m:"Dize"},{w:"KİTAP",m:"Basılı eser"},{w:"DERGİ",m:"Süreli yayın"},{w:"MAKALE",m:"Bilimsel/fikri yazı"}],
    "Tarih": [{w:"SAVAŞ",m:"Silahlı çatışma"},{w:"BARIŞ",m:"Savaşsız durum"},{w:"İMPARATOR",m:"Büyük devlet hükümdarı"},{w:"KRAL",m:"Hükümdar"},{w:"ANLAŞMA",m:"Sözleşme"},{w:"FETİH",m:"Toprak alma"},{w:"İSYAN",m:"Başkaldırı"},{w:"ANTİK",m:"Eski çağlara ait"},{w:"MEDENİYET",m:"Uygarlık"},{w:"MÜZE",m:"Tarihi eser sergisi"},{w:"SULTAN",m:"İslam hükümdarı"},{w:"SARAY",m:"Hükümdar evi"},{w:"HANEDAN",m:"Hükümdar ailesi"},{w:"MİMARİ",m:"Yapı sanatı"},{w:"ARŞİV",m:"Belgelerin korunduğu yer"}],
    
    // YENİ EKLENENLER
    "Şehirler": [{w:"İSTANBUL",m:"Yedi tepeli şehir"},{w:"ANKARA",m:"Başkent"},{w:"İZMİR",m:"Ege'nin incisi"},{w:"BURSA",m:"Osmanlı'nın ilk başkenti"},{w:"ANTALYA",m:"Turizm cenneti"},{w:"LONDRA",m:"İngiltere'nin başkenti"},{w:"PARİS",m:"Aşk şehri"},{w:"ROMA",m:"İtalya'nın başkenti"},{w:"TOKYO",m:"Teknoloji merkezi"},{w:"NEW YORK",m:"Uyumayan şehir"},{w:"MOSKOVA",m:"Kızıl Meydan burada"},{w:"BERLİN",m:"Almanya'nın kalbi"}],
    "İsimler": [{w:"ALİ",m:"Yüce, ulu"},{w:"AYŞE",m:"Yaşayan, rahat yaşayan"},{w:"MEHMET",m:"Övülmüş"},{w:"ZEYNEP",m:"Değerli taşlar"},{w:"MUSTAFA",m:"Seçilmiş"},{w:"FATMA",m:"Sütten kesilmiş"},{w:"DENİZ",m:"Engin su"},{w:"CAN",m:"Ruh, hayat"},{w:"ELİF",m:"Dost, tanıdık"},{w:"BURAK",m:"Temiz, parlak"},{w:"PELİN",m:"Keskin kokulu bitki"}],
    "Eşyalar": [{w:"MASA",m:"Mobilya"},{w:"SANDALYE",m:"Oturma gereci"},{w:"TELEFON",m:"İletişim cihazı"},{w:"BİLGİSAYAR",m:"Veri işleyici"},{w:"LAMBA",m:"Aydınlatma aracı"},{w:"ANAHTAR",m:"Kilit açar"},{w:"SAAT",m:"Zamanı gösterir"},{w:"AYNA",m:"Yansıtıcı"},{w:"KOLTUK",m:"Rahat oturak"},{w:"HALI",m:"Zemin örtüsü"},{w:"PERDE",m:"Pencere örtüsü"},{w:"DOLAP",m:"Saklama alanı"}],
    "Coğrafya": [{w:"DAĞ",m:"Yüksek yerşekli"},{w:"NEHİR",m:"Akarsu"},{w:"DENİZ",m:"Tuzlu su kütlesi"},{w:"ADA",m:"Etrafı suyla çevrili"},{w:"OVADA",m:"Düzlük alan"},{w:"VADİ",m:"İki dağ arası"},{w:"KITA",m:"Büyük kara parçası"},{w:"ÇÖL",m:"Kurak bölge"},{w:"ORMAN",m:"Ağaç topluluğu"},{w:"GÖL",m:"Durgun su"},{w:"BOĞAZ",m:"İki denizi bağlar"}],
    "Teknoloji": [{w:"İNTERNET",m:"Ağ bağlantısı"},{w:"YAZILIM",m:"Kod bütünü"},{w:"DONANIM",m:"Fiziksel parça"},{w:"ROBOT",m:"Yapay işçi"},{w:"BATARYA",m:"Güç kaynağı"},{w:"EKRAN",m:"Görüntüleme birimi"},{w:"KLAVYE",m:"Yazı giriş aracı"},{w:"KULAKLIK",m:"Ses dinleme"},{w:"KAMERA",m:"Görüntü kaydedici"},{w:"UYDU",m:"Haberleşme aracı"}], 
    "Duygular": [
        {w:"MUTLULUK",m:"Sevinç hali"},{w:"ÜZÜNTÜ",m:"Keder"},{w:"ÖFKE",m:"Kızgınlık"},{w:"KORKU",m:"Ürperti"},
        {w:"ŞAŞKINLIK",m:"Hayret"},{w:"HEYECAN",m:"Coşku"},{w:"ÖZLEM",m:"Hasret"},{w:"GÜVEN",m:"İnanma duygusu"},
        {w:"MERAK",m:"Öğrenme isteği"},{w:"GURUR",m:"Kıvanç"},{w:"UTANÇ",m:"Mahcubiyet"},{w:"SEVGİ",m:"Bağlılık"}
    ],
    "Hava Durumu": [
        {w:"GÜNEŞLİ",m:"Açık hava"},{w:"YAĞMURLU",m:"Yağışlı"},{w:"KARLI",m:"Beyaz örtü"},{w:"FIRTINA",m:"Sert rüzgar"},
        {w:"SİSLİ",m:"Görüş düşük"},{w:"BULUTLU",m:"Gri gökyüzü"},{w:"DOLU",m:"Buz yağışı"},{w:"RÜZGAR",m:"Hava akımı"},
        {w:"ŞİMŞEK",m:"Anlık ışık"},{w:"GÖKKUŞAĞI",m:"Yedi renk"}
    ],
    "Taşıtlar": [
        {w:"OTOMOBİL",m:"Binek araç"},{w:"OTOBÜS",m:"Toplu taşıma"},{w:"TREN",m:"Raylı taşıt"},{w:"GEMİ",m:"Deniz taşıtı"},
        {w:"UÇAK",m:"Hava taşıtı"},{w:"HELİKOPTER",m:"Pervaneli"},{w:"BİSİKLET",m:"İki tekerlekli"},{w:"MOTOSİKLET",m:"Hızlı iki teker"},
        {w:"METRO",m:"Yer altı treni"},{w:"TRAKTÖR",m:"Tarım aracı"},{w:"DENİZALTI",m:"Su altı taşıtı"}
    ],
    "Müzik": [
        {w:"GİTAR",m:"Telli enstrüman"},{w:"PİYANO",m:"Tuşlu çalgı"},{w:"KEMAN",m:"Yaylı çalgı"},{w:"DAVUL",m:"Vurmalı çalgı"},
        {w:"FLÜT",m:"Üflemeli çalgı"},{w:"BAĞLAMA",m:"Halk müziği sazı"},{w:"MELODİ",m:"Ezgi"},{w:"RİTİM",m:"Tempo"},
        {w:"KONSER",m:"Müzik etkinliği"},{w:"ORDA",m:"Ses topluluğu"},{w:"ŞARKI",m:"Sözlü müzik"}
    ],
    "Sinema": [
        {w:"FİLM",m:"Beyaz perde eseri"},{w:"OYUNCU",m:"Karakteri canlandıran"},{w:"YÖNETMEN",m:"Filmi çeken"},{w:"SENARYO",m:"Film metni"},
        {w:"KAMERA",m:"Kayıt cihazı"},{w:"REPLİK",m:"Oyuncu sözü"},{w:"ANİMASYON",m:"Çizgi film"},{w:"BELGESEL",m:"Gerçekçi film"},
        {w:"KOMEDİ",m:"Güldürü türü"},{w:"KORKU",m:"Gerilim türü"}
    ],
    "Yiyecekler": [
        {w:"EKMEK",m:"Temel gıda"},{w:"MAKARNA",m:"Hamur işi"},{w:"PİZZA",m:"İtalyan lezzeti"},{w:"KEBAP",m:"Et yemeği"},
        {w:"ÇORBA",m:"Sıvı başlangıç"},{w:"SALATA",m:"Sebze karışımı"},{w:"YOĞURT",m:"Süt ürünü"},{w:"PEYNİR",m:"Kahvaltılık süt ürünü"},
        {w:"PİLAV",m:"Pirinç yemeği"},{w:"KÖFTE",m:"Kıyma yemeği"}
    ],
    "Zaman": [
        {w:"SANİYE",m:"En kısa birim"},{w:"DAKİKA",m:"Altmış saniye"},{w:"SAAT",m:"Günün bölümü"},{w:"SABAH",m:"Günün başlangıcı"},
        {w:"AKŞAM",m:"Günün sonu"},{w:"GECE",m:"Karanlık vakit"},{w:"MEVSİM",m:"Yılın dört bölümü"},{w:"YÜZYIL",m:"Asır"},
        {w:"GELECEK",m:"Henüz gelmemiş"},{w:"GEÇMİŞ",m:"Yaşanmış zaman"}
    ],
    "Matematik": [
        {w:"RAKAM",m:"Sayıları oluşturan"},{w:"TOPLAMA",m:"Ekleme işlemi"},{w:"BÖLME",m:"Paylaştırma"},{w:"ÇARPMA",m:"Katlama işlemi"},
        {w:"ÜÇGEN",m:"Üç kenarlı"},{w:"KARE",m:"Dört eşit kenar"},{w:"DAİRE",m:"Yuvarlak şekil"},{w:"DENKLEM",m:"Eşitlik"},
        {w:"GEOMETRİ",m:"Şekil bilimi"},{w:"ASAL",m:"Sadece kendisine bölünen"}
    ],
    "Ev Bölümleri": [
        {w:"MUTFAK",m:"Yemek alanı"},{w:"SALON",m:"Oturma odası"},{w:"BANYO",m:"Yıkanma yeri"},{w:"YATAKODASI",m:"Uyuma alanı"},
        {w:"BALKON",m:"Dışarı açılan yer"},{w:"KORİDOR",m:"Geçiş alanı"},{w:"BAHÇE",m:"Dış alan"},{w:"GARAJ",m:"Araç yeri"},
        {w:"ÇATI",m:"Evin tepesi"},{w:"KİLER",m:"Depolama alanı"}
    ],
    "Kıyafetler": [
        {w:"CEKET",m:"Üst giysi"},{w:"PANTOLON",m:"Alt giysi"},{w:"GÖMLEK",m:"Yaka düğmeli"},{w:"ELBİSE",m:"Tek parça giysi"},
        {w:"AYAKKABI",m:"Ayak giyeceği"},{w:"ÇORAP",m:"Ayağa giyilir"},{w:"ŞAPKA",m:"Baş aksesuarı"},{w:"ELDİVEN",m:"Ele takılır"},
        {w:"KRAVAT",m:"Boyun aksesuarı"},{w:"KAZAK",m:"Yünlü giysi"}
    ],
    "Hobiler": [
        {w:"RESİM",m:"Çizim sanatı"},{w:"DANS",m:"Müzikli hareket"},{w:"KAMP",m:"Doğada konaklama"},{w:"FOTOĞRAF",m:"Anı yakalama"},
        {w:"YEMEK",m:"Mutfak sanatı"},{w:"OYUN",m:"Eğlence aktivitesi"},{w:"SEYAHAT",m:"Gezme görme"},{w:"KOLEKSİYON",m:"Biriktirme"},
        {w:"YAZILIM",m:"Kod yazma"},{w:"BAHÇIVANLIK",m:"Bitki bakımı"}
    ],
    "Ekonomi": [
        {w:"PARA",m:"Ödeme aracı"},{w:"BANKA",m:"Finans kurumu"},{w:"BORSA",m:"Yatırım alanı"},{w:"ALTIN",m:"Değerli maden"},
        {w:"DOLAR",m:"Yabancı para"},{w:"MAAŞ",m:"Aylık kazanç"},{w:"VERGİ",m:"Devlet payı"},{w:"KREDİ",m:"Borç para"},
        {w:"BÜTÇE",m:"Gelir gider planı"},{w:"İHRACAT",m:"Dışa satım"}
    ], 
    "Ülkeler": [
        {w:"TÜRKİYE",m:"Asya ve Avrupa'da"},{w:"ALMANYA",m:"Avrupa'nın kalbi"},{w:"FRANSA",m:"Eyfel Kulesi burada"},{w:"İTALYA",m:"Çizme şeklinde"},
        {w:"JAPONYA",m:"Doğan güneşin ülkesi"},{w:"BREZİLYA",m:"Güney Amerika devi"},{w:"MISIR",m:"Piramitler ülkesi"},{w:"KANADA",m:"Akçaağaç yaprağı"},
        {w:"RUSYA",m:"Yüzölçümü en büyük"},{w:"İSPANYA",m:"Matadorlar diyarı"}
    ],
    "Mitoloji": [
        {w:"ZEUS",m:"Göklerin tanrısı"},{w:"HERKÜL",m:"Yarı tanrı kahraman"},{w:"MEDUSA",m:"Yılan saçlı"},{w:"FENİKS",m:"Küllerinden doğan"},
        {w:"POSEİDON",m:"Denizler tanrısı"},{w:"ANUBİS",m:"Mısır ölüm tanrısı"},{w:"TRUVA",m:"Tahta atlı şehir"},{w:"EFSANE",m:"Söylence"},
        {w:"DESTAN",m:"Mitolojik öykü"},{w:"TAPINAK",m:"İbadet yeri"}
    ],
    "Sağlık": [
        {w:"VİTAMİN",m:"Vücut direnci sağlar"},{w:"HASTANE",m:"Şifa merkezi"},{w:"REÇETE",m:"İlaç listesi"},{w:"ECZANE",m:"İlaç satılan yer"},
        {w:"AŞI",m:"Bağışıklık kazandırır"},{w:"CERRAH",m:"Ameliyat yapan"},{w:"DİYET",m:"Beslenme düzeni"},{w:"NABIZ",m:"Kalp atış hızı"},
        {w:"SİGORTA",m:"Güvence sistemi"},{w:"TERAPİ",m:"Tedavi yöntemi"}
    ],
    "Bilgisayar Oyunları": [
        {w:"KARAKTER",m:"Yönetilen figür"},{w:"STRATEJİ",m:"Planlama türü"},{w:"MACERA",m:"Keşif dolu oyun"},{w:"BÖLÜM",m:"Oyun aşaması"},
        {w:"YETENEK",m:"Özel güç"},{w:"ÇEVRİMİÇİ",m:"İnternetle oynanan"},{w:"KONSOL",m:"Oyun cihazı"},{w:"GRAFİK",m:"Görsel kalite"},
        {w:"KULAKLIK",m:"Ses duymak için"},{w:"REKABET",m:"Yarışma hali"}
    ],
    "İçecekler": [
        {w:"KAHVE",m:"Kafeinli içecek"},{w:"AYRAN",m:"Yoğurtlu içecek"},{w:"LİMONATA",m:"Ekşi tatlı"},{w:"MEYVESUYU",m:"Meyve özü"},
        {w:"SÜT",m:"Kalsiyum kaynağı"},{w:"ŞALGAM",m:"Baharatlı içecek"},{w:"SAHLEP",m:"Tarçınlı kış tadı"},{w:"BOZA",m:"Mayalı kış içeceği"},
        {w:"SODA",m:"Gazlı maden suyu"},{w:"DEMLEME",m:"Çay hazırlama yöntemi"}
    ],
    "Doğa Olayları": [
        {w:"DEPREM",m:"Yer sarsıntısı"},{w:"TSUNAMİ",m:"Dev dalga"},{w:"VOLKAN",m:"Yanardağ"},{w:"HEYELAN",m:"Toprak kayması"},
        {w:"KURAKLIK",m:"Su kıtlığı"},{w:"SEL",m:"Su baskını"},{w:"ÇIĞ",m:"Kar kütlesi düşmesi"},{w:"HORTUM",m:"Dönen rüzgar sütunu"},
        {w:"EROZYON",m:"Toprak aşınması"},{w:"YANGIN",m:"Alevlerin yayılması"}
    ],
    "Kırtasiye": [
        {w:"ZIMBA",m:"Kağıt birleştirici"},{w:"DOSYA",m:"Belge saklama"},{w:"BOYAKALEMİ",m:"Renkli çizim"},{w:"PERGEL",m:"Daire çizme aracı"},
        {w:"ATAŞ",m:"Tutturucu tel"},{w:"BANT",m:"Yapıştırıcı şerit"},{w:"ETİKET",m:"İsimlik"},{w:"DEFTER",m:"Not alma yeri"},
        {w:"TUVAL",m:"Resim yapılan bez"},{w:"FALÇATA",m:"Keskin bıçak"}
    ],
    "Hukuk": [
        {w:"ADALET",m:"Hak ve hukuk"},{w:"MAHKEME",m:"Yargılama yeri"},{w:"HAKİM",m:"Karar veren kişi"},{w:"SAVCI",m:"İddia makamı"},
        {w:"ANAYASA",m:"Temel kanun"},{w:"HAPİS",m:"Cezalandırma yeri"},{w:"ŞAHİT",m:"Görgü tanığı"},{w:"SUÇ",m:"Yasak eylem"},
        {w:"CEZA",m:"Yaptırım"},{w:"KANUN",m:"Yazılı kural"}
    ],
    "İnşaat ve Mimari": [
        {w:"TUĞLA",m:"Duvar malzemesi"},{w:"BETON",m:"Sert yapı malzemesi"},{w:"ÇİMENTO",m:"Bağlayıcı toz"},{w:"İSKELE",m:"Kurulan platform"},
        {w:"VİNÇ",m:"Ağırlık kaldırıcı"},{w:"KÖPRÜ",m:"İki yakayı bağlar"},{w:"KULE",m:"Yüksek yapı"},{w:"MERMER",m:"Değerli taş"},
        {w:"SÜTUN",m:"Taşıyıcı direk"},{w:"KUBBE",m:"Yarım küre çatı"}
    ],
    "Uzay Kurgu": [
        {w:"GALAKSİ",m:"Yıldız sistemleri"},{w:"IŞINHIZI",m:"En yüksek hız"},{w:"UZAYLI",m:"Dünya dışı varlık"},{w:"KOLONİ",m:"Yerleşim birimi"},
        {w:"ROBOT",m:"Mekanik yardımcı"},{w:"MEKİK",m:"Gidiş geliş aracı"},{w:"IŞINLAMA",m:"Anlık ulaşım"},{w:"KAPSÜL",m:"Küçük yaşam alanı"},
        {w:"ASTEROİT",m:"Gök taşı kuşağı"},{w:"İSTASYON",m:"Uzaydaki üs"}
    ]
 
 
};
 