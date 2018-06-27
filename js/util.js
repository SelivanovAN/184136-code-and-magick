'use strict';

(function () {
  window.util = {
    getRandomIndex: function (min, max) { // функция генерации случайных данных
      return Math.floor(Math.random() * (max - min)) + min;
    }
  };
})();
