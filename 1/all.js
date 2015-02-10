// https://github.com/segmentio/analytics.js/blob/master/lib/analytics.js
// http://cdn.segment.io/analytics.js/v1/md8a5a8iah/analytics.js
(function() {
var oldonload = window.onload;
window.onload = function() {
  var _fbq = window._fbq || (window._fbq = []);
  if (!_fbq.loaded) {
    var fbds = document.createElement('script');
    fbds.async = true;
    fbds.src = '//connect.facebook.net/en_US/fbds.js';
    var s = document.getElementsByTagName('head')[0];
    s.appendChild(fbds);
    _fbq.loaded = true;
  }
  _fbq.push(['addPixelId', '734613796561703']);
  if(oldonload) {oldonload()};
};
})();
window._fbq = window._fbq || [];
window._fbq.push(['track', 'PixelInitialized', {}]);


var google_conversion_id = 1003415762;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
(function() {
var oldonload = window.onload;
window.onload = function() {
  var tag = document.createElement('script');
  tag.async = true;
  // https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html
  var onload = function() {
    if (window.google_trackConversion) {
      window.google_trackConversion();
    }
  };
  if (tag.addEventListener)
    tag.addEventListener('load', onload, false);
  else {
    tag.attachEvent('onreadystatechange', function() {
      if (/complete|loaded/.test(tag.readyState)) onload();
    });
  }
  tag.src = '//www.googleadservices.com/pagead/conversion_async.js';
  var s = document.getElementsByTagName('head')[0];
  s.appendChild(tag);
  if(oldonload) {oldonload()};
};
})();


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46020418-14', 'auto', {'name': 'sourceTracker'});
ga('sourceTracker.send', 'pageview');
