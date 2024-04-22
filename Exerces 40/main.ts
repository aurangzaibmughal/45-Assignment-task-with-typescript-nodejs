function make_album(artistName:string, album_title: string, tracks?: number){
    let album:{artist: string, title:string, tracks?: number} = {
        artist: artistName, 
        title: album_title,

    };
    if (tracks !== undefined){
        album.tracks = tracks;

    }
    return album;
}
// Calling three function with diffrent values
let album1 = make_album("aurangzaib" , "Album title 1")

// printing value of our object created my function

console.log(album1);