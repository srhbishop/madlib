var inputs = document.querySelectorAll('.user-input');
var submitBtn = document.querySelector('.submit-btn');
var print = document.querySelector('.print');
var windows = document.querySelectorAll('.window');
var nextBtn = document.querySelectorAll('.next-btn');
var inputWindow = document.querySelector('.input-windows');
var songInfo = document.querySelector('.song-info');

// for counting the number of clicks
let count = 0;
// for indexing the windows
var index = 1;

// an array for changing background colors on click
var backgroundColors = [
    '#ffB3ad', '#fff285', 'AAF77D', '#B9F9F8', '#DDAAFF'
]

// EVENT listener for each next button
for(i = 0; i < nextBtn.length; i++) {
    nextBtn[i].addEventListener('click', nextEntry)
}

// EVENT listener for the final next button when you reach the end of the entries
submitBtn.addEventListener('click', printResults);

// function for taking you to the next window every time you click the next button
function nextEntry() {
    count+=1;   
    windows[index-1].classList.add('disappear');
    windows[index++].classList.add('active');

    // changes background color for each click
    document.body.style.backgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

    if(count === windows.length -1) {
        submitBtn.classList.add('active');
        }
}

// prints results of user entries
function printResults() {
    print.classList.add('active');
    inputWindow.classList.add('disappear');
    songInfo.classList.add('active');

    print.innerHTML = `
        I see ${inputs[0].value} of ${inputs[1].value}, ${inputs[2].value} ${inputs[3].value}, too.
        <br>
        I see ${inputs[4].value} for me and you.
        <br>
        And I think to myself, what a ${inputs[5].value} world.
    `
}



