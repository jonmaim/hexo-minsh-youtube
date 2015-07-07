'use strict';

/* first parameter is the youtube video id. */

var minshYoutube = function(args) {
  var youtubeId = args[0];
  if (!youtubeId) { return; }

  return '<div class="video-container"><iframe width="500" height="281" id="youtube_iframe" src="https://www.youtube.com/embed/' + youtubeId + '?feature=oembed&amp;enablejsapi=1&amp;origin=https://safe.txmblr.com&amp;wmode=opaque" frameborder="0"></iframe></div>';
};

hexo.extend.tag.register('minsh_youtube', minshYoutube, {async : false});
