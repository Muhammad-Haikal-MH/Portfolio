import { portfolioKnowledge } from "../data/knowledgeBase";

/**
 * Injection detection patterns to prevent prompt leakage or off-topic hijacking.
 */
const INJECTION_PATTERNS = [
  /ignore\s+(all\s+)?(previous|prior|above)\s+instructions/i,
  /system\s+prompt/i,
  /you\s+are\s+now\s+(an?|in)\s+/i,
  /act\s+as\s+(an?|a)\s+/i,
  /jailbreak/i,
  /dan\s+mode/i,
  /unrestricted\s+ai/i,
  /pretend\s+you/i,
  /bypass\s+filters?/i,
  /forget\s+(everything|all)/i,
  /drop\s+table/i,
  /<script>/i,
  /eval\(/i,
];

/**
 * Common off-topic triggers (non-portfolio related inquiries).
 */
const OFF_TOPIC_TRIGGERS = [
  /resep\s+(makan|masak|kue|bikin)/i,
  /cuaca\s+(hari|besok|di)/i,
  /presiden\s+(indonesia|amerika|ke-)/i,
  /siapa\s+jodoh/i,
  /ramalan\s+(zodiak|bintang)/i,
  /buatkan\s+(puisi\s+cinta|cerpen|pantun\s+jenaka)/i,
  /harga\s+(emas|bitcoin|crypto|saham\s+tesla)/i,
  /lirik\s+lagu/i,
];

/**
 * Stop words in Indonesian and English to refine token search.
 */
const STOP_WORDS = new Set([
  "yang", "di", "ke", "dari", "pada", "untuk", "dengan", "dan", "atau", "ini",
  "itu", "juga", "adalah", "sebagai", "apa", "siapa", "bagaimana", "dimana",
  "kapan", "mengapa", "kenapa", "bisa", "tolong", "coba", "jelaskan", "sebutkan",
  "the", "is", "at", "which", "on", "in", "a", "an", "and", "or", "what", "who", "how"
]);

/**
 * Tokenize and normalize user query.
 */
function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

/**
 * Calculate relevance score between query tokens and a knowledge chunk.
 */
function calculateScore(tokens, chunk) {
  let score = 0;
  const chunkText = (chunk.title + " " + chunk.content + " " + chunk.keywords.join(" ")).toLowerCase();

  tokens.forEach((token) => {
    // Exact match in keywords (high boost)
    if (chunk.keywords.some((k) => k.toLowerCase() === token)) {
      score += 6;
    } else if (chunk.keywords.some((k) => k.toLowerCase().includes(token))) {
      score += 3;
    }

    // Match in title (medium boost)
    if (chunk.title.toLowerCase().includes(token)) {
      score += 4;
    }

    // Match in content
    if (chunkText.includes(token)) {
      score += 1.5;
    }
  });

  return score;
}

/**
 * Query the Portfolio RAG Engine with guardrails against injection and scope deviation.
 * @param {string} userQuery
 * @returns {{ answer: string, sources: Array<{ title: string, path: string }>, suggestedQuestions: string[] }}
 */
export function queryPortfolioRAG(userQuery) {
  if (!userQuery || userQuery.trim() === "") {
    return {
      answer: "Halo! Saya adalah asisten AI resmi portofolio Muhammad Haikal. Silakan tanyakan apa pun seputar pengalaman magang, proyek Machine Learning / Data Science, keahlian teknis, atau pencapaian Haikal.",
      sources: [],
      suggestedQuestions: [
        "Apa pengalaman magang Haikal di Urbansolv.?",
        "Jelaskan proyek BDC 2026 Solid Waste Classification!",
        "Bagaimana sistem deteksi kerusakan jalan (Road Damage) bekerja?",
        "Apa saja keahlian dan tech stack utama Haikal?"
      ],
    };
  }

  const query = userQuery.trim();

  // 1. Guardrail: Prompt Injection Detection
  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.test(query)) {
      return {
        answer: "⚠️ **Permintaan Ditolak**: Saya adalah sistem AI yang terikat secara ketat hanya pada data portofolio profesional Muhammad Haikal. Perintah yang mencoba memodifikasi instruksi dasar atau meminta perilaku di luar portofolio tidak diizinkan.",
        sources: [],
        suggestedQuestions: [
          "Ceritakan proyek Machine Learning unggulan Haikal",
          "Apa saja sertifikasi yang dimiliki Haikal?",
          "Bagaimana cara menghubungi Haikal?"
        ],
      };
    }
  }

  // 2. Guardrail: Obvious Off-topic queries
  for (const pattern of OFF_TOPIC_TRIGGERS) {
    if (pattern.test(query)) {
      return {
        answer: "Maaf, saya hanya diprogram khusus untuk menjawab pertanyaan seputar **portofolio Muhammad Haikal** (Data Analytics, Data Science, Machine Learning, AI Engineering, magang di Urbansolv., serta proyek dan prestasinya).",
        sources: [],
        suggestedQuestions: [
          "Apa proyek Deep Learning yang pernah dibuat Haikal?",
          "Apa pengalaman riset Haikal di Urbansolv.?",
          "Berapa akurasi model klasifikasi sampah BDC Haikal?"
        ],
      };
    }
  }

  // 3. Retrieval Engine
  const tokens = tokenize(query);

  if (tokens.length === 0) {
    return {
      answer: "Pertanyaan Anda terlalu umum. Silakan tanyakan hal spesifik tentang proyek, pengalaman magang di Urbansolv., riwayat pendidikan, atau keahlian teknis Haikal.",
      sources: [],
      suggestedQuestions: [
        "Apa saja proyek Data Analytics Haikal?",
        "Apa model NLP yang dipakai Haikal untuk deteksi promosi judi terselubung?",
        "Bagaimana peran Haikal sebagai Coordinator Teaching Assistant?"
      ],
    };
  }

  const scoredChunks = portfolioKnowledge
    .map((chunk) => ({
      chunk,
      score: calculateScore(tokens, chunk),
    }))
    .filter((item) => item.score > 1.5)
    .sort((a, b) => b.score - a.score);

  // If no relevant chunk matches our knowledge base
  if (scoredChunks.length === 0) {
    return {
      answer: "Maaf, saya tidak menemukan informasi yang relevan dalam portofolio Muhammad Haikal terkait hal tersebut. Saya berfokus pada data portofolio: pengalaman magang di PT Multimedia Solusi Prima (Urbansolv.), asisten praktikum, proyek Machine Learning / Data Analytics / Web AI, sertifikasi, dan tech stack Haikal.",
      sources: [],
      suggestedQuestions: [
        "Apa saja proyek AI dan Machine Learning Haikal?",
        "Ceritakan tentang proyek BDC Satria Data 2026",
        "Jelaskan proyek deteksi kerusakan jalan dengan YOLOv26 dan ByteTrack",
        "Apa yang dikerjakan Haikal selama magang di Urbansolv.?"
      ],
    };
  }

  // Compile top chunks (up to 3) into an answer
  const topMatches = scoredChunks.slice(0, 3);
  const primary = topMatches[0].chunk;

  let answerText = primary.content;

  // If second chunk also has high relevance, blend additional context
  if (topMatches.length > 1 && topMatches[1].score > 4 && topMatches[1].chunk.id !== primary.id) {
    answerText += `\n\n📌 **Konteks Tambahan Terkait (${topMatches[1].chunk.title}):**\n` + topMatches[1].chunk.content;
  }

  // Prepare source links
  const sources = topMatches.map((m) => {
    let path = "/project";
    if (m.chunk.projectId) {
      path = `/project/${m.chunk.projectId}`;
    } else if (m.chunk.category === "experience" || m.chunk.category === "education" || m.chunk.category === "profile") {
      path = "/about";
    } else if (m.chunk.category === "achievement") {
      path = "/achievement";
    }

    return {
      title: m.chunk.title,
      path,
    };
  });

  return {
    answer: answerText,
    sources,
    suggestedQuestions: [
      "Bagaimana hasil metrik model pada proyek ini?",
      "Apa pengalaman magang Haikal di Urbansolv.?",
      "Apa saja tech stack yang dikuasai Haikal?",
      "Bagaimana cara menghubungi Haikal?"
    ],
  };
}
