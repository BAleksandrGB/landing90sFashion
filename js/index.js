// получаем все элементы
var videoEl = document.getElementsByTagName('video')[0],
    playBtn = document.getElementById('playBtn'),
    vidControls = document.getElementById('controls'),
    test = document.querySelector('.console');



// запускам или останавливаем воспроизведение
playBtn.addEventListener('click', function () {
    if (videoEl.paused) {

        videoEl.play();

    } else {

        videoEl.pause();
    }
}, true);



// событие когда курсор на кнопке поспроизведения
playBtn.addEventListener('mouseout', (e) => {
    playBtn.style.opacity = 0;
})
// событие когда курсор вне кнопке поспроизведения
playBtn.addEventListener('mouseover', (e) => {
    playBtn.style.opacity = 1;
})



// событие когда курсор на кнопке поспроизведения
videoEl.addEventListener('mouseout', (e) => {
    playBtn.style.opacity = 0;
})
// событие когда курсор вне кнопке поспроизведения
videoEl.addEventListener('mouseover', (e) => {
    playBtn.style.opacity = 0.3;
})


// меняем svg на кнопку поспроизведения видео
videoEl.addEventListener('play', function () {
    playBtn.innerHTML = `
        <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">

            <g>
            <title>background</title>
            <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
            </g>

            <g>
            <title>Layer 1</title>
            <path stroke="null" id="svg_1" fill="black" d="m80.541683,5.576565c-40.5009,0 -73.33335,33.07663 -73.33335,73.878778c0,40.802451 32.83245,73.878657 73.33335,73.878657c40.5007,0 73.3337,-33.076207 73.3337,-73.878657c0,-40.802148 -32.833,-73.878778 -73.3337,-73.878778z" clip-rule="evenodd" fill-rule="evenodd"/>
            <rect rx="12" stroke="null" id="svg_2" height="90.499925" width="18.333318" y="34.205318" x="51" stroke-opacity="null" stroke-width="null" fill="#ffffff"/>
            <rect rx="12" stroke="null" id="svg_3" height="90.499925" width="18.333318" y="34.205318" x="91" stroke-opacity="null" stroke-width="null" fill="#ffffff"/>
            </g>
        </svg>`;
}, true);
// меняем svg на кнопку поспроизведения видео
videoEl.addEventListener('pause', function () {
    playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"
       fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd"
           d="M80.0023 6.66748C39.5014 6.66748 6.66895 39.4999 6.66895 80.0008C6.66895 120.502 39.5014 153.334 80.0023 153.334C120.503 153.334 153.336 120.502 153.336 80.0008C153.336 39.4999 120.503 6.66748 80.0023 6.66748ZM64.0006 54.108C63.3356 54.9962 63.3356 56.5872 63.3356 59.7691V100.231C63.3356 103.413 63.3356 105.004 64.0006 105.892C64.58 106.666 65.467 107.151 66.4315 107.219C67.5382 107.299 68.8764 106.438 71.5529 104.718L103.024 84.4865C105.346 82.9934 106.507 82.2468 106.909 81.2976C107.259 80.4681 107.259 79.5322 106.909 78.7028C106.507 77.7535 105.346 77.007 103.024 75.5139L71.553 55.2828C68.8764 53.5621 67.5382 52.7018 66.4315 52.7809C65.467 52.8498 64.58 53.334 64.0006 54.108Z"
           fill="black" />
   </svg>`;
}, false);


// по окончанию ролика сбрасываем videoEl.currentTime
videoEl.addEventListener('ended', function () {
    videoEl.currentTime = 0;
}, false);
