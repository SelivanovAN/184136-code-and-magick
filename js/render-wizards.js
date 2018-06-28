'use strict';

(function () {
  var setupDialog = document.querySelector('.setup');
  // setupDialog.classList.remove('hidden');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) { // функция по созданию ДОМ мага (одного мага)
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    // wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    // wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  // var fragment = document.createDocumentFragment(); // создаем контейнер для хранения ДОМ мага
  //
  // var appendWizardsInFragment = function () { // функция для генерации 4-х ДОМ магов и вставки в контейнер
  //   for (var i = 0; i < window.createWizard.wizardsArr.length; i++) {
  //     fragment.appendChild(renderWizard(window.createWizard.wizardsArr[i]));
  //   }
  //   var similarListElement = setupDialog.querySelector('.setup-similar-list');
  //
  //   similarListElement.appendChild(fragment); // вставляем из контейнера в разметку 4-х ДОМ магов
  // };
  //
  // appendWizardsInFragment(); // запуск фунции по герации 4-х ДОМ магов и вставки в контейнер
  //
  // setupDialog.querySelector('.setup-similar').classList.remove('hidden'); // Вставка ДОМ магов из контейнера в разметку

  var similarListElement = setupDialog.querySelector('.setup-similar-list');

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    var NUMBERS_WIZARDS = 4;

    for (var i = 0; i < NUMBERS_WIZARDS; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  // send information

  var form = document.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      window.util.closePopup();
    });
    evt.preventDefault();
  });

  window.renderWizards = {
    setupDialogElement: setupDialog
  };
})();
