var BeerDetailView = function (container) {
  this.container = container;
}

BeerDetailView.prototype = {

  display: function (beer) {

    var pTags = this.container.querySelectorAll('p');
    var imgTag = this.container.querySelector("img");
    imgTag.setAttribute("src", `${beer.image_url}`);
    pTags[0].innerText = beer.name;
    pTags[1].innerText = beer.tagline;
    pTags[2].innerText = beer.description;
  }
}
