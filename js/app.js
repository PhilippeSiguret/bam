$(document).ready(function() {

  $('#bookmark-this').click(function(e) {
    var bookmarkURL = window.location.href;
    var bookmarkTitle = document.title;

    if ('addToHomescreen' in window && window.addToHomescreen.isCompatible) {
      // Mobile browsers
      addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
    } else if (window.sidebar && window.sidebar.addPanel) {
      // Firefox version < 23
      window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
    } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
      // Firefox version >= 23 and Opera Hotlist
      $(this).attr({
        href: bookmarkURL,
        title: bookmarkTitle,
        rel: 'sidebar'
      }).off(e);
      return true;
    } else if (window.external && ('AddFavorite' in window.external)) {
      // IE Favorite
      window.external.AddFavorite(bookmarkURL, bookmarkTitle);
    } else {
      // Other browsers (mainly WebKit - Chrome/Safari)
      alert('Press ' + (/Mac/i.test(navigator.userAgent) ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
    }

    return false;
  });

    $('a').on('click', function() {
        $(".inactiveOnClick").hide(400);
    });
    $('#display').on('click', function() {
        $.ajax({
            url: "https://spreadsheets.google.com/feeds/list/1YNKuHfskZjAP8TbFKnBfK7oXhtmCB76rGWWBsO79ZzU/od6/public/values?alt=json",
            success: function(data) {
                var entries = data.feed.entry;

                for (var i = 0; i < entries.length; i++) {
                    var question = entries[i].gsx$question.$t;
                    var reponse = entries[i].gsx$réponse.$t;
                    var id = entries[i].gsx$id.$t;
                    var style = entries[i].gsx$style.$t;
                    var questionSuivante = entries[i].gsx$questionsuivante.$t;
                    var bouton = entries[i].gsx$bouton.$t;

                    $('#content').append('<a href="#' + questionSuivante + '"><div id="' + id + '" class="fullScreen"style="' + style + '"><h1>' + question + '</h1><h3>' + reponse + '</h3>' + bouton + '</div></a>');
                }
            }
        });
    });

});
