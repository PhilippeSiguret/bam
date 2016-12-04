$(document).ready(function() {

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
