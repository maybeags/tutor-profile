export const middle2 = {
  id: 'middle2',
  label: '중2',
  hanja: '中2',
  title: '중2 영어 진단 테스트',
  target: '중학교 2학년',
  summary: '중3 과정으로 넘어가기 전, 기초가 제대로 잡혔는지 확인합니다.',

  sectionDetail: {
    grammar: '시제 · 조동사 · to부정사 · 동명사 · 비교급',
    vocabulary: '문맥 추론 · 반의어 · 유의어 · 구동사 · 파생어',
    reading: '요지 · 세부 내용 · 연결어 · 실용문 · 글의 목적',
    writing: '배열 영작 · 어형 변화 · 수동태 전환 · 조건 영작',
  },

  passages: {
    A: {
      title: '[지문 A]',
      body: `Honeybees are small, but they do a very important job. When they move from flower to flower to collect food, pollen sticks to their bodies. This pollen travels with them and helps plants make seeds and fruit. Without bees, many of the fruits and vegetables we eat every day would disappear. (A), protecting bees is really about protecting our own food.`,
    },
    B: {
      title: '[지문 B]',
      body: `School Book Club — New Members Welcome!

When: Every Friday, 3:30 p.m. – 4:30 p.m.
Where: Library, Room 201
What we do: We read one book each month and talk about it together. In December, we will also make our own short stories.
How to join: Write your name on the sign-up sheet next to the library door by November 25.`,
    },
  },

  questions: [
    // ---------- 문법 ----------
    {
      id: 1,
      section: 'grammar',
      topic: '과거시제',
      type: 'choice',
      prompt: '빈칸에 들어갈 말로 알맞은 것은?',
      sentence: 'Last summer, we ___ to Jeju Island and stayed there for a week.',
      choices: ['go', 'goes', 'went', 'going'],
      answer: 2,
      explanation:
        'Last summer는 과거를 나타내는 표현이므로 과거시제를 씁니다. go의 과거형은 불규칙 변화형인 went입니다. 뒤에 이어지는 stayed도 과거형인 것을 단서로 삼을 수 있습니다.',
    },
    {
      id: 2,
      section: 'grammar',
      topic: '현재진행형',
      type: 'choice',
      prompt: '빈칸에 들어갈 말로 알맞은 것은?',
      sentence: 'Look! The children ___ soccer in the playground right now.',
      choices: ['play', 'plays', 'are playing', 'played'],
      answer: 2,
      explanation:
        'Look!과 right now는 지금 벌어지고 있는 일을 가리키므로 현재진행형 be동사 + -ing를 씁니다. 주어 The children이 복수이므로 are playing이 알맞습니다.',
    },
    {
      id: 3,
      section: 'grammar',
      topic: '조동사',
      type: 'choice',
      prompt: '빈칸에 들어갈 말로 알맞은 것은?',
      sentence: 'You look really sick. You ___ see a doctor today.',
      choices: ['should', 'may', 'will', 'can'],
      answer: 0,
      explanation:
        '아파 보이는 사람에게 병원에 가보라고 권하는 상황이므로 충고를 나타내는 should가 알맞습니다. may는 허가·추측, can은 능력·허가를 나타내므로 문맥에 맞지 않습니다.',
    },
    {
      id: 4,
      section: 'grammar',
      topic: 'to부정사',
      type: 'choice',
      prompt: '빈칸에 들어갈 말로 알맞은 것은?',
      sentence: 'She went to the library ___ some books for her report.',
      choices: ['borrow', 'to borrow', 'borrowing', 'borrowed'],
      answer: 1,
      explanation:
        '"책을 빌리기 위해" 도서관에 갔다는 뜻이므로 목적을 나타내는 to부정사의 부사적 용법을 씁니다. in order to borrow로 바꿔 쓸 수도 있습니다.',
    },
    {
      id: 5,
      section: 'grammar',
      topic: '동명사',
      type: 'choice',
      prompt: '빈칸에 들어갈 말로 알맞은 것은?',
      sentence: 'Thank you for ___ me with my homework.',
      choices: ['help', 'to help', 'helping', 'helped'],
      answer: 2,
      explanation:
        'for는 전치사이고, 전치사 뒤에는 동사원형이나 to부정사가 아니라 동명사(-ing)가 옵니다. Thank you for -ing는 통째로 익혀 두면 좋은 표현입니다.',
    },
    {
      id: 6,
      section: 'grammar',
      topic: '비교급',
      type: 'choice',
      prompt: '어법상 어색한 문장은?',
      choices: [
        'This box is heavier than that one.',
        'She is the tallest girl in her class.',
        'Math is more difficult than science.',
        'Today is more hot than yesterday.',
      ],
      answer: 3,
      explanation:
        'hot처럼 짧은 형용사는 more를 쓰지 않고 -er을 붙입니다. 또한 「단모음 + 단자음」으로 끝나므로 자음을 한 번 더 쓴 hotter가 올바른 형태입니다. difficult처럼 긴 형용사에만 more를 씁니다.',
    },

    // ---------- 어휘 ----------
    {
      id: 7,
      section: 'vocabulary',
      topic: '문맥 추론',
      type: 'choice',
      prompt: '빈칸에 들어갈 말로 알맞은 것은?',
      sentence: 'I was very ___ when I heard that my favorite singer was coming to my city.',
      choices: ['bored', 'excited', 'tired', 'worried'],
      answer: 1,
      explanation:
        '좋아하는 가수가 우리 도시에 온다는 것은 반가운 소식이므로 신이 난 감정을 나타내는 excited가 알맞습니다. 나머지는 모두 부정적이거나 상황에 맞지 않는 감정입니다.',
    },
    {
      id: 8,
      section: 'vocabulary',
      topic: '반의어',
      type: 'choice',
      prompt: '밑줄 친 easier와 반대되는 뜻을 가진 단어는?',
      sentence: 'The test was much [easier] than I expected.',
      choices: ['simple', 'difficult', 'boring', 'short'],
      answer: 1,
      explanation:
        'easy는 "쉬운"이라는 뜻이므로 반의어는 "어려운"을 뜻하는 difficult입니다. simple은 오히려 유의어이고, boring(지루한)과 short(짧은)은 난이도와 관계없는 단어입니다.',
    },
    {
      id: 9,
      section: 'vocabulary',
      topic: '유의어',
      type: 'choice',
      prompt: '밑줄 친 fix와 바꿔 쓸 수 있는 말은?',
      sentence: 'My dad will [fix] my bike this weekend.',
      choices: ['break', 'repair', 'buy', 'ride'],
      answer: 1,
      explanation:
        '여기서 fix는 "고치다, 수리하다"라는 뜻이므로 repair로 바꿔 쓸 수 있습니다. break(부수다)는 오히려 반대되는 뜻입니다.',
    },
    {
      id: 10,
      section: 'vocabulary',
      topic: '구동사',
      type: 'choice',
      prompt: '빈칸에 들어갈 말로 알맞은 것은?',
      sentence: 'I need to ___ my little brother while my parents are out.',
      choices: ['look for', 'look at', 'take care of', 'get up'],
      answer: 2,
      explanation:
        'take care of는 "~을 돌보다"라는 뜻입니다. look for(~을 찾다), look at(~을 보다), get up(일어나다)과 구분해서 외워야 합니다.',
    },
    {
      id: 11,
      section: 'vocabulary',
      topic: '파생어',
      type: 'choice',
      prompt: '빈칸에 들어갈 알맞은 형태는? (기본형: careful)',
      sentence: 'He speaks English very ___ .',
      choices: ['careful', 'carefully', 'care', 'caring'],
      answer: 1,
      explanation:
        '동사 speaks가 어떻게 이루어지는지를 꾸며 주는 자리이므로 형용사가 아니라 부사가 와야 합니다. 형용사 careful에 -ly를 붙여 carefully로 만듭니다.',
    },

    // ---------- 독해 ----------
    {
      id: 12,
      section: 'reading',
      topic: '요지',
      type: 'choice',
      passage: 'A',
      prompt: '지문 A의 요지로 가장 알맞은 것은?',
      choices: [
        '꿀벌은 몸집이 작다',
        '꿀벌을 보호하는 것은 우리의 먹거리를 지키는 일이다',
        '과일과 채소는 영양이 풍부하다',
        '꽃은 꿀벌을 끌어들인다',
      ],
      answer: 1,
      explanation:
        '글은 꿀벌이 하는 일을 설명한 뒤, 마지막 문장에서 "꿀벌을 지키는 것은 결국 우리 먹거리를 지키는 일"이라고 결론을 내립니다. ①은 첫 문장의 일부만 본 학생이 고르기 쉬운 함정입니다.',
    },
    {
      id: 13,
      section: 'reading',
      topic: '세부 내용',
      type: 'choice',
      passage: 'A',
      prompt: '지문 A의 내용과 일치하지 않는 것은?',
      choices: [
        '꿀벌은 꽃 사이를 옮겨 다니며 먹이를 모은다',
        '꽃가루는 꿀벌의 몸에 붙어 함께 옮겨진다',
        '꿀벌은 식물이 씨앗을 만드는 것을 방해한다',
        '꿀벌이 없다면 많은 과일과 채소가 사라질 것이다',
      ],
      answer: 2,
      explanation:
        '지문에는 helps plants make seeds and fruit이라고 나와 있으므로, 꿀벌은 씨앗을 만드는 것을 방해하는 것이 아니라 오히려 돕습니다. pollen 같은 어려운 단어가 있어도 문장 구조로 뜻을 잡아내야 합니다.',
    },
    {
      id: 14,
      section: 'reading',
      topic: '연결어',
      type: 'choice',
      passage: 'A',
      prompt: '지문 A의 빈칸 (A)에 들어갈 말로 가장 알맞은 것은?',
      choices: ['However', 'So', 'For example', 'Also'],
      answer: 1,
      explanation:
        '앞에서 꿀벌이 없으면 먹거리가 사라진다고 했고, 빈칸 뒤에서 그래서 꿀벌 보호가 곧 먹거리 보호라고 결론을 내립니다. 앞 내용의 결과를 이끄는 So가 알맞습니다.',
    },
    {
      id: 15,
      section: 'reading',
      topic: '실용문',
      type: 'choice',
      passage: 'B',
      prompt: '지문 B의 내용과 일치하지 않는 것은?',
      choices: [
        '모임은 매주 금요일에 열린다',
        '한 달에 한 권씩 책을 읽는다',
        '가입하려면 이메일을 보내야 한다',
        '12월에는 짧은 이야기를 직접 만든다',
      ],
      answer: 2,
      explanation:
        'How to join 항목을 보면 도서관 문 옆에 있는 신청서(sign-up sheet)에 이름을 적으라고 되어 있습니다. 이메일에 대한 언급은 없습니다.',
    },
    {
      id: 16,
      section: 'reading',
      topic: '글의 목적',
      type: 'choice',
      passage: 'B',
      prompt: '지문 B의 목적으로 가장 알맞은 것은?',
      choices: [
        '도서관 이용 규칙을 안내하려고',
        '독서 동아리 신입 회원을 모집하려고',
        '새로 나온 책을 소개하려고',
        '글쓰기 대회 결과를 알리려고',
      ],
      answer: 1,
      explanation:
        '제목의 New Members Welcome!과 How to join 항목에서 신입 회원을 모집하는 안내문임을 알 수 있습니다. 활동 내용은 모집을 위한 설명일 뿐 글의 목적은 아닙니다.',
    },

    // ---------- 서술형 ----------
    {
      id: 17,
      section: 'writing',
      topic: '배열 영작',
      type: 'text',
      prompt: '주어진 단어를 모두, 한 번씩 사용하여 우리말에 맞게 배열하시오.',
      korean: '그녀는 피아노 치는 것을 좋아한다.',
      wordBank: ['playing', 'she', 'the', 'likes', 'piano'],
      conditions: ['주어진 단어를 모두 한 번씩만 사용할 것', '대소문자와 문장부호는 채점하지 않음'],
      answers: ['she likes playing the piano'],
      displayAnswer: 'She likes playing the piano.',
      explanation:
        'like는 동명사와 to부정사를 모두 목적어로 쓸 수 있지만, 주어진 단어에 playing이 있으므로 동명사를 씁니다. 또한 악기 이름 앞에는 the를 붙여 play the piano로 씁니다.',
    },
    {
      id: 18,
      section: 'writing',
      topic: '비교급',
      type: 'text',
      prompt: '괄호 안의 단어를 알맞은 형태로 한 단어로 바꿔 쓰시오.',
      sentence: 'My sister is two years ___ (young) than me.',
      conditions: ['비교급 형태로 쓸 것', '한 단어로만 쓸 것'],
      answers: ['younger'],
      displayAnswer: 'younger',
      explanation:
        'than이 있으므로 비교급을 씁니다. young은 짧은 형용사이므로 more를 쓰지 않고 -er을 붙여 younger로 만듭니다.',
    },
    {
      id: 19,
      section: 'writing',
      topic: '수동태 전환',
      type: 'text',
      prompt: '다음 문장을 같은 뜻이 되도록 조건에 맞게 바꿔 쓰시오.',
      sentence: 'Many people love this song.',
      conditions: ['This song으로 시작할 것', '수동태로 쓸 것', '총 7단어로 쓸 것'],
      answers: ['this song is loved by many people'],
      displayAnswer: 'This song is loved by many people.',
      explanation:
        '능동태의 목적어(this song)를 주어로 올리고, 동사를 be동사 + 과거분사로 바꾼 뒤, 원래 주어를 by 뒤에 둡니다. 주어가 단수이고 현재시제이므로 is loved가 됩니다.',
    },
    {
      id: 20,
      section: 'writing',
      topic: '접속사',
      type: 'text',
      prompt: '우리말과 같은 뜻이 되도록 빈칸에 알맞은 3단어를 쓰시오.',
      korean: '나는 배가 아파서 학교에 가지 않았다.',
      sentence: "I didn't go to school ___ ___ ___ a stomachache.",
      conditions: ['because를 반드시 사용할 것', '정확히 3단어로 쓸 것'],
      answers: ['because i had'],
      displayAnswer: 'because I had',
      explanation:
        'because는 접속사이므로 뒤에 「주어 + 동사」가 와야 합니다. 앞 문장이 과거시제(didn\'t go)이므로 시제를 맞춰 had를 씁니다. 전치사 because of를 쓰면 뒤에 명사구가 와야 하므로 이 문장에는 맞지 않습니다.',
    },
  ],

  feedback: {
    section: {
      grammar: {
        strong: '중2 과정의 문법 개념이 안정적으로 잡혀 있습니다.',
        fair: '규칙은 알고 있지만, 문장 안에서 형태를 결정하는 단계에서 흔들립니다.',
        weak: '중3 과정으로 넘어가기 전에 시제와 동사 형태부터 다시 정리해야 합니다.',
      },
      vocabulary: {
        strong: '기본 어휘를 문맥 속에서 판단할 줄 압니다.',
        fair: '단어의 뜻은 알지만, 비슷한 말과 반대말을 구분하는 데서 실점합니다.',
        weak: '기본 어휘량이 부족해 문장 전체의 뜻을 잡는 데 어려움을 겪고 있습니다.',
      },
      reading: {
        strong: '짧은 글의 요지와 세부 정보를 정확히 읽어냅니다.',
        fair: '대체로 이해하지만 세부 정보를 대조하는 단계에서 놓치는 부분이 있습니다.',
        weak: '단어 단위로만 읽고 있어 글이 무엇을 말하는지까지 도달하지 못합니다.',
      },
      writing: {
        strong: '배운 문법을 직접 문장으로 쓸 수 있는 단계입니다.',
        fair: '문장 구조는 떠올리지만 어형과 어순에서 감점 요소가 남아 있습니다.',
        weak: '눈으로 아는 것과 직접 쓰는 것의 격차가 큽니다. 학교 서술형에서 실점이 예상됩니다.',
      },
    },
    overall: (rate) => {
      if (rate >= 0.85)
        return '중2 과정을 충실히 소화했습니다. 중3 과정인 관계대명사와 현재완료를 미리 시작해도 무리가 없는 수준입니다.'
      if (rate >= 0.7)
        return '기초는 잘 잡혀 있습니다. 아래에서 지적된 취약 영역만 보완하면 중3 내신을 안정적으로 준비할 수 있습니다.'
      if (rate >= 0.5)
        return '아는 것과 모르는 것이 뚜렷하게 갈립니다. 전 범위를 다시 훑기보다 취약 영역부터 순서대로 채우는 방식이 효율적입니다.'
      return '중2 과정에서 비어 있는 개념이 여러 곳에 있습니다. 동사의 형태(시제·조동사·to부정사)부터 차근차근 다시 쌓는 것을 권합니다.'
    },
  },
}
