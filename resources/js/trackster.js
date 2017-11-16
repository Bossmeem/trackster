$(document).ready(function() {
  var Trackster = {};
  $('#search').click(function() {
    Trackster.searchTracksByTitle($('#input1').val()
    );
  });
  const API_KEY = '46afba08ac51b2749efffb5f17236e03';


/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + 'title' + '&api_key=' + API_KEY;
    datatype: jsonp;
    success: funtion(){
        console.log('results');
      };

  });
};

});
