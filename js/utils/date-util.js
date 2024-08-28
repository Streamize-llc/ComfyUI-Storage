export function formatISOString(isoString) {
  const date = new Date(isoString);

  // 각 요소를 두 자리 형식으로 맞추기 위한 패딩 함수
  const padZero = (num) => String(num).padStart(2, '0');

  // 연도, 월, 일, 시, 분 추출 및 포맷팅
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1); // 월은 0부터 시작하므로 +1
  const day = padZero(date.getDate());
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  // 원하는 형식으로 변환하여 반환
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
