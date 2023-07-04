const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
//const audio = frame.querySelectorAll("audio");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const deg = 360/lists.length; //각각의 article요소가 회전할 각도
const len = lists.length-1; //순번이 0부터 시작하므로 전체 개수에서 1을 빼줌
let i = 0; 
let num = 0; 
let active = 0; 


const $sky = document.querySelector(".sky");

// 브라우저 창 크기에 따른 별 생성
window.onresize = () => {
  makeStars();
}

const makeStars = () => {
  // 브라우저 가장 큰 크기
  const maxSize = Math.max(window.innerWidth, window.innerHeight)

  // 랜덤한 X 위치 값
  const getRandomX = () => Math.random() * maxSize;

  // 랜덤한 Y 위치 값
  const getRandomY = () => Math.random() * maxSize;

  // 랜덤한 크기 (circle는 반지름이 크기)
  const randomRadius = () =>  Math.random() * 0.7 + 0.6;
  
  // 임의의 값
  const _size = Math.floor(maxSize / 2);
  
  const htmlDummy = new Array(_size).fill().map((_, i) => {
    return  `<circle class='star'
        cx=${getRandomX()}
        cy=${getRandomY()}
        r=${randomRadius()}
        className="star" />`
  }).join('');
  
  $sky.innerHTML = htmlDummy;
}

window.onload = () => {
  makeStars();
}


function activation(index, lists){
    for( let el of lists){
        el.classList.remove("on");
    }
    lists[index].classList.add("on");
}

//article의 개수만큼 반복 
for(let el of lists) {  
    let pic = el.querySelector(".pic");  
    el.style.transform = `rotate(${deg* i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(img/${i+1}.png)`;
    i++; 


}


//prev 버튼 클릭 시
prev.addEventListener("click", ()=>{
    num++;  
    frame.style.transform = `rotate(${deg* num}deg)`;    

    (active == 0 ) ? active = len : active--;
    activation(active, lists);    
});

//next 버튼 클릭시
next.addEventListener("click", ()=>{
  
    num--;   
    frame.style.transform = `rotate(${deg* num}deg)`;   

    (active == len ) ? active = 0 : active++; 
    activation(active, lists);
});