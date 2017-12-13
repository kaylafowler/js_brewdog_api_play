var BeerSelectView = function (selectElement, beerList) {
  this.selectElement = selectElement;
  this.beerList = beerList;
  this.onChange = null;

  this.selectElement.addEventListener('change', function (e) {
    let target = e.target;
    let index = target.selectedIndex;
    let beer = this.beerList.beers[target.selectedIndex];
    beer.index = index;
    this.onChange(beer);
  }.bind(this), false);

  this.beerList.onUpdate = this.populate.bind(this);
}

BeerSelectView.prototype = {

  populate: function () {
    var beers = this.beerList.beers;

    beers.forEach(function (beer, index) {
      this.addOption(beer, index);
    }.bind(this));

    this.setSelectedFromLocal();
  },

  setSelectedFromLocal: function () {
    var savedBeer = storage.get();

    if (savedBeer) {
      this.setSelectedBeer(savedBeer);
    }
  },

  addOption: function (beer, index) {
    var option = document.createElement('option');
    option.value = index.toString();
    option.text = beer.name;
    this.selectElement.appendChild(option);
  },

  setSelectedBeer: function (beer) {
    this.selectElement.selectedIndex = beer.index;
    this.onChange(beer);
  }

}
