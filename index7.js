let albumsArray = {
    myAlbums: [{
            albumName: "All Eyez on me",
            artist: "2Pac"
        },{
            albumName: "Life After Death",
            artist: "Notorious B.I.G."
        },{
            albumName: "Songs About Jane",
            artist: "Maroon 5"
        },{
            albumName: "Hands All Over",
            artist: "Maroon 5"
        },{
            albumName: "Bleach",
            artist: "Nirvana"
        },{
            albumName: "Message From 9 to the Universe",
            artist: "Jimi Hendrix"
        },{
            albumName: "Foo Fighters",
            artist: "Foo Fighters"
        },{
            albumName: "Red Pill Blues",
            artist: "Maroon 5"
        }]
};

let artistsArray = albumsArray.myAlbums.filter((item) => {
    return item.artist === "Maroon 5";
});

console.log(artistsArray);

albumsArray = albumsArray.myAlbums.filter((item) => {
    return item.artist !== "Maroon 5";
});

console.log(albumsArray);