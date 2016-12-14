//requête http (première ligne)
//Récupération de la biographie

$.get("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Muse&api_key=cf76948b5124ef3a4a21bcacba7e5fa1&format=json")
    .then(function(data) { //function callback, prend données du fichier qui a été donnée
        //$("#bio p").html(data.artist.bio.content);
        //$("#bio").css({ 'background-image': 'url(' + data.artist.image[4]['#text'] + ')' });
    });

$.get("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Muse&api_key=cf76948b5124ef3a4a21bcacba7e5fa1&format=json")
    .then(function(data) {
        // console.log(data);
        // console.log(data.topalbums.album[0].name);
        // console.log(data.topalbums.album[0].image[1]['#text']);
        // $(".imgAlbum").css({ 'background-image': 'url(' + data.topalbums.album[0].image[3]['#text'] + ')' });
        // $(".albumName").html(data.topalbums.album[0].name);

    })
    .fail(function() {
        // alert("Error URL! ");
    })
    .always(function() {
        // alert("Récupération des données fini");
    });