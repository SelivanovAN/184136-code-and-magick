'use strict';

(function () {
  var newCoatColor;
  var newEyesColor;

  //  Блок по изменению цвета глаз, фаербола и мантии при нажатии
  var COLOR_WIZARD_COAT = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var wizardCoat = window.renderWizards.setupDialogElement.querySelector('.setup-wizard .wizard-coat');

  wizardCoat.addEventListener('click', function () { // событие по изменению цвета мантии мага при нажатии
    var colorCoat = COLOR_WIZARD_COAT[window.util.getRandomIndex(0, COLOR_WIZARD_COAT.length - 1)];
    wizardCoat.style.fill = colorCoat;
    newCoatColor = colorCoat;
    window.updateWizards();
  });

  var COLOR_WIZARD_EYES = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var wizardEyes = window.renderWizards.setupDialogElement.querySelector('.setup-wizard .wizard-eyes');

  wizardEyes.addEventListener('click', function () { // событие по изменению цвета глаз мага при нажатии
    var colorEyes = COLOR_WIZARD_EYES[window.util.getRandomIndex(0, COLOR_WIZARD_EYES.length - 1)];
    wizardEyes.style.fill = colorEyes;
    newEyesColor = colorEyes;
    window.updateWizards();
  });

  var COLOR_WIZARD_FIREBALL = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var wizardFireball = window.renderWizards.setupDialogElement.querySelector('.setup-fireball-wrap');

  wizardFireball.addEventListener('click', function () { // событие по изменению цвета фаербола при нажатии
    var colorFireball = COLOR_WIZARD_FIREBALL[window.util.getRandomIndex(0, COLOR_WIZARD_FIREBALL.length - 1)];
    wizardFireball.style.background = colorFireball;
  });

  window.characterWizard = {
    eyesColor: function () {
      return newEyesColor;
    },
    coatColor: function () {
      return newCoatColor;
    }
  };
})();
