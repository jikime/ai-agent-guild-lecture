export const COURSE_DATA = {
  title: "[1인] 필수 강의 3회차",
  subtitle: "Claude Code Harness 마스터 코스",
  format: "Online 강의 (필수 코스)",
  totalPrice: 190000,
  sessionPrice: 50000,
  sessions: 3,

  instructors: [
    {
      id: "anthony",
      name: "Anthony",
      initial: "A",
      role: "Main 강사",
      description: "Claude Code 전문가 / 1인 개발 자동화 전문가 / Harness Engineering 창시자",
      tags: ["#ClaudeCode", "#HarnessEngineering", "#1인개발"],
      color: "bg-blue-600",
    },
  ],

  curriculum: [
    {
      session: 1,
      date: "5/31(일)",
      title: "하네스 정의, 필요성 및 기본 툴 설치",
      theme: "blue",
      instructor: "Anthony",
      items: {
        concept:
          "하네스 엔지니어링 정의 / 개념 구성도",
        case: "가족 여행 등 일상사례로 harness의 정의 및 활용법 이해",
        practice: "Claude 설치하기 / harness lab 설치하기",
      },
    },
    {
      session: 2,
      date: "6/7(일)",
      title: "Vibe Coding (홈페이지 제작)에 활용되는 Harness",
      theme: "purple",
      instructor: "Anthony + 운영진",
      coreQuestion:
        "프론트엔드 제작 시 반복작업을 최대한 자동화하여 작업시간을 줄이는 방법?",
      keyPoints: ["Tool (Skill, Agent, Loop)", "context", "Validation"],
      items: {
        concept: "Tool (Skill, Agent, Loop) / context / Validation 개념",
        case: "프로젝트 랜딩페이지 사례",
        practice: "프로젝트 랜딩페이지 만들기 실습",
      },
    },
    {
      session: 3,
      date: "6/14(일)",
      title: "기획문서 작성에 활용되는 Harness",
      theme: "green",
      instructor: "Anthony + 김우정",
      guest: "김우정 (사업기획서, 뉴스레터 적용예)",
      coreQuestion:
        "마케팅 문서 및 기획문서를 자동화할 때 Harness 개념을 어떻게 활용하는가?",
      keyPoints: ["Tool (Skill, Agent, Loop)", "context", "Validation"],
      items: {
        concept: "Tool (Skill, Agent, Loop) / context / Validation 개념",
        case: "1개 뉴스레터 초안 3개 이상 작성 / 1개 사업계획서 내 각 문항 초안 3개 이상 작성",
        practice: "뉴스레터 초안 만들기 실습 / 사업계획서 내 각 문항 초안 만들기 실습",
      },
    },
  ],

  faq: [
    {
      q: "강의는 어떻게 진행되나요?",
      a: "온라인 실시간 강의로 진행되며, 개념 설명 → 사례 공유 → 직접 실습 순서로 3단계 구성됩니다. Zoom 또는 Google Meet을 통해 참여하실 수 있습니다.",
    },
    {
      q: "녹화본을 제공하나요?",
      a: "강의 종료 후 7일간 녹화본을 제공합니다. 복습에 충분히 활용하실 수 있도록 전체 강의를 녹화해 드립니다.",
    },
    {
      q: "환불 정책은 어떻게 되나요?",
      a: "강의 시작 전 100% 환불 가능합니다. 1회차 수강 이후에는 환불이 불가합니다. 부득이한 사정이 있으신 경우 사전에 운영팀으로 문의 주시기 바랍니다.",
    },
    {
      q: "Claude Code를 처음 써봐도 되나요?",
      a: "네, 전혀 문제없습니다. 1회차에서 Claude 설치부터 기본 사용법까지 함께 진행합니다. 초보자도 충분히 따라올 수 있도록 단계별로 안내합니다.",
    },
    {
      q: "소그룹 인원은 몇 명인가요?",
      a: "소그룹은 최대 5명으로 구성됩니다. Tech 리더인 Robert 님이 소그룹을 전담 지도하여 개인별 맞춤 피드백을 제공합니다.",
    },
  ],
};

export const PAYMENT_OPTIONS = [
  { value: "all", label: "전체 묶음 (3회차)", price: 190000, recommended: true },
];

export const PAYMENT_METHODS = [
  { value: "card", label: "신용/체크카드" },
  { value: "transfer", label: "계좌이체" },
  { value: "kakaopay", label: "카카오페이" },
];
