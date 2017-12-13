window.addEventListener('load', function () {
  const beerList = new BeerList('https://api.punkapi.com/v2/beers');
  beerList.getData();

  const select = document.querySelector('#beers');
  const beerSelectView = new BeerSelectView(select, beerList);

  const info = document.querySelector('#info');
  const beerDetailView = new BeerDetailView(info);

  beerSelectView.onChange = function (beer) {
    storage.save(beer);
    beerDetailView.display(beer);
  }
});
