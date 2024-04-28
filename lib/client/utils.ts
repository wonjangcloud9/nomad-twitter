export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

export function timeAgo(date: string | Date) {
  const now = new Date();
  const past = new Date(date);
  const diff = now.getTime() - past.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return `${seconds}초 전`;
  } else if (minutes < 60) {
    return `${minutes}분 전`;
  } else if (hours < 24) {
    return `${hours}시간 전`;
  } else if (days < 30) {
    return `${days}일 전`;
  } else if (months < 12) {
    return `${months}개월 전`;
  } else {
    return `${years}년 전`;
  }
}

export const wiseSayings = [
  "시작은 미약하나 끝은 창대하리라.",
  "오직 끈기만이 완성된 성공의 열쇠다.",
  "실패는 잊어라. 하지만 그것에서 배운 교훈은 절대 잊지 마라.",
  "포기하는 것이 실패보다 더 나쁘다.",
  "나는 실패한 게 아니다. 단지 10,000가지 효과가 없는 방법을 발견했을 뿐이다.",
  "성공으로 가는 길은 언제나 공사 중이다.",
  "인생에서 가장 중요한 것은 절대로 싸워서 지지 않는 것이다.",
  "성공의 비결은 목표를 결정하는 것, 결심하는 것, 시작하는 것이다.",
  "성공의 8할은 일단 나타나는 것이다.",
  "네가 원하면 할 수 있다는 믿음은 모든 성공 이야기의 시작이다.",
  "인내는 쓰지만 그 열매는 달다.",
  "우리가 실패에서 배우지 못하면, 실패는 정말로 실패가 된다.",
  "두려움 뒤에는 자유가 있다.",
  "긍정적인 생각은 긍정적인 삶을 만든다.",
  "무엇을 시작하기 가장 좋은 시간은 언제나 지금이다.",
  "지금 포기하지 않으면 결국 성공할 것이다.",
  "목표 없는 성공은 우연이다.",
  "실패는 늦어질 수는 있지만, 실패하지 않으려는 노력은 결코 멈추지 않는다.",
  "모든 성공의 시작은 첫걸음에서 시작된다.",
  "오늘 할 수 있는 일에 최선을 다하면, 내일은 더 나아질 것이다.",
];
