
'use strict';

(function () {
  var NUMBERS_WIZARDS = 4;
  var setupDialog = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var fragment = document.createDocumentFragment();

  var wizards = [];

  var renderWizard = function (wizard) { // функция по созданию ДОМ мага (одного мага)
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };


  var appendWizard = function (data) {
    similarListElement.innerHTML = '';

    for (var i = 0; i < NUMBERS_WIZARDS; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }

    similarListElement.appendChild(fragment);
  };

  var similarListElement = setupDialog.querySelector('.setup-similar-list');

  var onSuccessed = function (response) {
    wizards = response.slice();

    window.updateWizards(wizards);

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

  window.wizards = {
    render: appendWizard,
    data: function () {
      return wizards;
    }
  };

})();
