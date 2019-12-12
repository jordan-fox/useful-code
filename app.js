// Random number generator function from MDN

function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//hide and show function as shown in 201n16 12/4/2019 frontrow video

function hide(elem) {
  elem.style.display = 'none';
}

function show(elem) {
  elem.style.display = 'block';
}

//useful 'button' site https://css-tricks.com/use-button-element/

// 1. Create the button
var button = document.createElement('button');
button.innerHTML = 'Do Something';

// 2. Append somewhere
var body = document.getElementsByTagName('body')[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ('click', function() {
  alert('did something');
});

//useful 'form' site https://www.xul.fr/javascript/form-intro.php

//unique functions list


function getUnique() {
  while (uniqueIndexes.length < 6) {
    var random = randomIndex(picArray.length);
    if (!uniqueIndexes.includes(random)) {
      uniqueIndexes.push(random);
    }
  }
}

function removeThree() {
  for (var i = 0; i < 3; i++) {
    uniqueIndexes.shift();
  }
}

function generateImages() {
  getUnique();

  for (var i = 0; i < pics.length; i++) {
    pics[i].src = picArray[uniqueIndexes[i]].src;
    pics[i].title = picArray[uniqueIndexes[i]].title;
    pics[i].alt = picArray[uniqueIndexes[i]].alt;
    picNames[i].textContent = picArray[uniqueIndexes[i]].title;

    picArray[uniqueIndexes[i]].viewed++;
  }
}
