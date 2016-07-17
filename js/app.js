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
                    var color = entries[i].gsx$couleurdufond.$t;
                    var questionSuivante = entries[i].gsx$questionsuivante.$t;
                    var questionGold = entries[i].gsx$hrefgold.$t;

                    $('#content').append('<a href="#' + questionSuivante + '"><div id="' + num + '" class="slideUp fullScreen"style="background-color:' + color + ';"><h1>' + question + '</h1><h3>' + reponse + '</h3>' + questionGold + '</div></a>');
                }
            }
        });
        $.ajax({
            url: "https://spreadsheets.google.com/feeds/list/1UQ8yrJCfB63oDfPmvr1buFD7NsYTuNsDN2uLQccd1MM/od6/public/values?alt=json",
            success: function(data) {
                var entries = data.feed.entry;

                for (var i = 0; i < entries.length; i++) {
                    var questionGold = entries[i].gsx$questionsgold.$t;
                    var reponseGold = entries[i].gsx$reponsesgold.$t;
                    var numGold = entries[i].gsx$numgold.$t;
                    var retourQuestionNormale = entries[i] .gsx$retourquestionnormale.$t;

                    $('#contentGold').append('<a href="#' + retourQuestionNormale + '"><div id=' + numGold + ' class="slideUp fullScreen bgGold"><h1>' + questionGold + '</h1><h3>' + reponseGold + '</h3></div></a>');

                }
            }
        });
    });
});
