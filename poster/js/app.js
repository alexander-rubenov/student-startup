'use strict';

let
  [buttonToRussianPoster, buttonToEnglishPoster] = document.querySelectorAll('.language'),
  body = document.body,
  sectionLanguageSelection = document.querySelector('.language-selection'),
  buttonToComeBack = document.querySelector('.button-come-back');

function displayRussianPoster() {
  body.style.background = '#ffffff url("../img/poster-ru.png") center center no-repeat';
  body.style.backgroundSize = 'contain';
  sectionLanguageSelection.style.display = 'none';
  buttonToComeBack.style.display = 'inline';
}

function displayEnglishPoster() {
  body.style.background = '#ffffff url("../img/poster-en.png") center center no-repeat';
  body.style.backgroundSize = 'contain';
  sectionLanguageSelection.style.display = 'none';
  buttonToComeBack.style.display = 'inline';
}

function comeBack() {
  body.style.background = 'none';
  sectionLanguageSelection.style.display = 'flex';
  buttonToComeBack.style.display = 'none';
}

buttonToRussianPoster.addEventListener('click', displayRussianPoster);
buttonToEnglishPoster.addEventListener('click', displayEnglishPoster);
buttonToComeBack.addEventListener('click', comeBack);


console.log(buttonToRussianPoster, buttonToEnglishPoster);
