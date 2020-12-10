const trafficLightEl = document.querySelector('#trafficLight1');

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeRed);

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeYellow);

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeRed);
}

trafficLightEl.addEventListener('click', makeGreen);

// +5 баллов — решение задачи «Светофор» модифицировано таким образом, 
// чтобы есть три разных круга (как на светофоре), 
// смена цвета происходит при клике на любой из них. 
// Каждый круг может принимать только один из цветов.
// При этом, когда один из кругов становится «цветным», 
// остальные становятся черными. Порядок смены цвета тот же, 
// что и в изначальном задании.