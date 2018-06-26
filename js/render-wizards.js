'use strict';

(function () {
  window.setupDialog = document.querySelector('.setup');
  // setupDialog.classList.remove('hidden');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) { // функция по созданию ДОМ мага (одного мага)
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var fragment = document.createDocumentFragment(); // создаем контейнер для хранения ДОМ мага

  var appendWizardsInFragment = function () { // функция для генерации 4-х ДОМ магов и вставки в контейнер
    for (var i = 0; i < window.wizards.length; i++) {
      fragment.appendChild(renderWizard(window.wizards[i]));
    }
    var similarListElement = window.setupDialog.querySelector('.setup-similar-list');

    similarListElement.appendChild(fragment); // вставляем из контейнера в разметку 4-х ДОМ магов
  };

  appendWizardsInFragment(); // запуск фунции по герации 4-х ДОМ магов и вставки в контейнер

  window.setupDialog.querySelector('.setup-similar').classList.remove('hidden'); // Вставка ДОМ магов из контейнера в разметку
})();
