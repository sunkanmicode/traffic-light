
let i = -1;
let clock = 0;

const light = () =>{
  const trafficLight = document.querySelector('.light');
  const color = ['green', 'yellow', 'red'];
  i += 1
  
  if(i<3){
    trafficLight.style.backgroundColor = color[i]
  }else {
    i = 0
    trafficLight.style.backgroundColor = color[i]
  }
}

const trafficCount = () =>{
  clock += 1;
  if(clock < 10){
    document.querySelector('.countdown').innerText = clock;
  }else{
    clock = 0;
     document.querySelector('.countdown').innerText = clock;
    light()
  }
}
setInterval(trafficCount, 1000);





//second line....
let index = -1;
let clockTwo = 0;

const lightTwo = () =>{
  const trafficLight = document.querySelector('.lightTwo');
  const colorTwo = ['yellow', 'red', 'green'];
  
index += 1
  
  if(index<3){
    trafficLight.style.backgroundColor = colorTwo[index]
  }else {
    index = 0
    trafficLight.style.backgroundColor = colorTwo[index]
  }
}

const trafficCountTwo = () =>{
  clockTwo += 1;
  if(clockTwo < 5){
    document.querySelector('.countdownTwo').innerText = clockTwo;
  }else{
    clockTwo = 0;
     document.querySelector('.countdownTwo').innerText = clockTwo;
    lightTwo()
  }
}
setInterval(trafficCountTwo, 2000)



//third Line.....

let num = -1;
let clockThree = 0;

const lightThree = () =>{
  const trafficLight = document.querySelector('.lightThree');
  const colorThree = ['red', 'green', 'yellow'];
  
num += 1
  
  if(num <3){
    trafficLight.style.backgroundColor = colorThree[num]
  }else {
    num = 0
    trafficLight.style.backgroundColor = colorThree[num]
  }
}

const trafficCountThree = () =>{
  clockThree +=1;
  if(clockThree < 10){
    document.querySelector('.countdownThree').innerText = clockThree;
  }else{
    clockThree = 0;
     document.querySelector('.countdownThree').innerText = clockThree;
    lightThree()
  }
}
setInterval(trafficCountThree, 1000)





