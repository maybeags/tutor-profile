export const SECTIONS = [
  { key: 'grammar', label: '문법', eyebrow: 'GRAMMAR' },
  { key: 'vocabulary', label: '어휘', eyebrow: 'VOCABULARY' },
  { key: 'reading', label: '독해', eyebrow: 'READING' },
  { key: 'writing', label: '서술형', eyebrow: 'WRITING' },
]

export const PASSAGES = {
  A: {
    title: '[지문 A]',
    body: `Many people believe that talent is something you are born with. However, research suggests otherwise. In one long-term study, psychologists followed violin students from childhood into their twenties. The best players were not those with the most natural ability. Instead, they were the ones who practiced with intense focus for the longest hours. What separated top performers from average ones was not talent, but (A) — practice aimed at correcting specific weaknesses rather than simply repeating what they already did well.

This does not mean talent is meaningless. It means that talent without effort rarely leads to excellence.`,
  },
  B: {
    title: '[지문 B]',
    body: `Students often think that reading fast is the same as reading well. They rush through a text, proud of finishing quickly. (B), speed without understanding is useless. A good reader slows down at difficult sentences, rereads them, and asks what the writer really means. If you finish a page in one minute but cannot explain a single idea from it, you have not read it at all.`,
  },
}

// type: 'choice' — answer is the 0-based index of the correct choice
// type: 'text'   — answers holds every accepted response (compared after normalization)
export const QUESTIONS = [
  // ---------- 문법 ----------
  {
    id: 1,
    section: 'grammar',
    topic: '관계대명사',
    type: 'choice',
    prompt: '빈칸에 들어갈 말로 알맞은 것은?',
    sentence: 'The novel ___ I borrowed from the library last week was fascinating.',
    choices: ['what', 'which', 'whose', 'where'],
    answer: 1,
    explanation:
      '선행사 the novel이 사물이고, 관계사절 안에서 borrowed의 목적어 역할을 하므로 목적격 관계대명사 which가 알맞습니다. what은 선행사를 포함하므로 앞에 선행사가 있으면 쓸 수 없습니다.',
  },
  {
    id: 2,
    section: 'grammar',
    topic: '현재완료',
    type: 'choice',
    prompt: '빈칸에 들어갈 말로 알맞은 것은?',
    sentence: 'I ___ in Busan for ten years, and I still live here.',
    choices: ['lived', 'have lived', 'was living', 'will live'],
    answer: 1,
    explanation:
      'still live here라는 표현에서 과거부터 지금까지 이어지고 있음을 알 수 있으므로 계속 용법의 현재완료 have lived가 알맞습니다. 과거형 lived를 쓰면 지금은 살지 않는다는 뜻이 됩니다.',
  },
  {
    id: 3,
    section: 'grammar',
    topic: '분사구문',
    type: 'choice',
    prompt: '빈칸에 들어갈 말로 알맞은 것은?',
    sentence: '___ tired after the long trip, she went to bed early.',
    choices: ['Feel', 'Feeling', 'Felt', 'To feel'],
    answer: 1,
    explanation:
      '주어 she가 스스로 피곤함을 느끼는 능동 관계이므로 현재분사 Feeling으로 분사구문을 만듭니다. Because she felt tired ...를 분사구문으로 바꾼 형태입니다.',
  },
  {
    id: 4,
    section: 'grammar',
    topic: '가정법',
    type: 'choice',
    prompt: '빈칸에 들어갈 말로 알맞은 것은?',
    sentence: 'If I ___ more time, I would travel around the world.',
    choices: ['have', 'had', 'will have', 'would have'],
    answer: 1,
    explanation:
      '주절이 would + 동사원형이므로 가정법 과거입니다. 가정법 과거는 If + 주어 + 과거동사 형태를 쓰므로 had가 알맞습니다.',
  },
  {
    id: 5,
    section: 'grammar',
    topic: '동명사·부정사',
    type: 'choice',
    prompt: '빈칸에 들어갈 말로 알맞은 것은?',
    sentence: 'She avoided ___ eye contact during the interview.',
    choices: ['make', 'to make', 'making', 'made'],
    answer: 2,
    explanation:
      'avoid는 동명사만 목적어로 취하는 동사입니다. enjoy, finish, mind, give up 등도 같은 부류이므로 함께 정리해 두어야 합니다.',
  },
  {
    id: 6,
    section: 'grammar',
    topic: '수일치',
    type: 'choice',
    prompt: '어법상 어색한 문장은?',
    choices: [
      'The number of students is increasing.',
      'A number of students are waiting outside.',
      'Each of the boys have his own room.',
      'Both of the answers seem correct.',
    ],
    answer: 2,
    explanation:
      'each of + 복수명사는 단수 취급하므로 have가 아니라 has를 써야 합니다. 참고로 the number of는 단수(~의 수), a number of는 복수(많은 ~)로 취급합니다.',
  },

  // ---------- 어휘 ----------
  {
    id: 7,
    section: 'vocabulary',
    topic: '문맥 추론',
    type: 'choice',
    prompt: '빈칸에 들어갈 말로 알맞은 것은?',
    sentence: 'Despite the heavy rain, the concert was not ___; it went on as planned.',
    choices: ['canceled', 'continued', 'crowded', 'recorded'],
    answer: 0,
    explanation:
      'Despite(~에도 불구하고)와 went on as planned(예정대로 진행되었다)로 보아, 비가 왔지만 취소되지 "않았다"는 흐름입니다. 따라서 canceled가 알맞습니다.',
  },
  {
    id: 8,
    section: 'vocabulary',
    topic: '반의어',
    type: 'choice',
    prompt: '밑줄 친 vague와 반대되는 뜻을 가진 단어는?',
    sentence: 'Her explanation was quite [vague], so nobody understood it.',
    choices: ['unclear', 'confusing', 'specific', 'brief'],
    answer: 2,
    explanation:
      'vague는 "모호한"이라는 뜻이므로 반의어는 "구체적인"을 뜻하는 specific입니다. unclear와 confusing은 오히려 유의어이고, brief는 "간결한"으로 반대 개념이 아닙니다.',
  },
  {
    id: 9,
    section: 'vocabulary',
    topic: '다의어',
    type: 'choice',
    prompt: '밑줄 친 runs와 같은 의미로 쓰인 것은?',
    sentence: 'She [runs] a small bakery near the station.',
    choices: [
      'He runs faster than anyone.',
      'The river runs through the town.',
      'My father runs a company in Seoul.',
      'Tears ran down her cheeks.',
    ],
    answer: 2,
    explanation:
      '여기서 run은 "운영하다"라는 뜻입니다. ①은 달리다, ②는 (강이) 흐르다, ④는 (눈물이) 흘러내리다로 모두 다른 의미입니다.',
  },
  {
    id: 10,
    section: 'vocabulary',
    topic: '구동사',
    type: 'choice',
    prompt: '빈칸에 들어갈 말로 알맞은 것은?',
    sentence: "I couldn't ___ with the fast pace of the class, so I asked for extra help.",
    choices: ['keep up', 'put up', 'give up', 'make up'],
    answer: 0,
    explanation:
      'keep up with는 "~을 따라가다"라는 뜻입니다. put up with(참다), give up(포기하다), make up(구성하다, 지어내다)과 구분해서 외워야 합니다.',
  },
  {
    id: 11,
    section: 'vocabulary',
    topic: '파생어',
    type: 'choice',
    prompt: '빈칸에 들어갈 알맞은 형태는? (기본형: discover)',
    sentence: "The scientist's ___ changed the way we treat the disease.",
    choices: ['discover', 'discovery', 'discovered', 'discovering'],
    answer: 1,
    explanation:
      "소유격 The scientist's 뒤이자 문장의 주어 자리이므로 명사가 와야 합니다. discover(동사)의 명사형은 discovery입니다.",
  },

  // ---------- 독해 ----------
  {
    id: 12,
    section: 'reading',
    topic: '주제 파악',
    type: 'choice',
    passage: 'A',
    prompt: '지문 A의 주제로 가장 알맞은 것은?',
    choices: [
      '타고난 재능이 성공을 결정한다',
      '의도적인 연습이 뛰어난 실력을 만든다',
      '음악 교육은 어릴수록 효과적이다',
      '장기 연구가 심리학에서 중요하다',
    ],
    answer: 1,
    explanation:
      '글은 첫 문장에서 "재능은 타고나는 것"이라는 통념을 제시한 뒤 However로 이를 반박하고, 최고 연주자를 만든 것은 의도적 연습이었다고 말합니다. ①은 글이 반박하는 내용이므로 오답입니다.',
  },
  {
    id: 13,
    section: 'reading',
    topic: '세부 내용',
    type: 'choice',
    passage: 'A',
    prompt: '지문 A의 내용과 일치하지 않는 것은?',
    choices: [
      '연구자들은 바이올린 학생들을 장기간 추적했다',
      '최고의 연주자들은 타고난 재능이 가장 뛰어난 학생들이었다',
      '의도적 연습은 약점을 고치는 데 초점을 맞춘다',
      '글쓴이는 재능이 무의미하다고 주장하지는 않는다',
    ],
    answer: 1,
    explanation:
      '지문에는 The best players were not those with the most natural ability라고 나와 있으므로 ②는 정반대입니다. 부정 표현 not을 놓치면 틀리기 쉬운 문항입니다.',
  },
  {
    id: 14,
    section: 'reading',
    topic: '빈칸 추론',
    type: 'choice',
    passage: 'A',
    prompt: '지문 A의 빈칸 (A)에 들어갈 말로 가장 알맞은 것은?',
    choices: ['natural ability', 'deliberate practice', 'early education', 'physical strength'],
    answer: 1,
    explanation:
      '빈칸 뒤 대시(—) 이하에서 "약점을 고치는 데 목적을 둔 연습"이라고 빈칸을 직접 설명하고 있습니다. 또한 앞에서 not talent라고 했으므로 재능과 대비되는 deliberate practice가 알맞습니다.',
  },
  {
    id: 15,
    section: 'reading',
    topic: '연결어',
    type: 'choice',
    passage: 'B',
    prompt: '지문 B의 빈칸 (B)에 들어갈 말로 가장 알맞은 것은?',
    choices: ['However', 'Therefore', 'For example', 'In addition'],
    answer: 0,
    explanation:
      '앞에서는 학생들이 빨리 읽는 것을 자랑스러워한다고 했고, 뒤에서는 이해 없는 속도는 소용없다고 반박합니다. 역접의 연결어 However가 알맞습니다.',
  },
  {
    id: 16,
    section: 'reading',
    topic: '필자의 주장',
    type: 'choice',
    passage: 'B',
    prompt: '지문 B에서 필자가 주장하는 바로 가장 알맞은 것은?',
    choices: [
      '독서 속도를 높이는 훈련이 필요하다',
      '어려운 글은 피하는 것이 좋다',
      '빠르게 읽는 것보다 이해하며 읽는 것이 중요하다',
      '하루에 정해진 분량을 읽어야 한다',
    ],
    answer: 2,
    explanation:
      '필자는 속도보다 이해가 중요하다고 말하며, 좋은 독자는 어려운 문장에서 속도를 늦추고 다시 읽는다고 설명합니다. 마지막 문장이 주장을 다시 강조합니다.',
  },

  // ---------- 서술형 ----------
  {
    id: 17,
    section: 'writing',
    topic: '배열 영작',
    type: 'text',
    prompt: '주어진 단어를 모두, 한 번씩 사용하여 우리말에 맞게 배열하시오.',
    korean: '그는 내가 만난 사람들 중 가장 친절한 사람이다.',
    wordBank: ['the', 'he', 'kindest', 'is', 'person', 'I', 'have', 'ever', 'met'],
    conditions: ['주어진 단어를 모두 한 번씩만 사용할 것', '대소문자와 문장부호는 채점하지 않음'],
    answers: ['he is the kindest person i have ever met'],
    displayAnswer: 'He is the kindest person I have ever met.',
    explanation:
      '최상급 the kindest 뒤에 목적격 관계대명사(whom/that)가 생략된 절 I have ever met이 이어지는 구조입니다. "지금까지 만나본 중에"라는 경험을 나타내므로 현재완료 have met을 씁니다.',
  },
  {
    id: 18,
    section: 'writing',
    topic: '가정법',
    type: 'text',
    prompt: '괄호 안의 단어를 어법에 맞게 한 단어로 바꿔 쓰시오.',
    sentence: 'If I ___ (be) you, I would apologize first.',
    conditions: ['가정법에 맞는 형태로 쓸 것', '한 단어로만 쓸 것'],
    answers: ['were'],
    displayAnswer: 'were',
    explanation:
      '가정법 과거에서 be동사는 주어의 인칭·수와 관계없이 were를 씁니다. If I were you(내가 너라면)는 조언할 때 쓰는 대표적인 표현입니다.',
  },
  {
    id: 19,
    section: 'writing',
    topic: '문장 전환',
    type: 'text',
    prompt: '다음 문장을 같은 뜻이 되도록 조건에 맞게 바꿔 쓰시오.',
    sentence: 'Because it rained heavily, we canceled the picnic.',
    conditions: ['Because of로 시작할 것', 'the heavy rain을 사용할 것', '총 9단어로 쓸 것'],
    answers: ['because of the heavy rain we canceled the picnic'],
    displayAnswer: 'Because of the heavy rain, we canceled the picnic.',
    explanation:
      '접속사 Because 뒤에는 절(주어+동사)이, 전치사구 Because of 뒤에는 명사구가 옵니다. it rained heavily라는 절을 the heavy rain이라는 명사구로 바꾸는 것이 핵심입니다.',
  },
  {
    id: 20,
    section: 'writing',
    topic: 'too ~ to 구문',
    type: 'text',
    prompt: '우리말과 같은 뜻이 되도록 빈칸에 알맞은 3단어를 쓰시오.',
    korean: '그 책은 읽기에 너무 어려워서 나는 포기했다.',
    sentence: 'The book was ___ ___ ___ read, so I gave up.',
    conditions: ['too를 반드시 사용할 것', '정확히 3단어로 쓸 것'],
    answers: ['too difficult to', 'too hard to'],
    displayAnswer: 'too difficult to',
    explanation:
      'too + 형용사 + to부정사는 "너무 ~해서 …할 수 없다"라는 뜻입니다. so difficult that I could not read it으로도 바꿔 쓸 수 있습니다.',
  },
]

export const TOTAL_QUESTIONS = QUESTIONS.length
