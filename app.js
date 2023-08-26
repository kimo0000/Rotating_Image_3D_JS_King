const slider = document.querySelector('.slider');
const prev = document.querySelector('#previous');
const next = document.querySelector("#next");

let count = 0;
let timer = null

timer = setInterval(() => {
    count += 45;
    console.log(count);
    slider.style.transform = `perspective(2500px) rotateY(${count}deg)`;

    if(count === 360) {
       count = 0;
    }
}, 1000)

prev.addEventListener('click', () => {
    clearInterval(timer);
     count += 45;
     console.log(count);
    slider.style.transform = `perspective(2500px) rotateY(${count}deg)`;

    if (count >= 360) {
      count = 0;
    }
})

next.addEventListener('click', () => {
    clearInterval(timer);
     count += 45;
     console.log(count);
    slider.style.transform = `perspective(2500px) rotateY(-${count}deg)`;

    if (count >= 360) {
      count = 0;
    }
})