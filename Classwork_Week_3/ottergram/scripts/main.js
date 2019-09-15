var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTION = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTION = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {
  'use strict'

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function titleFromThumb(thumbnail) {
  'use strict'
  var title = thumbail.getAttribute('data-image-title');
  console.log(title);
  return title;
  return thumbnail.getAttribute('data-image-title');

}

function setDetailsFromThumb(thumbnail) {

  'use stict'
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbail));
}


function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  'use strict'
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTION);
  var thumbnailsArray = [].slice.call(thumbnails);
  return thumbnailsArray
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}
