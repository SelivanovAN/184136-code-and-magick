'use strict';

(function () {
  // Блок открытия и закрытия настройки персонажа
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setupDialog.querySelector('.setup-close');

  var coordinatesSetupTop = window.setupDialog.style.top;
  var coordinatesSetupLeft = window.setupDialog.style.left;

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && !evt.target.classList.contains('setup-user-name')) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.setupDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.setupDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    window.setupDialog.style.top = coordinatesSetupTop;
    window.setupDialog.style.left = coordinatesSetupLeft;
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
  var userNameInput = window.setupDialog.querySelector('.setup-user-name');

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

})();
