'use strict';

(function () {
  // Блок открытия и закрытия настройки персонажа
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.renderWizards.setupDialogElement.querySelector('.setup-close');

  var coordinatesSetupTop = window.renderWizards.setupDialogElement.style.top;
  var coordinatesSetupLeft = window.renderWizards.setupDialogElement.style.left;

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && !evt.target.classList.contains('setup-user-name')) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.renderWizards.setupDialogElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.renderWizards.setupDialogElement.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    window.renderWizards.setupDialogElement.style.top = coordinatesSetupTop;
    window.renderWizards.setupDialogElement.style.left = coordinatesSetupLeft;
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  // Блок валидации ввода имени персонажа
  var userNameInput = window.renderWizards.setupDialogElement.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () { // eslint выдает ошибку - почему, где ее использовать надо?
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов'); // not wark
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов, либо на англ. раскладке, либо на рус.');
    } else {
      target.setCustomValidity('');
    }
  });

  window.popup = {
    close: closePopup
  };

})();
