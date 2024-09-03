const CurrentTime = () => {
  const now = new Date();
  const formattedTime = formatDate(now);

  return formattedTime;
};

const formatDate = (date) => {
  const pad = (num) => String(num).padStart(2, '0'); // 0으로 채우기
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); // 월은 0부터 시작하므로 1을 더함
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  const milliseconds = String(date.getMilliseconds()).padEnd(6, '0'); // 3자리로 맞추기

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
};

export default CurrentTime;
