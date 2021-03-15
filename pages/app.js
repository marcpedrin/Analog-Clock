setInterval(() => {
   time = new Date();
  hTime = time.getHours();
  mTime = time.getMinutes();
  sTime = time.getSeconds();

  hRotation = hTime*30;
  mRotation = mTime*6;
  sRotation = sTime*6;

  hour.style.transform = `rotate(${hRotation}deg)`;
  minute.style.transform = `rotate(${mRotation}deg)`;
  second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);

