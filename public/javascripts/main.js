(function() {

  /**
   * Get a random integer within a range
   * @param {Number} maxValue The limit to get a random value from within
   * @returns {Number}
   */
  function getRandomInRange(maxValue) {
    return Math.floor(Math.random() * maxValue);
  }

  /**
   * Setup locale functionality
   */
  function setupLocales() {
    var locales = [
      'default',
      'de-DE',
      'nl-NL',
      'en-US',
      'fr-FR',
      'es-ES',
      'en-UK',
      'no'
    ];

    return {
      /**
       * Get random locale from list
       */
      get randomLocale() {
        var randomIndex = getRandomInRange(locales.length);
        return this.locale(randomIndex);
      },
      /**
       * Get a locale from the list
       * @param {Number} idx
       * @returns {String}
       */
      locale: function(idx) {
        if (locales.length < idx || idx < 0) {
          throw new RangeError('Index out of range');
        }

        return locales[idx];
      }
    };
  }

  /**
   * Localize a date
   * @param {String} locale The locale to get the date in
   * @returns {String} A localized date
   */
  function getLocalizedDate(locale) {
    var options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      localeMatcher: 'lookup'
    };

    var today = new Date();
    var localeDate = today.toLocaleDateString(locale, options);

    return localeDate;
  }

  var Locales = setupLocales();
  var locale = Locales.randomLocale;

  var dateContainer = document.getElementById('today-series')
  // dateContainer.innerText = getLocalizedDate(locale);
  // dateContainer.dataset.locale = locale;

}());
