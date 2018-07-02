'use strict';

(function () {
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.characterWizard.coatColor()) {
      rank += 2;
    }
    if (wizard.colorEyes === window.characterWizard.eyesColor()) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {
    window.wizards.render(window.wizards.data().slice().
      sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
        }
        return rankDiff;
      }));
  };

  window.updateWizards = updateWizards;
})();
