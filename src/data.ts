import asakaiSure from "../asakai_toplanti/proje 1.png";
import asakaiRapor from "../asakai_toplanti/proje 2.png";
import teklifHesap from "../teklif/proje 1.png";
import teklifTedarikci from "../teklif/proje 2.png";
import teklifListe from "../teklif/proje 3.png";
import teklifForm from "../teklif/proje 4.png";
import satisGenel from "../raporlama/proje 1.png";
import satisNet from "../raporlama/proje 2.png";
import satisGunluk from "../raporlama/proje 3.png";
import teklifOnay from "../raporlama/proje 4.png";
import depoMenu from "../depo/proje 1.png";
import depoPanel from "../depo/proje 2.png";
import depoStok from "../depo/proje 3.png";
import depoRaf from "../depo/proje 4.png";
import enjoAsama from "../enjo/proje 1.png";
import enjoEnjeksiyon from "../enjo/proje 2.png";
import enjoSatis from "../enjo/proje 3.png";
import enjoProje from "../enjo/proje 4.png";
import oneriDetay from "../oneri/proje 1.png";
import anketGonder from "../anket/proje 1.png";
import anketRapor from "../anket/proje 2.png";
import anketAnaliz from "../anket/proje 3.png";
import anketSirket from "../anket/proje 4.png";

export const profile = {
  name: "Beril Göktaş",
  role: "Yazılım Geliştiricisi",
  location: "İzmir / Buca",
  email: "goktasberil2@gmail.com",
  linkedin: "https://linkedin.com/in/berilgoktas/",
  github: "https://github.com/berilgoktas",
  intro:
    "Kurumsal sistemlerde ERP verisini rapor, teklif ve operasyon ekranlarına bağlayan uygulamalar geliştiriyorum. Üretim, finans ve insan kaynakları süreçlerini SQL Server üzerinde toplayıp .NET ve React ile kullanılabilir hale getiriyorum.",
};

export const experience = {
  title: "Bilgi İşlem Uzman Yardımcısı",
  company: "Arnes-Jetseal",
  period: "03/2025 — devam",
  mode: "Ofis, Türkiye",
  summary:
    "DIA ERP entegrasyonları, üretim ve teklif raporları, maliyet hesaplama ve kurum içi portallar üzerinde çalışıyorum. Uygulamaları hem zamanlanmış arka plan işleri hem de günlük kullanıma uygun arayüzler olarak teslim ediyorum.",
};

export type ProjectImage = {
  src: string;
  alt: string;
  phone?: boolean;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  points: string[];
  stack: string[];
  images?: ProjectImage[];
};

export const projects: Project[] = [
  {
    id: "uretim-analiz",
    title: "DIA ERP Üretim Analiz Raporu",
    summary:
      "Üretim iş emirleri ve operatör hareketlerini DIA ERP’den SQL Server’a alıp üretim metriklerine dönüştüren raporlama uygulaması.",
    points: [
      "DIA ERP’den üretim iş emirleri ve operatör hareketlerini çekip SQL Server’a senkronize ettim.",
      "Yalnızca değişen veya yeni kayıtları alan artımlı senkronizasyon ile ağ trafiğini azalttım.",
      "Güncelleme, eşleştirme ve aktarımı yöneten bir veri işleme akışı kurdum.",
      "Günlük zamanlanmış görev ve konsol tetikleyicisiyle uygulamanın müdahalesiz çalışmasını sağladım.",
      "Ham üretim verisini dışa aktarılabilen Excel raporlarına dönüştürdüm.",
      "Oturum sürekliliği ve yeniden bağlanma ile kopmalara dayanıklı bir istek yapısı tasarladım.",
      "Aynı işi hem arka plan konsolu hem de manuel Windows Forms arayüzü olarak teslim ettim.",
      "Loglama ve hata yakalama ile çalışmanın izlenebilir olmasını sağladım.",
    ],
    stack: ["C#", "SQL Server", "Windows Forms", "Excel", "DIA ERP"],
  },
  {
    id: "teklif-siparis",
    title: "Teklif ve Sipariş Yönetim Uygulaması",
    summary:
      "Tedarikçi havuzu, müşteri talepleri ve teklif süreçlerini tek merkezden yöneten kurumsal platform.",
    points: [
      "Malzeme kartı, tedarikçi, teklif versiyonu ve yetki için hiyerarşik bir SQL modeli kurdum.",
      "ADO.NET ve Repository deseniyle sürdürülebilir bir ASP.NET Core 8 API yazdım.",
      "Talepleri kayıtlı tedarikçilerle eşleştiren iş kuralı motoru ve profil hesaplama modülü ekledim.",
      "React 19 arayüzünde arama, sayfalama ve tablolar; onay sonrası e-posta ve Excel çıktısı ürettim.",
    ],
    stack: ["ASP.NET Core 8", "React 19", "ADO.NET", "SQL Server"],
    images: [
      { src: teklifHesap, alt: "Mil profili için teklif hesaplama ekranı" },
      { src: teklifTedarikci, alt: "Tedarikçi giriş formu" },
      { src: teklifListe, alt: "Kayıtlı tedarikçiler listesi" },
      { src: teklifForm, alt: "Teklif listesi kayıt formu" },
    ],
  },
  {
    id: "maliyet",
    title: "Üretim Maliyet Hesaplama Sistemi",
    summary:
      "Plastik enjeksiyon süreçlerinin birim maliyetini hesaplayan ve teklif üretimini dijitalleştiren web uygulaması.",
    points: [
      "Enjeksiyon, çapak alma, post-kürleme ve yıkama adımlarının birim maliyetini hesaplayan teklif akışı kurdum.",
      "ASP.NET Core 8 Web API ve React 19 ile uçtan uca bir sistem tasarladım.",
      "Döviz kuru API’leriyle maliyetleri otomatik güncellenen bir fiyatlama altyapısına bağladım.",
      "Teklif sonucunu Excel ve PDF olarak üreten modüller yazdım.",
    ],
    stack: ["ASP.NET Core 8", "React 19", "SQL Server", "Docker"],
    images: [
      { src: enjoAsama, alt: "Üretim aşaması seçimi: enjeksiyon, çapak alma, post-kürleme ve yıkama" },
      { src: enjoEnjeksiyon, alt: "Enjeksiyon hesaplama ekranı" },
      { src: enjoSatis, alt: "Satış yönetimi, proje maliyetleri ve Excel-PDF çıktısı" },
      { src: enjoProje, alt: "Proje yönetimi listesi" },
    ],
  },
  {
    id: "depo",
    title: "Depo Stok ve Raf Takip Uygulaması",
    summary:
      "Ürün, stok hareketi ve raf konumunu mobilde takip eden depo uygulaması.",
    points: [
      "React ve Flask ile mobil öncelikli bir stok ve raf takip uygulaması geliştirdim.",
      "Ürün tanımı, stok giriş/çıkış, raf transferi, mal kabul ve sevkiyat süreçlerini dijitalleştirdim.",
      "Raf konumu ve barkod ile hızlı işlem; kamera ile barkod okuma ve PWA arayüzü ekledim.",
      "Firma koduna göre veri izolasyonu, JWT ve rol bazlı yetki kurguladım.",
    ],
    stack: ["React", "Flask", "PWA", "JWT"],
    images: [
      { src: depoMenu, alt: "Depo uygulaması ana menüsü", phone: true },
      { src: depoPanel, alt: "Kontrol paneli: ürün, kritik stok ve sayım durumu", phone: true },
      { src: depoStok, alt: "Stok durumu listesi ve barkodlar", phone: true },
      { src: depoRaf, alt: "Raf yönetimi ekranı", phone: true },
    ],
  },
  {
    id: "rapor-portal",
    title: "Kurumsal Raporlama ve ERP Entegrasyon Sistemi",
    summary:
      "DIA ERP’den irsaliye, fatura, teklif, cari ve döviz kurunu SQL Server’a alıp tek portalda raporlayan sistem.",
    points: [
      "DIA ERP web servislerinden irsaliye, standart fatura, e-fatura, satış teklifleri, cari hesaplar ve güncel döviz kurlarını çekerek yerel SQL Server veritabanına aktaran entegre bir kurumsal raporlama sistemi geliştirdim.",
      "ERP ile yerel veritabanı arasında artımlı senkronizasyon kurarak yalnızca yeni veya güncellenen kayıtların aktarılmasını sağladım.",
      "Oturum yönetimi, otomatik yeniden bağlanma ve hata toleransı ile kesintilerde veri aktarımının kontrollü devam etmesini sağladım.",
      "ADO.NET, toplu veri aktarımı ve indeksleme ile yüksek hacimli ERP verisinin hızlı işlenmesini sağladım.",
      "Finans, stok, satış ve cari verilerin belirli saatlerde işlenmesi için zamanlanmış görevler oluşturdum.",
      "Satış teklifleri, teklif durumları, personel performansı, finansal veriler, stok hareketleri ve cari hesap sayılarının tek portaldan takip edilmesini sağladım.",
      "Cari hesap sayılarındaki artış ve azalışlar ile dönemsel cari değişimlerini raporlayan analiz ekranları geliştirdim.",
      "Onay, red ve beklemede durumlarını; gün, hafta ve ay bazında satış performansı ve dönüşüm oranlarını gösteren dashboardlar oluşturdum.",
      "Excel raporları ve otomatik e-posta ile Euro bazlı kârlılık, stok grubu ve cari değişimlerini içeren günlük özetlerin yöneticilere gitmesini sağladım.",
      "Rol bazlı erişim ve Basic Authentication ile yetkiye göre modül ve rapor görünürlüğünü API seviyesinde uyguladım.",
      "Sistemi hem manuel tetiklenebilir hem de insansız çalışacak şekilde tasarladım; analiz için grafik modülleri ekledim.",
    ],
    stack: ["DIA ERP", "SQL Server", "ADO.NET", "Scheduler", "RBAC"],
    images: [
      { src: satisGenel, alt: "Satışlar Genel ekranı, aylık toplam satış ve kategori dağılımı" },
      { src: satisNet, alt: "Satışlar Net ekranı, kategori ve detay grafikleri" },
      { src: satisGunluk, alt: "Satışlar Net günlük tablo ve çizgi grafikleri" },
      { src: teklifOnay, alt: "Teklif Onay Raporu, performans kartları ve trend grafiği" },
    ],
  },
  {
    id: "pdks",
    title: "Personel Giriş - Çıkış Takibi",
    summary:
      "Geçiş kayıtlarından çalışma süresini hesaplayan, hata tespit eden ve periyodik rapor gönderen takip sistemi.",
    points: [
      "Personel giriş-çıkış kayıtlarını filtrelenebilir ve raporlanabilir bir veri yapısında işledim.",
      "Geçiş hareketlerini eşleştirerek personel, gün, ay ve ofis bazında çalışma sürelerini hesapladım.",
      "Eksik veya eşleşmeyen kayıtları kişi bazlı hata metriklerine çeviren bir kontrol kurdum.",
      "Excel, CSV, PDF ve grafik destekli dışa aktarma modülleri yazdım.",
      "Aylık çalışan raporlarını üretip ilgili alıcı gruplarına e-posta ile gönderen zamanlanmış servisler ekledim.",
      "Hata loglama, otomatik yeniden deneme ve servis izleme ile sistemi izlenebilir kıldım.",
      "Enibra İK yazılımıyla senkronizasyon için ayrı bir konsol uygulaması geliştirerek entegrasyonu tamamladım.",
    ],
    stack: ["SQL Server", "C#", "Excel", "PDF", "Enibra"],
  },
  {
    id: "asakai",
    title: "Toplantı Takip Sistemi",
    summary:
      "Asakai toplantılarında departman konuşma sürelerini saniye hassasiyetinde ölçen yönetim uygulaması.",
    points: [
      "React, TypeScript ve PWA ile mobil uyumlu, çevrimdışı çalışabilen arayüz tasarladım.",
      "Katılımcı, geç kalma, devamsızlık, not ve Excel rapor modüllerini kurguladım.",
      ".NET 8 Web API, ADO.NET, kimlik doğrulama, CORS ve Swagger ile servis katmanını yazdım.",
      "Toplantı, kullanıcı ve departman ilişkilerini SQL Server’da modelledim; uygulamayı Docker’a aldım.",
    ],
    stack: ["React", "TypeScript", "PWA", ".NET 8", "Docker"],
    images: [
      { src: asakaiSure, alt: "Asakai toplantısında departman konuşma süreleri", phone: true },
      { src: asakaiRapor, alt: "Asakai aylık katılım ve konuşma süresi raporu", phone: true },
    ],
  },
  {
    id: "anket",
    title: "Kurumsal Anket Yönetim Sistemi",
    summary:
      "Anket oluşturma, tek kullanımlık linkle dağıtma, yanıt toplama ve memnuniyet analizini uçtan uca yöneten uygulama.",
    points: [
      "Anket oluşturma, dağıtma, yanıt toplama ve analiz süreçlerini uçtan uca yöneten bir web uygulaması geliştirdim.",
      "E-posta ile tek kullanımlık linkler için token tabanlı dağıtım tasarladım.",
      ".NET 8 Web API ve ADO.NET ile backend’i kurdum.",
      "MailKit ve arka plan kuyruğu ile toplu gönderim, hata yönetimi ve otomatik yeniden deneme ekledim.",
      "Şirket, kullanıcı ve anket verileri için CRUD ve raporlama servisleri yazdım.",
      "Admin paneli ve cevaplama arayüzlerini React 19 ve React Router 7 ile tasarladım.",
      "Recharts analiz ekranları ve ExcelJS raporları ekledim.",
      "Tüm katmanları Docker ile konteynerize ettim.",
      "NPS, müşteri memnuniyeti ve çaba puanını destekleyen çok bölümlü bir anket yapısı kurdum.",
    ],
    stack: ["React 19", ".NET 8", "MailKit", "Docker", "Recharts"],
    images: [
      { src: anketGonder, alt: "Anket gönderme paneli, firma ve kişi seçimi" },
      { src: anketRapor, alt: "Raporlar listesi ve Excel indirme" },
      { src: anketAnaliz, alt: "Anket analizleri, ortalama puan ve soru grafikleri" },
      { src: anketSirket, alt: "Şirket bazlı ortalama puanlar ve soru analizi" },
    ],
  },
  {
    id: "oneri",
    title: "Öneri ve İyileştirme Yönetim Sistemi",
    summary:
      "Çalışanların bireysel veya ekip önerilerini toplayan, onay akışını yöneten ve sonuçları raporlayan portal.",
    points: [
      "Bireysel veya ekip önerilerini toplayan, değerlendirme akışını yöneten ve raporlayan bir portal geliştirdim.",
      "React ve Vite ile öneri girişi, onay ve listeleme ekranlarını kurdum.",
      "Günlük, aylık ve yıllık öneri sayıları ile kabul/red oranları için dashboard ekranları oluşturdum.",
      ".NET 8 ve ADO.NET ile API’yi kurup sistemi Docker üzerinde teslim ettim.",
    ],
    stack: ["React", "Vite", ".NET 8", "SQL Server", "Docker"],
    images: [
      {
        src: oneriDetay,
        alt: "Öneri detayı: mevcut durum, önerilen değişiklik, beklenen fayda ve kabul/red özeti",
      },
    ],
  },
];

export const skillGroups = [
  {
    label: "Backend",
    items: ["C#", ".NET 8", "ASP.NET Core Web API", "Python Flask", "REST", "WebSocket", "JWT"],
  },
  {
    label: "Frontend",
    items: ["React 19", "TypeScript", "JavaScript", "Vite", "PWA"],
  },
  {
    label: "Veri",
    items: ["SQL Server", "ADO.NET", "SSMS", "MySQL", "Stored Procedure"],
  },
  {
    label: "Araçlar",
    items: ["Git", "Docker", "Swagger", "Postman", "Firebase", "Cloudflare"],
  },
];

export const education = [
  {
    school: "Anadolu Üniversitesi",
    program: "Yönetim Bilişim Sistemleri",
    note: "Açık öğretim",
    period: "2025 —",
  },
  {
    school: "Dokuz Eylül Üniversitesi",
    program: "Bilgisayar Programcılığı",
    note: "",
    period: "2023 — 2025",
  },
  {
    school: "Manavgat Anadolu Lisesi",
    program: "Sayısal",
    note: "",
    period: "2019 — 2023",
  },
];

export const languages = ["Türkçe", "İngilizce"];
