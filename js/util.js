'use strict';

window.util = (function () {
  return {
    getRandomIndex: function (min, max) { // функция генерации случайных данных
      return Math.floor(Math.random() * (max - min)) + min;
    },

    // openPopup: function () {
    // заготовка
    // },

    // closePopup: function () {
    //  заготовка
    // }
  };
})();
