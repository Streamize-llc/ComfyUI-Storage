export function generateDummyData(numEntries = 10) {
  const data = [];
  const baseDate = new Date();

  for (let i = 1; i <= numEntries; i++) {
    // ISO8601 형식의 날짜 생성
    const createdAt = new Date(baseDate);
    createdAt.setDate(baseDate.getDate() - Math.floor(Math.random() * 100));

    const updatedAt = new Date(createdAt);
    updatedAt.setDate(createdAt.getDate() + Math.floor(Math.random() * 50));

    // 버전 생성
    const major = Math.floor(Math.random() * 3) + 1;
    const minor = Math.floor(Math.random() * 10);
    const version = minor !== 0 ? `v${major}.${minor}` : `v${major}`;

    data.push({
      id: Math.floor(Math.random() * 1_000_000) + 1,
      createdAt: createdAt.toISOString(),
      updatedAt: updatedAt.toISOString(),
      version: version,
    });
  }

  return data;
}
