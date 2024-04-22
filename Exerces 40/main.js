function make_album(artistName, album_title, tracks) {
    var album = {
        artist: artistName,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three function with diffrent values
var album1 = make_album("aurangzaib", "Album title 1");
// printing value of our object created my function
console.log(album1);
