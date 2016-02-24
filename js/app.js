$(document).ready(function() {
  $('#display').on('click',function(){

      $.ajax({
        url: "https://spreadsheets.google.com/feeds/list/1YNKuHfskZjAP8TbFKnBfK7oXhtmCB76rGWWBsO79ZzU/od6/public/values?alt=json",
        success: function(data) {
          var entries = data.feed.entry;


          for (var i = 0 ; i < entries.length; i++) {
            var question = entries[i].gsx$question.$t;
            var reponse = entries[i].gsx$réponse.$t;
            var num = entries[i].gsx$n.$t;

            $('#content').append('<div class="question container-fluid" id="' + i + '""><div class="row"><div class="col-xs-8 col-xs-offset-2"><div class="vertical-spacer"></div><h2>' + question + '</h2></div></div><div class="vertical-spacer"></div>');
            $('#content').append('<div class="question container-fluid"><div class="row"><div class="col-xs-8 col-xs-offset-2"><h3>' + reponse + '</h3><div class="vertical-spacer"></div></div></div></div>');
            $('#content').append('<div class="question container-fluid"><div class="col-xs-8 col-xs-offset-2"><a class="btn btn-primary page-scroll" href="#' + num + '" role="button">Question suivante</a></div><div class="vertical-spacer"></div><hr></div></div>');
          }
        }
      });
  });
});

