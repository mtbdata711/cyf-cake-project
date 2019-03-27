function imageCarouselEvent() {
  var secondaryImages = document.getElementById("secondary-image");
  secondaryImages.addEventListener("click", function(e) {
    if (e.target.src) {
      swapFeaturedImage(e.target);
    }
  });
}

function swapFeaturedImage(selectedElement) {
  var featuredImage = document.querySelector(".primary-image");
  var newFeaturedImage = selectedElement.src;
  //Move current primary-image to secondary-image
  selectedElement.src = featuredImage.src;
  //Move new primary-image to primary-image div
  featuredImage.src = newFeaturedImage;
}
imageCarouselEvent();
