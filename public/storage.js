var storage = {

  key: 'selectedBeer',

  save: function (beer) {
    if (!beer) return;
    var jsonString = JSON.stringify(beer);
    localStorage.setItem(this.key, jsonString);
  },

  get: function () {
    var jsonString = localStorage.getItem(this.key);
    return JSON.parse(jsonString);
  }

};
