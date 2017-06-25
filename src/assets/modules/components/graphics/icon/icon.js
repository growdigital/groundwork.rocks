/* ==========================================================================
   Icon
   ========================================================================== */

/**
 * Cacheable Ajax SVG icons for the win win win
 * Big thanks to Florens Verschelde:
 * https://fvsch.com/code/svg-icons/how-to/#section-sprite
 * Check for SVG support. If it exists, Ajax in svg file into js-svg ID div
 * Otherwise, add no-svg class to body tag
 */

var supportsSvg =  document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");

if (supportsSvg) {
  document.body.classList.add("svg");
  var url = "/assets/images/icon.svg"
  var xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if(xhr.status === 200) {
      document.getElementById('js-svg').innerHTML = xhr.responseText;
      document.getElementById('js-svg').classList.add("icons");
    }
  };
  xhr.open('GET', url, true);
  xhr.send(null);
} else {
  document.body.classList.add("no-svg");
}
