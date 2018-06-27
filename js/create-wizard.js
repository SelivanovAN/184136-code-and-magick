'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SUR_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

  var wizards = []; // масиив для вставки магов
  var COUNT_WIZARDS = 4;

  var appendWizard = function () {
    for (var j = 0; j < COUNT_WIZARDS; j++) { // цикл для генерации магов и вставки в массив wizards
      wizards.push({
        name: WIZARD_NAMES[window.util.getRandomIndex(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SUR_NAME[window.util.getRandomIndex(0, WIZARD_SUR_NAME.length - 1)],
        coatColor: WIZARD_COAT_COLOR[window.util.getRandomIndex(0, WIZARD_COAT_COLOR.length - 1)],
        eyesColor: WIZARD_EYES_COLOR[window.util.getRandomIndex(0, WIZARD_EYES_COLOR.length - 1)]
      });
    }
  };

  appendWizard();

  window.createWizard = {
    wizardsArr: wizards
  };
})();
