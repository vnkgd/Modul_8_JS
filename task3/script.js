const trafficLightEl = document.querySelector('#trafficLight1');

// Light1

function makeRedLight1() {
    trafficLightEl.style.background = ('red');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeRedLight1);
    trafficLightEl.addEventListener('click', makeYellowLight1);
}

trafficLightEl.addEventListener('click', makeRedLight1);

function makeYellowLight1() {
    trafficLightEl.style.background = ('yellow');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeYellowLight1);
    trafficLightEl.addEventListener('click', makeGreenLight1);
}

trafficLightEl.addEventListener('click', makeYellowLight1);

function makeGreenLight1() {
    trafficLightEl.style.background = ('green');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeGreenLight1);
    trafficLightEl.addEventListener('click', makeRedLight1);  
}

trafficLightEl.addEventListener('click', makeGreenLight1);

// Light2

const trafficLightE2 = document.querySelector('#trafficLight2');

function makeRedLight2() {
    trafficLightE1 = document.querySelector('#trafficLight1');
    trafficLightE1.style.background = ('black');
    trafficLightE3.style.background = ('black');
    trafficLightE2.style.background = ('red');
    trafficLightE2.removeEventListener('click', makeRedLight2);
    trafficLightE2.addEventListener('click', makeYellowLight2);
    
}

trafficLightE2.addEventListener('click', makeRedLight2);

function makeYellowLight2() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE1 = document.querySelector('#trafficLight1');
    trafficLightE1.style.background = ('black');
    trafficLightE3.style.background = ('black');
    trafficLightE2.removeEventListener('click', makeYellowLight2);
    trafficLightE2.addEventListener('click', makeGreenLight2);
}

trafficLightE2.addEventListener('click', makeYellowLight2);

function makeGreenLight2() {
    trafficLightE2.style.background = ('green');
    trafficLightE2.removeEventListener('click', makeGreenLight2);
    trafficLightE2.addEventListener('click', makeRedLight2);
    trafficLightE1 = document.querySelector('#trafficLight1');
    trafficLightE1.style.background = ('black');
    trafficLightE3.style.background = ('black');
}

trafficLightE2.addEventListener('click', makeGreenLight2);

// Light3

const trafficLightE3 = document.querySelector('#trafficLight3');

function makeRedLight3() {
    trafficLightE3.style.background = ('red');
    trafficLightE3.removeEventListener('click', makeRedLight3);
    trafficLightE3.addEventListener('click', makeYellowLight3);
    trafficLightE1 = document.querySelector('#trafficLight1');
    trafficLightE2.style.background = ('black');
    trafficLightE1.style.background = ('black');
}

trafficLightE3.addEventListener('click', makeRedLight3);

function makeYellowLight3() {
    trafficLightE3.style.background = ('yellow');
    trafficLightE3.removeEventListener('click', makeYellowLight3);
    trafficLightE3.addEventListener('click', makeGreenLight3);
    trafficLightE2.style.background = ('black');
    trafficLightE1.style.background = ('black');
}

trafficLightE3.addEventListener('click', makeYellowLight3);

function makeGreenLight3() {
    trafficLightE3.style.background = ('green');
    trafficLightE3.removeEventListener('click', makeGreenLight3);
    trafficLightE3.addEventListener('click', makeRedLight3);
    trafficLightE2.style.background = ('black');
    trafficLightE1.style.background = ('black');
}

trafficLightE3.addEventListener('click', makeGreenLight3);

// +5 баллов — решение задачи «Светофор» модифицировано таким образом, 
// чтобы есть три разных круга (как на светофоре), 
// смена цвета происходит при клике на любой из них. 
// Каждый круг может принимать только один из цветов.
// При этом, когда один из кругов становится «цветным», 
// остальные становятся черными. Порядок смены цвета тот же, 
// что и в изначальном задании.