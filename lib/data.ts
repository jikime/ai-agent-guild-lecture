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
      title: "하네스의 탄생 — 정의, 필요성 & 기본 툴 설치",
      theme: "blue",
      instructor: "Anthony",
      coreQuestion: "왜 프롬프트만으로는 부족한가? 하네스는 무엇을 해결하는가?",
      items: {
        concept:
          "하네스 엔지니어링 정의 / 'LLM은 OS 없는 CPU' 비유 / 하네스 7요소 (목표·컨텍스트·도구·산출물·검증·권한·기록) / Agent = Model + Harness",
        case: "가족 여행 준비로 배우는 하네스 구조 — 역할 분담·체크리스트·예산 검증·다음 여행 개선 기록이 하네스의 7요소와 1:1 대응",
        practice: "Claude Code 설치 / Harness Lab 환경 구성 / 첫 번째 CLAUDE.md 작성",
      },
    },
    {
      session: 2,
      date: "6/7(일)",
      title: "Vibe Coding (홈페이지 제작)에 활용되는 Harness",
      theme: "purple",
      instructor: "Anthony + 운영진",
      coreQuestion:
        "프론트엔드 제작 시 반복 작업을 최대한 자동화하여 작업 시간을 줄이는 방법?",
      items: {
        concept:
          "Skill(반복 절차 매뉴얼) · Agent(역할 분담) · Loop(자동 반복) 세 가지 핵심 구조 / Feedforward(사전 제어) vs Feedback(사후 교정) / Context Engineering — 모델에게 무엇을 '보여주는가'",
        case: "프로젝트 랜딩페이지 사례 — Skill로 컴포넌트 자동 생성, Validation으로 품질 확인",
        practice: "프로젝트 랜딩페이지 만들기 실습 (이번 강의 사이트가 실습 결과물)",
      },
    },
    {
      session: 3,
      date: "6/14(일)",
      title: "기획문서 작성에 활용되는 Harness",
      theme: "green",
      instructor: "Anthony + 김우정",
      guest: "김우정 (사업기획서·뉴스레터 실전 적용 사례)",
      coreQuestion:
        "마케팅 문서·기획문서를 자동화할 때 Harness 개념을 어떻게 활용하는가?",
      items: {
        concept:
          "Generator-Evaluator 패턴 — 생성과 평가를 분리해 품질을 구조적으로 높이는 방법 / 루브릭(Rubric) 기반 검증 / 부록 G 사업계획서 하네스 실습 구조",
        case: "뉴스레터 초안 3개 동시 생성 & 비교 / 사업계획서 각 문항별 초안 3개 이상 자동 생성 과정 & 결과물 (Appendix G 기반)",
        practice: "뉴스레터 초안 만들기 실습 / 사업계획서 내 각 문항 초안 만들기 실습",
      },
    },
  ],

  faq: [
    {
      q: "하네스 엔지니어링이 프롬프트 엔지니어링과 다른 점이 뭔가요?",
      a: "프롬프트 엔지니어링이 '모델에게 뭘 말할까'를 다룬다면, 하네스 엔지니어링은 '모델이 일하는 환경 전체(목표·컨텍스트·도구·검증·기록)'를 설계하는 것입니다. Vercel의 실험에서는 도구의 80%를 제거했을 때 오히려 성공률이 100%가 됐습니다. 좋은 환경 설계가 더 중요합니다.",
    },
    {
      q: "Claude Code를 처음 써봐도 수강할 수 있나요?",
      a: "네, 1회차에서 Claude Code 설치부터 CLAUDE.md 작성, Harness Lab 환경 구성까지 처음부터 함께 진행합니다. 코딩 경험이 없어도 일상 비유(가족 여행 준비 등)를 통해 개념을 먼저 잡고 실습으로 연결하므로 걱정 없이 시작하실 수 있습니다.",
    },
    {
      q: "개발자가 아니어도 들을 수 있나요?",
      a: "하네스 엔지니어링 백과사전은 개발자·기획자·마케터·창업자 등 5가지 학습 경로를 제시합니다. 이번 강의도 3회차에서 사업계획서·뉴스레터 자동화를 다루므로 코드를 모르는 기획자·PM에게도 적합합니다.",
    },
    {
      q: "강의 녹화본을 제공하나요?",
      a: "강의 종료 후 7일간 전체 녹화본을 제공합니다. 실습 자료와 Harness Lab 환경도 함께 제공되어 강의 후에도 충분히 복습하실 수 있습니다.",
    },
    {
      q: "환불 정책은 어떻게 되나요?",
      a: "강의 시작 전까지 100% 환불 가능합니다. 1회차 수강 이후에는 환불이 불가하니, 신청 전에 커리큘럼을 꼼꼼히 확인해 주세요. 궁금하신 점은 운영팀으로 먼저 문의해 주세요.",
    },
    {
      q: "소그룹 인원은 몇 명인가요?",
      a: "소그룹은 최대 5명으로 구성됩니다. 소그룹 Tech 리더가 전담 지도하여 개인별 실습 상황에 맞는 피드백을 제공합니다. 소수 정원이라 조기에 마감될 수 있습니다.",
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
