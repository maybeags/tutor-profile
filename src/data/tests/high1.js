export const high1 = {
  id: 'high1',
  label: '고1',
  hanja: '高1',
  title: '고1 영어 진단 테스트',
  target: '고등학교 1학년',
  summary: '고2 과정과 수능형 문항으로 넘어갈 준비가 되었는지 확인합니다.',

  sectionDetail: {
    grammar: '관계부사 · 가정법 과거완료 · 도치 · 병렬구조 · 가목적어 · 분사구문',
    vocabulary: '문맥 추론 · 반의어 · 다의어 · 구동사 · 파생어',
    reading: '요지 · 빈칸 추론 · 함축 의미 · 글의 순서',
    writing: '배열 영작 · 어법 수정 · 분사구문 전환 · 조건 영작',
  },

  passages: {
    A: {
      title: '[지문 A]',
      body: `When we face a difficult decision, we often believe that gathering more information will lead to a better choice. Research, however, suggests a limit to this. In one study, participants who were given a small set of facts about used cars made more accurate judgments than those who received a long list of details. The extra information did not clarify the choice; it (A). Our working memory can hold only a handful of items at once, so beyond a certain point, each new fact pushes out another. The result is [a decision that feels more informed but is actually less grounded].`,
    },
    B: {
      title: '[지문 B]',
      body: `When a new technology appears, people often predict that it will replace the old one entirely.

(A) Radio, however, did not disappear. It moved into cars and kitchens, places where listening worked better than watching.
(B) Television was expected to do exactly this to radio. Critics in the 1950s announced that broadcasting by sound alone was finished.
(C) What usually happens, then, is not replacement but relocation. Each medium settles into the spaces the newer one cannot reach.`,
    },
  },

  questions: [
    // ---------- 문법 ----------
    {
      id: 1,
      section: 'grammar',
      topic: '관계부사',
      type: 'choice',
      prompt: '빈칸에 들어갈 말로 알맞은 것은?',
      sentence: 'This is the house ___ my grandparents lived for forty years.',
      choices: ['which', 'that', 'where', 'what'],
      answer: 2,
      explanation:
        '선행사 the house가 장소이고, 뒤에 「주어 + 동사」가 빠짐없이 갖춰진 완전한 절이 이어지므로 관계부사 where를 씁니다. which나 that을 쓰려면 뒤 절에 빠진 자리(목적어 등)가 있어야 합니다. in which로도 바꿔 쓸 수 있습니다.',
    },
    {
      id: 2,
      section: 'grammar',
      topic: '가정법 과거완료',
      type: 'choice',
      prompt: '빈칸에 들어갈 말로 알맞은 것은?',
      sentence: 'If she ___ the train, she would have arrived on time.',
      choices: ['caught', 'had caught', 'has caught', 'would catch'],
      answer: 1,
      explanation:
        '주절이 would have + 과거분사이므로 과거 사실의 반대를 가정하는 가정법 과거완료입니다. if절에는 had + 과거분사를 써야 하므로 had caught가 알맞습니다. If + 과거동사를 쓰는 가정법 과거와 혼동하지 않아야 합니다.',
    },
    {
      id: 3,
      section: 'grammar',
      topic: '도치',
      type: 'choice',
      prompt: '빈칸에 들어갈 말로 알맞은 것은?',
      sentence: 'Not only ___ the exam, but he also won a scholarship.',
      choices: ['he passed', 'passed he', 'did he pass', 'he did pass'],
      answer: 2,
      explanation:
        'Not only처럼 부정의 뜻을 가진 어구가 문장 맨 앞에 오면 주어와 동사가 도치됩니다. 일반동사 문장에서는 조동사 do를 빌려와 「did + 주어 + 동사원형」 순서로 씁니다.',
    },
    {
      id: 4,
      section: 'grammar',
      topic: '병렬구조',
      type: 'choice',
      prompt: '어법상 어색한 문장은?',
      choices: [
        'She enjoys reading, writing, and painting.',
        'He is honest, diligent, and reliable.',
        'The teacher told us to sit down and be quiet.',
        'My goal is to study hard and getting good grades.',
      ],
      answer: 3,
      explanation:
        'and로 연결된 요소는 같은 형태여야 합니다. ④는 to study와 연결되므로 getting이 아니라 (to) get을 써야 합니다. 참고로 ③은 to sit down과 (to) be quiet이 올바르게 병렬을 이룬 문장입니다.',
    },
    {
      id: 5,
      section: 'grammar',
      topic: '가목적어',
      type: 'choice',
      prompt: '빈칸에 들어갈 말로 알맞은 것은?',
      sentence: 'I found ___ difficult to finish the project in one week.',
      choices: ['that', 'it', 'this', 'what'],
      answer: 1,
      explanation:
        'find + 목적어 + 목적격보어 구조에서 진짜 목적어가 to부정사구(to finish ...)로 길 때는 그 자리에 가목적어 it을 두고 진목적어를 뒤로 보냅니다. that이나 this는 가목적어로 쓸 수 없습니다.',
    },
    {
      id: 6,
      section: 'grammar',
      topic: '분사구문',
      type: 'choice',
      prompt: '빈칸에 들어갈 말로 알맞은 것은?',
      sentence: '___ in the 18th century, the castle still attracts many tourists.',
      choices: ['Building', 'Built', 'To build', 'Having built'],
      answer: 1,
      explanation:
        '성이 스스로 짓는 것이 아니라 "지어진" 것이므로 수동 관계입니다. Being built에서 Being이 생략된 형태인 과거분사 Built로 시작합니다. 주어와 분사의 관계가 능동이면 현재분사, 수동이면 과거분사를 씁니다.',
    },

    // ---------- 어휘 ----------
    {
      id: 7,
      section: 'vocabulary',
      topic: '문맥 추론',
      type: 'choice',
      prompt: '빈칸에 들어갈 말로 알맞은 것은?',
      sentence:
        'The new evidence ___ the theory that had been accepted for decades, forcing scientists to rethink it.',
      choices: ['supported', 'undermined', 'ignored', 'repeated'],
      answer: 1,
      explanation:
        '과학자들이 이론을 다시 생각하게 만들었다(forcing scientists to rethink)는 것은 기존 이론의 근거를 흔들었다는 뜻이므로 undermine(약화시키다)이 알맞습니다. supported(뒷받침했다)는 정반대입니다.',
    },
    {
      id: 8,
      section: 'vocabulary',
      topic: '반의어',
      type: 'choice',
      prompt: '밑줄 친 superficial과 반대되는 뜻을 가진 단어는?',
      sentence: 'Her argument was rather [superficial], lacking any real depth.',
      choices: ['shallow', 'profound', 'brief', 'complex'],
      answer: 1,
      explanation:
        'superficial은 "피상적인"이라는 뜻이므로 반의어는 "깊이 있는"을 뜻하는 profound입니다. shallow는 오히려 유의어이고, brief(간결한)와 complex(복잡한)는 깊이와는 다른 축의 단어입니다.',
    },
    {
      id: 9,
      section: 'vocabulary',
      topic: '다의어',
      type: 'choice',
      prompt: '밑줄 친 address와 같은 의미로 쓰인 것은?',
      sentence: 'We must [address] the problem of climate change immediately.',
      choices: [
        'Please write your address here.',
        'The principal will address the students tomorrow.',
        'The report fails to address the main issue.',
        'She addressed the letter to her teacher.',
      ],
      answer: 2,
      explanation:
        '여기서 address는 "(문제를) 다루다, 해결하려 하다"라는 뜻입니다. ①은 주소, ②는 연설하다, ④는 (편지에) 수신인을 적다로 모두 다른 의미입니다. 모의고사 지문에서 자주 쓰이는 용법입니다.',
    },
    {
      id: 10,
      section: 'vocabulary',
      topic: '구동사',
      type: 'choice',
      prompt: '빈칸에 들어갈 말로 알맞은 것은?',
      sentence: 'The company decided to ___ the new policy despite strong opposition.',
      choices: ['carry out', 'carry on', 'put off', 'give in'],
      answer: 0,
      explanation:
        'carry out은 "실행하다, 수행하다"라는 뜻으로 policy, plan, research 등과 자주 결합합니다. carry on(계속하다), put off(미루다), give in(굴복하다)과 구분해야 합니다.',
    },
    {
      id: 11,
      section: 'vocabulary',
      topic: '파생어',
      type: 'choice',
      prompt: '빈칸에 들어갈 알맞은 형태는? (기본형: rely)',
      sentence: 'His ___ on others for every decision slowed down the project.',
      choices: ['rely', 'reliable', 'reliance', 'reliably'],
      answer: 2,
      explanation:
        '소유격 His 뒤이자 문장의 주어 자리이므로 명사가 와야 합니다. 동사 rely의 명사형은 reliance이며, reliable(형용사)·reliably(부사)와 구분해야 합니다.',
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
        '정보를 많이 모을수록 더 나은 결정을 내릴 수 있다',
        '일정 수준을 넘어선 정보는 오히려 판단을 흐린다',
        '중고차를 살 때는 전문가의 조언이 반드시 필요하다',
        '작업 기억은 훈련을 통해 얼마든지 확장될 수 있다',
      ],
      answer: 1,
      explanation:
        '글은 "정보가 많을수록 낫다"는 통념을 제시한 뒤 however로 반박하고, 작업 기억의 한계 때문에 일정 지점을 넘으면 오히려 판단이 나빠진다고 설명합니다. ①은 글이 반박하는 통념입니다.',
    },
    {
      id: 13,
      section: 'reading',
      topic: '빈칸 추론',
      type: 'choice',
      passage: 'A',
      prompt: '지문 A의 빈칸 (A)에 들어갈 말로 가장 알맞은 것은?',
      choices: [
        'sharpened their focus',
        'overwhelmed their judgment',
        'confirmed their beliefs',
        'reduced their options',
      ],
      answer: 1,
      explanation:
        '빈칸 앞에서 추가 정보가 선택을 명확하게 해주지 "않았다"고 했고, 바로 뒤 문장에서 작업 기억의 한계로 새 정보가 다른 정보를 밀어낸다고 설명합니다. 따라서 판단을 압도했다(overwhelmed)는 흐름이 맞습니다.',
    },
    {
      id: 14,
      section: 'reading',
      topic: '함축 의미',
      type: 'choice',
      passage: 'A',
      prompt:
        '지문 A의 밑줄 친 a decision that feels more informed but is actually less grounded가 의미하는 바로 가장 알맞은 것은?',
      choices: [
        '더 많은 정보 덕분에 결정이 한층 정확해졌다',
        '스스로는 잘 알고 결정했다고 느끼지만 실제 근거는 빈약하다',
        '결정을 내리는 데 지나치게 오랜 시간이 걸린다',
        '혼자 판단하기보다 다른 사람의 의견을 따르는 편이 낫다',
      ],
      answer: 1,
      explanation:
        'feels more informed(더 잘 안다고 느낀다)와 less grounded(근거는 더 빈약하다)가 대조를 이룹니다. 주관적인 확신과 실제 판단의 질이 어긋난다는 뜻입니다.',
    },
    {
      id: 15,
      section: 'reading',
      topic: '글의 순서',
      type: 'choice',
      passage: 'B',
      prompt: '지문 B의 주어진 글 다음에 이어질 순서로 가장 알맞은 것은?',
      choices: ['(A) - (C) - (B)', '(B) - (A) - (C)', '(B) - (C) - (A)', '(C) - (A) - (B)'],
      answer: 1,
      explanation:
        '주어진 글의 "대체할 것이라는 예측"을 (B)가 do exactly this로 받아 텔레비전·라디오 사례를 꺼냅니다. 이어 (A)가 however로 라디오가 사라지지 않았다고 뒤집고, (C)가 then으로 일반적인 결론을 내립니다.',
    },
    {
      id: 16,
      section: 'reading',
      topic: '요지',
      type: 'choice',
      passage: 'B',
      prompt: '지문 B의 요지로 가장 알맞은 것은?',
      choices: [
        '새로운 기술은 결국 기존 기술을 완전히 대체한다',
        '라디오는 텔레비전의 등장으로 결국 사라졌다',
        '새 매체가 등장해도 기존 매체는 사라지지 않고 자리를 옮긴다',
        '1950년대 비평가들의 예측은 대체로 정확한 편이었다',
      ],
      answer: 2,
      explanation:
        '마지막 단락의 not replacement but relocation(대체가 아니라 자리 이동)이 요지입니다. 각 매체는 새 매체가 닿지 못하는 영역에 자리를 잡는다고 설명합니다.',
    },

    // ---------- 서술형 ----------
    {
      id: 17,
      section: 'writing',
      topic: '배열 영작',
      type: 'text',
      prompt: '주어진 단어를 모두, 한 번씩 사용하여 우리말에 맞게 배열하시오.',
      korean: '우리가 더 많이 연습할수록, 우리는 더 나아진다.',
      wordBank: ['the', 'we', 'more', 'practice', 'the', 'better', 'we', 'become'],
      conditions: ['주어진 단어를 모두 한 번씩만 사용할 것', '대소문자와 문장부호는 채점하지 않음'],
      answers: ['the more we practice the better we become'],
      displayAnswer: 'The more we practice, the better we become.',
      explanation:
        '「the + 비교급 ~, the + 비교급 …」은 "~하면 할수록 더 …하다"라는 뜻입니다. 각 절에서 비교급이 맨 앞으로 나가고 그 뒤에 「주어 + 동사」가 이어지는 어순에 주의해야 합니다.',
    },
    {
      id: 18,
      section: 'writing',
      topic: '어법 수정',
      type: 'text',
      prompt: '밑줄 친 was collecting을 어법에 맞게 고쳐, 바뀌는 한 단어만 쓰시오.',
      sentence: 'The data [was collecting] over ten years by a team of researchers.',
      conditions: ['바뀌는 한 단어만 쓸 것', 'by가 있다는 점에 유의할 것'],
      answers: ['collected'],
      displayAnswer: 'collected (was collected)',
      explanation:
        '자료가 스스로 수집하는 것이 아니라 연구진에 의해 "수집된" 것이므로 수동태 was collected가 되어야 합니다. 뒤에 행위자를 나타내는 by a team of researchers가 있는 것이 결정적 단서입니다.',
    },
    {
      id: 19,
      section: 'writing',
      topic: '분사구문 전환',
      type: 'text',
      prompt: '다음 문장을 분사구문을 사용한 문장으로 바꿔 쓰시오.',
      sentence: 'Because he was tired from the long flight, he went straight to bed.',
      conditions: ['Tired로 시작할 것', '콤마 뒤는 원문과 동일하게 쓸 것', '총 10단어로 쓸 것'],
      answers: ['tired from the long flight he went straight to bed'],
      displayAnswer: 'Tired from the long flight, he went straight to bed.',
      explanation:
        '부사절의 접속사와 주어를 지우고 분사구문으로 만듭니다. 주어가 피곤함을 "느끼게 된" 수동 관계이므로 Being tired가 되는데, 분사구문에서 Being은 흔히 생략되어 Tired로 시작합니다.',
    },
    {
      id: 20,
      section: 'writing',
      topic: '가정법 과거완료',
      type: 'text',
      prompt: '우리말과 같은 뜻이 되도록 빈칸에 알맞은 4단어를 쓰시오.',
      korean: '그가 조금 더 일찍 떠났더라면, 그는 그 기차를 놓치지 않았을 것이다.',
      sentence: 'If he had left a little earlier, he ___ ___ ___ ___ the train.',
      conditions: ['miss를 알맞은 형태로 사용할 것', '축약형을 쓰지 말 것', '정확히 4단어로 쓸 것'],
      answers: ['would not have missed'],
      displayAnswer: 'would not have missed',
      explanation:
        'if절이 had + 과거분사이므로 가정법 과거완료이고, 주절은 「would + have + 과거분사」로 씁니다. 부정이므로 would not have missed가 되며, miss의 과거분사는 missed입니다.',
    },
  ],

  feedback: {
    section: {
      grammar: {
        strong: '수능 어법에서 요구하는 문장 구조 판단이 안정적으로 이루어집니다.',
        fair: '개념은 알고 있지만, 문장 구조가 복잡해지면 판단이 흔들립니다.',
        weak: '고1 어법 문항의 전제인 구조 분석이 아직 잡히지 않았습니다.',
      },
      vocabulary: {
        strong: '모의고사 수준의 추상 어휘를 문맥 속에서 정확히 판단합니다.',
        fair: '기본 어휘는 갖췄지만 학술적·추상적 어휘에서 실점합니다.',
        weak: '모의고사 지문을 감당하기에 어휘량이 부족해 해석 자체가 막힙니다.',
      },
      reading: {
        strong: '빈칸·순서 같은 추론 유형까지 논리로 풀어냅니다.',
        fair: '대의는 잡지만 빈칸 추론과 순서 배열에서 근거를 놓칩니다.',
        weak: '글의 논리 전개를 따라가지 못해 추론 유형에 실점이 집중됩니다.',
      },
      writing: {
        strong: '복잡한 구문도 조건에 맞춰 정확히 쓸 수 있습니다.',
        fair: '구조는 떠올리지만 어형과 어순에서 감점 요소가 남아 있습니다.',
        weak: '고1 내신의 조건 영작을 감당하기 어려운 상태입니다.',
      },
    },
    overall: (rate) => {
      if (rate >= 0.85)
        return '고1 과정을 안정적으로 소화하고 있습니다. 수능 기출 난도로 올려 실전 감각을 쌓을 단계입니다.'
      if (rate >= 0.7)
        return '전반적인 틀은 잡혀 있습니다. 아래에서 지적된 취약 영역만 집중 보완하면 고2 과정과 모의고사에서 성적을 끌어올릴 수 있습니다.'
      if (rate >= 0.5)
        return '아는 것과 모르는 것이 뚜렷하게 갈립니다. 전 범위를 다시 훑기보다 취약 영역부터 순서대로 메우는 방식이 효율적입니다.'
      return '고1 내신·모의고사를 감당하기에는 기본 구문 해석이 불안합니다. 중3 과정의 문법을 빠르게 복습하면서 구문 독해를 병행해야 합니다.'
    },
  },
}
