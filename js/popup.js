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
})();
