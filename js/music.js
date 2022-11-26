// music now playing


function update_music() {
    // requires jquery, not a big fan
    // but oh well
    $('#title').load('../snip/Snip_Track.txt');
    $('#artist').load('../snip/Snip_Artist.txt');
    // bypass cache
    $('#cover').attr('src',`../snip/Snip_Artwork.jpg?${Math.random()}`);
}

window.setInterval(update_music, 2000);