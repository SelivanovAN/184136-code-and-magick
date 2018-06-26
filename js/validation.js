'use strict';

(function () {
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
