$(document).ready(function() {
    $('#display').on('click', function() {
        $(".inactiveOnClick").hide(400);
        $.ajax({
            url: "https://spreadsheets.google.com/feeds/list/1YNKuHfskZjAP8TbFKnBfK7oXhtmCB76rGWWBsO79ZzU/od6/public/values?alt=json",
            success: function(data) {
                var entries = data.feed.entry;

                for (var i = 0; i < entries.length; i++) {
                    var question = entries[i].gsx$question.$t;
                    var reponse = entries[i].gsx$réponse.$t;
                    var num = entries[i].gsx$num.$t;
                    var style = entries[i].gsx$style.$t;
                    var questionSuivante = entries[i].gsx$questionsuivante.$t;
                    var questionGold = entries[i].gsx$boutonquestiongold.$t;

                    $('#content').append('<a href="#' + questionSuivante + '"><div id="' + num + '" class="slideUp fullScreen"style="' + style + '"><h1>' + question + '</h1><h3>' + reponse + '</h3>' + questionGold + '</div></a>');
                }
            }
        });

    });
});
