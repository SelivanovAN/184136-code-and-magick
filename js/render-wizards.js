'use strict';

(function () {
  var setupDialog = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var wizards = [];

  var renderWizard = function (wizard) { // функция по созданию ДОМ мага (одного мага)
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };


  // Фильтрация магов по глазам и плащу
  var newCoatColor;
  var newEyesColor;

  var updateWizards = function () {

    var sameCoatWizards = wizards.filter(function (it) {
      return it.colorCoat === newCoatColor;
    });
    // var sameEyesWizards = wizards.filter(function (it) {
    //   return it.colorEyes === newEyesColor;
    // });
    //
    // onSuccessed(sameCoatWizards.concat(sameEyesWizards));

    // window.render(sameCoatWizards);

    renderWizard(sameCoatWizards);
  };
  // Фильтрация магов по глазам и плащу


  var similarListElement = setupDialog.querySelector('.setup-similar-list');

  var onSuccessed = function (response) {
    wizards = response.slice();
    var fragment = document.createDocumentFragment();

    var NUMBERS_WIZARDS = wizards.length > 4 ? 4 : wizards.length;

    for (var i = 0; i < NUMBERS_WIZARDS; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    updateWizards();

    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };


  var onErrored = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(onSuccessed, onErrored);

  // send information

  var form = document.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      window.popup.close();
    });
    evt.preventDefault();
  });

  window.renderWizards = {
    setupDialogElement: setupDialog,
    wizards: function () {
      return wizards;
    }
  };

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
    updateWizards();
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
    updateWizards();
  });

})();
