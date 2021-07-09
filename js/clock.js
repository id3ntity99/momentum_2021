const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //페이지 리로드 직후 00:00:00의 형태로 삽입됨을 방지. 못알아 먹겠으면 한번 삭제해볼 것.
setInterval(getClock, 1000);
