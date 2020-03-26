import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<div>
  Time :
</div>
`;

function timer() {
  const myDate = new Date();
  const myHour = myDate.getHours();
  const myMin = myDate.getMinutes();
  const mySec = myDate.getSeconds();

  document.getElementById(
    "clock"
  ).innerHTML = `<b>${myHour}:${myMin}:${mySec}</b>`;
}

function init() {
  //console.log("hello world");
  timer();
  setInterval(timer, 1000);
}

init();
