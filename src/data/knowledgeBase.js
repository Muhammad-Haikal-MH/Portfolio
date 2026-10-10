/**
 * Knowledge Base for Muhammad Haikal's Portfolio RAG Engine
 * Strictly bounded to Haikal's professional background, education,
 * internship at Urbansolv., teaching assistant experiences,
 * projects (BDC, Road Damage, NLP, Data Analytics, AI Web Apps),
 * achievements, skills, and contact information.
 */

export const portfolioKnowledge = [
  // ── BIO & GENERAL PROFILE ──
  {
    id: "profile-bio",
    category: "profile",
    title: "Muhammad Haikal - Profile & Background",
    keywords: ["haikal", "siapa", "profil", "biodata", "tentang", "about", "mahasiswa", "latar belakang", "universitas", "kuliah"],
    content: `Muhammad Haikal adalah mahasiswa Smart City Information Systems di Telkom University (angkatan 2024 - sekarang). Berdomisili di Bandung, Jawa Barat (berasal dari Jambi). Haikal memiliki spesialisasi kuat di bidang Data Analytics, Data Science, Machine Learning, dan AI Engineering, serta mampu membangun AI-powered Web Applications.`,
  },
  {
    id: "profile-contact",
    category: "profile",
    title: "Kontak & Media Sosial Muhammad Haikal",
    keywords: ["kontak", "email", "hubungi", "reach", "hire", "linkedin", "github", "sosial media"],
    content: `Muhammad Haikal dapat dihubungi melalui halaman Contact di website ini, atau melalui:
- GitHub: https://github.com/muhammad-haikal-mh
- Website Portofolio: https://muhammadhaikal.vercel.app/
- LinkedIn: Muhammad Haikal
Haikal terbuka untuk kesempatan magang lanjutan, freelance, riset AI/Data Science, dan kolaborasi profesional.`,
  },

  // ── INTERNSHIP EXPERIENCE (URBANSOLV) ──
  {
    id: "exp-internship-urbansolv",
    category: "experience",
    title: "Pengalaman Magang: PT Multimedia Solusi Prima (Urbansolv.)",
    keywords: ["magang", "internship", "kerja", "kantor", "perusahaan", "pt multimedia solusi prima", "urbansolv", "smart x", "smart asset", "iot", "computer vision", "energy prediction"],
    content: `Muhammad Haikal menjalani magang di PT Multimedia Solusi Prima (Urbansolv.) sebagai AI Engineer & Data Researcher pada periode 29 Juni – 29 Oktober 2026.
Tanggung jawab dan proyek yang dikerjakan meliputi:
1. SMART X (Smart Building Monitoring):
   - Pemrosesan data telemetri sensor IoT dan feature engineering data konsumsi energi gedung.
   - Pembangunan model prediksi konsumsi daya/energi listrik (energy & power prediction).
   - Deteksi okupansi ruangan menggunakan Computer Vision berbasis kamera.
   - Pembuatan AI Inference API untuk deployment model ke sistem monitoring real-time.
   - Evaluasi performa prediksi konsumsi energi dan parameter kenyamanan gedung (building comfort).
2. SMART Asset Management:
   - Terlibat dalam aktivitas Riset & Pengembangan (R&D) terstruktur.
   - Penyusunan dan pengembangan materi penelitian, perumusan metodologi riset AI/IoT, penetapan indikator capaian (KPI), perumusan luaran riset, dan analisis kebutuhan sumber daya pelaksanaan.`,
  },

  // ── TEACHING ASSISTANT EXPERIENCES ──
  {
    id: "exp-teaching-assistant",
    category: "experience",
    title: "Pengalaman Asisten Praktikum (Teaching Assistant) Telkom University",
    keywords: ["asprak", "asisten", "teaching assistant", "koordinator", "alpro", "algoritma pemrograman", "webpro", "ux", "user experience"],
    content: `Pengalaman Asisten Praktikum (Teaching Assistant) Muhammad Haikal di Telkom University:
1. Coordinator Teaching Assistant - Algoritma Pemrograman (Sep 2025 – Jan 2026):
   Memimpin tim asisten laboratorium untuk membimbing 30+ mahasiswa memahami konsep dasar algoritma, pseudocode, dan pemrograman terstruktur. Bertanggung jawab atas jadwal lab, evaluasi tugas, dan standar materi.
2. Teaching Assistant - Web Programming (Feb 2026 – Jun 2026):
   Membimbing 30+ mahasiswa dalam pengembangan web modern (HTML, CSS, JavaScript, dan konsep server-side) serta troubleshooting proyek akhir mahasiswa.
3. Teaching Assistant - User Experience / UX (Feb 2026 – Jun 2026):
   Mementori 30+ mahasiswa dalam riset pengguna, wireframing, prototyping, dan usability testing menggunakan Figma.`,
  },

  // ── EDUCATION ──
  {
    id: "education-history",
    category: "education",
    title: "Riwayat Pendidikan Muhammad Haikal",
    keywords: ["pendidikan", "kuliah", "sekolah", "kampus", "telkom university", "sma 5 jambi", "gelar", "jurusan", "s-tr kom"],
    content: `Riwayat Pendidikan Muhammad Haikal:
1. Telkom University (2024 – Sekarang):
   Program Sarjana Terapan (Bachelor of Applied Science) - Smart City Information System (S.Tr.Kom), Fakultas Ilmu Terapan, Bandung.
2. SMA Negeri 5 Jambi (2021 – 2024):
   Jurusan Ilmu Pengetahuan Sosial dan Humaniora, Kota Jambi.`,
  },

  // ── MACHINE LEARNING & COMPUTER VISION / NLP PROJECTS ──
  {
    id: "proj-bdc-waste",
    category: "project",
    projectId: "bdc-waste-classification",
    title: "Proyek BDC 2026: Solid Waste Image Classification (Satria Data)",
    keywords: ["bdc", "satria data", "sampah", "waste", "klasifikasi sampah", "recyclable", "electronic", "organic", "label noise", "deep learning", "cnn", "image classification", "telkom"],
    content: `Proyek BDC 2026 — Solid Waste Image Classification:
- Latar Belakang: Mewakili Telkom University dalam kompetisi bergengsi Satria Data - Big Data Challenge (BDC) 2026.
- Dataset: 26,000 citra sampah (26rb gambar) dalam 3 kelas: Recyclable, Electronic, dan Organic.
- Metodologi: Baseline image classification, preprocessing & data augmentation, model training, validasi, classification report, error analysis, dan investigasi label noise.
- Temuan Kunci: Menemukan banyak sampel mislabeled (salah label) pada dataset kompetisi dan membandingkan prediksi model dengan label asli dataset.
- Hasil Metrik: Mencapai sekitar 97.07% Validation Accuracy dan Macro F1 sekitar 0.9748.
- Tech Stack: Python, PyTorch, Scikit-learn, NumPy, Matplotlib.`,
  },

  {
    id: "proj-road-damage",
    category: "project",
    projectId: "road-damage-detection",
    title: "Proyek Road Damage Detection & Tracking — YOLOv26 & ByteTrack",
    keywords: ["road damage", "jalan", "pothole", "lubang", "crack", "retak", "yolo", "yolov26", "bytetrack", "computer vision", "segmentasi", "instance segmentation", "semantic segmentation"],
    content: `Proyek Road Damage Detection & Tracking:
- Deskripsi: Sistem computer vision untuk mendeteksi dan melacak kerusakan jalan (potholes/lubang dan cracks/retakan).
- Evolusi Dataset: Dimulai dari dataset mandiri 700 gambar (baseline mAP@50 ~59%-62%), lalu diperluas menjadi ~5.000 gambar.
- Tantangan Dataset: Menangani anotasi inkonsisten, bounding box noisy, gambar duplikat, variasi kualitas multi-sumber, dan mengonversi format polygon 4-titik Roboflow ke format koordinat YOLO.
- Model & Tracking: Menggunakan YOLOv26n untuk deteksi objek real-time dan ByteTrack untuk multi-object tracking agar tidak terjadi duplikasi hitungan kerusakan pada video.
- Hasil Deteksi: Performa tingkat kelas mencapai Pothole: 77% mAP@50 dan Crack: 84% mAP@50.
- Eksperimen Segmentasi:
  * Pothole Instance Segmentation menghasilkan Mask mAP@50: 43.3%.
  * Crack Semantic Segmentation menghasilkan mIoU: 69.8%.
  * Insight: Pendekatan segmentasi yang lebih mendetail tidak otomatis memberikan hasil deteksi operasional yang lebih baik dibanding bounding box karena batas tekstur aspal yang ambigu.`,
  },

  {
    id: "proj-disguised-gambling-nlp",
    category: "project",
    projectId: "disguised-gambling-nlp",
    title: "Proyek Deteksi Promosi Judi Online Terselubung — Obfuscation-Aware IndoBERT & BiGRU",
    keywords: ["judi", "judi online", "judol", "nlp", "indobert", "bigru", "self-attention", "obfuscation", "youtube", "komentar", "teks", "g4c0r", "s10t"],
    content: `Proyek NLP: Disguised Online Gambling Promotion Detection:
- Deskripsi: Model hybrid NLP untuk mendeteksi promosi judi online terselubung pada kolom komentar YouTube berbahasa Indonesia.
- Dataset: 43.608 komentar YouTube yang dikurasi dan diverifikasi.
- Arsitektur Model:
  1. Obfuscation-Aware Normalization (menangani leetspeak seperti 'g4c0r', tanda baca acak 'j.u.d.i', spasi 's 1 0 t', dan zero-width space).
  2. IndoBERT Contextual Embeddings (representasi semantik mendalam bahasa Indonesia).
  3. Bidirectional GRU (BiGRU) untuk menangkap dependensi sekuensial dua arah.
  4. Self-Attention layer untuk memberi bobot pada token promosi terselubung.
- Hasil Metrik: Akurasi 96.2%, F1-Score 96.5%, Recall 95.8%, dan ROC-AUC 0.982.`,
  },

  {
    id: "proj-bank-churn-stacking",
    category: "project",
    projectId: "9",
    title: "Proyek Bank Churn Prediction — Stacking Ensemble & Optuna",
    keywords: ["churn", "bank churn", "stacking", "ensemble", "optuna", "xgboost", "lightgbm", "catboost", "nasabah"],
    content: `Proyek Bank Churn Prediction:
- Menggunakan arsitektur Stacking Ensemble menggabungkan XGBoost, LightGBM, dan CatBoost dengan meta-learner Logistic Regression.
- Hyperparameter tuning otomatis menggunakan Optuna.
- Menggunakan pipeline ColumnTransformer (StandardScaler & OneHotEncoder) untuk mencegah data leakage.
- Mencapai F1-Score 0.86 pada Stacking Ensemble (mengungguli masing-masing model tunggal).`,
  },

  {
    id: "proj-fraud-detection",
    category: "project",
    projectId: "10",
    title: "Proyek Fraud Detection Transaction — SMOTE & Decision Tree",
    keywords: ["fraud", "penipuan", "transaksi", "smote", "decision tree", "imbalanced data", "gridsearchcv"],
    content: `Proyek Fraud Detection Transaction:
- Klasifikasi transaksi keuangan mencurigakan pada dataset 50.000 transaksi.
- Menangani severe class imbalance menggunakan teknik SMOTE (Synthetic Minority Oversampling).
- Mengoptimalkan Decision Tree via GridSearchCV menghasilkan Precision Fraud 1.00 (mencegah salah blokir transaksi nasabah sah) dan F1-Score 0.77.`,
  },

  {
    id: "proj-student-clustering",
    category: "project",
    projectId: "11",
    title: "Proyek Student Lifestyle & Academic Performance Clustering",
    keywords: ["student", "clustering", "k-means", "kmeans", "gpa", "cgpa", "stress", "lifestyle", "mahasiswa"],
    content: `Proyek Clustering Gaya Hidup & Prestasi Akademik Mahasiswa:
- Menggunakan K-Means clustering (k=3 optimal via Silhouette score) pada 1.000 data mahasiswa.
- Menemukan bahwa manajemen stres merupakan pembeda performa akademik yang lebih kuat dibanding sekadar durasi jam belajar.
- Mengelompokkan profil mahasiswa menjadi: Efficient Performers (IPK tinggi, stres rendah), Struggling Hard Workers (jam belajar tinggi, stres tinggi, IPK sedang), dan Disengaged Students.`,
  },

  // ── DATA ANALYTICS & BI PROJECTS ──
  {
    id: "proj-stock-market",
    category: "project",
    projectId: "14",
    title: "Proyek Analisis Pasar Saham Indonesia IDX (2003–2024)",
    keywords: ["saham", "idx", "ihsg", "bursa efek", "pasar saham", "covid", "sharpe ratio", "volatilitas", "investasi"],
    content: `Proyek Analisis Kinerja Saham Indonesia (IDX 2003–2024):
- Menganalisis 136.599 data historis dari 29 emiten IDX di 8 sektor selama 21 tahun.
- Analisis komparatif periode Pre-COVID, COVID-19, dan Pasca-COVID.
- Segmentasi K-Means memetakan saham ke dalam klaster Defensif (perbankan: BBCA, BBRI, BMRI), Agresif (komoditas/energi: ADRO, PTBA), dan Berisiko.
- Silhouette score klaster meningkat dari 0.2435 (saat COVID) menjadi 0.3825 (pasca-COVID).`,
  },

  {
    id: "proj-hr-attrition",
    category: "project",
    projectId: "17",
    title: "Proyek HR Attrition Analytics Dashboard — Power BI",
    keywords: ["hr", "attrition", "karyawan", "turnover", "power bi", "dax", "sdm", "dashboard"],
    content: `Proyek HR Attrition Analytics Dashboard:
- Dashboard interaktif Power BI menggunakan dataset IBM HR Analytics (1.470 karyawan, 35 fitur).
- Menghitung KPI dinamis dengan DAX: Attrition Rate, Total Headcount, Avg Monthly Income, Satisfaction Score.
- Menemukan Attrition Rate keseluruhan sebesar 16.1% (melebihi batas ideal 10%), dengan risiko tertinggi pada karyawan lembur (overtime) dan usia muda 25-34 tahun di divisi R&D dan Sales.`,
  },

  {
    id: "proj-churn-tableau",
    category: "project",
    projectId: "13",
    title: "Proyek Bank Customer Churn Analysis — Tableau",
    keywords: ["tableau", "bank churn", "visualisasi", "dashboard", "komplain", "nasabah bank"],
    content: `Proyek Visualisasi Churn Nasabah Bank menggunakan Tableau:
- Menganalisis 10.000 nasabah di Jerman, Prancis, dan Spanyol.
- Menemukan bahwa keluhan nasabah (complaints) memiliki korelasi tertinggi terhadap keputusan churn, terutama di Jerman.`,
  },

  {
    id: "proj-jakarta-aqi",
    category: "project",
    projectId: "12",
    title: "Proyek Analisis Kualitas Udara Jakarta (AQI 2019–2020)",
    keywords: ["aqi", "udara", "polusi", "jakarta", "bundaran hi", "pm2.5", "mysql", "tableau"],
    content: `Proyek Analisis Kualitas Udara Jakarta:
- Menganalisis data stasiun Bundaran HI menggunakan Python, MySQL relational database, dan Tableau.
- Mengidentifikasi peningkatan hari berkategori 'BAIK' selama pembatasan mobilitas COVID-19 (PSBB) 2020, dengan PM2.5 sebagai polutan paling dominan.`,
  },

  {
    id: "proj-laundry-satisfaction",
    category: "project",
    projectId: "15",
    title: "Proyek Pengaruh Jam Operasional terhadap Kepuasan Pelanggan Laundry",
    keywords: ["laundry", "regresi", "survei", "jam operasional", "kepuasan", "r-squared", "pearson"],
    content: `Riset Survei & Regresi Kepuasan Pelanggan Laundry:
- Riset kuantitatif pada 300 responden menggunakan regresi linear berganda dan visualisasi Tableau.
- Jam operasional berpengaruh signifikan terhadap kepuasan pelanggan dengan R-squared 64.89% dan korelasi r = 0.732. Peak demand terjadi pada pukul 07.00 pagi.`,
  },

  // ── WEB APPS (AI-POWERED) ──
  {
    id: "proj-sigma-mbg",
    category: "project",
    projectId: "25",
    title: "Proyek SIGMA: GIS Makan Bergizi Gratis (AI School Clustering)",
    keywords: ["sigma", "mbg", "makan bergizi gratis", "sppg", "gis", "clustering", "k-means", "sekolah", "next.js", "nextjs"],
    content: `Proyek SIGMA (Sistem Informasi Geografis Makan Bergizi Gratis):
- Platform web berbasis Next.js dan TypeScript untuk pelaporan dan monitoring program Makan Bergizi Gratis (MBG).
- Dilengkapi fitur peta rekomendasi cerdas yang mengelompokkan (clustering) koordinat geografis sekolah menggunakan algoritma K-Means untuk menentukan lokasi unit pelayanan gizi (SPPG) paling strategis dan efisien dalam distribusi pangan.`,
  },

  {
    id: "proj-genting-stunting",
    category: "project",
    projectId: "24",
    title: "Proyek Genting: Generasi Anti Stunting (AI Health & Food Scanner)",
    keywords: ["genting", "stunting", "kesehatan", "food scanner", "ai assistant", "dokter", "nutrition", "next.js"],
    content: `Proyek Genting (Generasi Anti Stunting):
- Platform health-tech berbasis Next.js, Supabase, dan TypeScript untuk pencegahan stunting balita.
- Dilengkapi AI Food Scanner (Computer Vision) untuk memindai foto makanan dan mengestimasi nilai gizi, serta chatbot asisten konsultasi pencegahan stunting terintegrasi.`,
  },

  {
    id: "proj-siaga-manado",
    category: "project",
    projectId: "8",
    title: "Proyek Siaga Manado: Smart Disaster Management & Spatial AI Map",
    keywords: ["siaga manado", "manado", "bencana", "bpbd", "laravel", "k-means", "peta bencana", "disaster"],
    content: `Proyek Siaga Manado:
- Web aplikasi pelaporan dan peringatan dini bencana Kota Manado berbasis Laravel dan MySQL.
- Memiliki 3 role dashboard (User, Admin, BPBD) dan peta bencana cerdas dengan algoritma K-Means clustering untuk memetakan zona rawan bencana secara spasial bagi tim BPBD.`,
  },

  // ── SKILLS & COMPETENCIES ──
  {
    id: "skills-overview",
    category: "skills",
    title: "Keahlian Teknis & Tech Stack Muhammad Haikal",
    keywords: ["skill", "keahlian", "tools", "teknologi", "bahasa pemrograman", "python", "pytorch", "scikit-learn", "sql", "tableau", "power bi", "express", "react", "next.js", "stack"],
    content: `Keahlian teknis dan tech stack utama Muhammad Haikal:
1. Programming Languages: Python, SQL, JavaScript, TypeScript.
2. Machine Learning, Deep Learning & AI: PyTorch, Scikit-learn, YOLOv26 (Object Detection), ByteTrack (Object Tracking), IndoBERT & BiGRU (NLP), K-Means Clustering, Stacking Ensemble (XGBoost, LightGBM, CatBoost), Optuna (Hyperparameter Tuning), SMOTE, Computer Vision.
3. Data Analytics, ETL & BI: Tableau, Power BI (DAX & Power Query), Pandas, NumPy, Matplotlib, MySQL, MongoDB.
4. AI-Integrated Web & Backend: React JS, Next.js, Node.js, Express.js, TailwindCSS, REST API.`,
  },

  // ── AWARDS & CERTIFICATIONS ──
  {
    id: "achievements-overview",
    category: "achievement",
    title: "Prestasi, Kompetisi & Sertifikasi Muhammad Haikal",
    keywords: ["prestasi", "penghargaan", "sertifikat", "lomba", "kompetisi", "award", "certification", "astra", "ciputra", "dicoding", "microsoft fabric"],
    content: `Prestasi dan Sertifikasi Muhammad Haikal:
- Finalis Hackathon Innovate Code-Up (ASTRA Tech, 2026).
- Finalis Innovation Competition Telkom University (2026).
- Finalis International Business Plan Competition (Universitas Ciputra, 2026).
- Juara 4 (4th place) UI/UX Competition (Telkom University Purwokerto, 2025).
- Peserta Perwakilan Telkom University di Satria Data - Big Data Challenge (BDC) 2026.
- Sertifikasi 'Penerapan Data Science dengan Microsoft Fabric' (Dicoding x Microsoft, 2026).
- Sertifikasi 'Dasar AI' (Dicoding x DBS Foundation, 2026).
- Berbagai sertifikasi pemrograman dari Codepolitan dan Udemy.`,
  },
];
