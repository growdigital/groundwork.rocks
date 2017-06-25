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
  var url = "/assets/images/icons.svg"
  var xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if(xhr.status === 200) {
      document.getElementById('js-svg').innerHTML = xhr.responseText;
    } else {
      document.body.classList.add("no-200");
    }
  };
  xhr.open('GET', url, true);
  xhr.send(null);
} else {
  document.body.classList.add("no-svg");
}

// var request;
// if(window.XMLHttpRequest)
//     request = new XMLHttpRequest();
// else
//     request = new ActiveXObject("Microsoft.XMLHTTP");
// request.open('GET', 'http://www.mozilla.org', false);
// request.send(); // there will be a 'pause' here until the response to come.
// // the object request will be actually modified
// if (request.status === 404) {
//     alert("The page you are trying to reach is not available.");
// }
