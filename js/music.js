// music now playing


let previous_title;

function update_music() {
    // requires jquery, not a big fan
    // but oh well
    $('#title').load('../snip/Snip_Track.txt');
    $('#artist').load('../snip/Snip_Artist.txt');

    // check if new song
    if (previous_title != document.getElementById('title').textContent) {
        // bypass cache
        $('#cover').attr('src',`../snip/Snip_Artwork.jpg?${Math.random()}`);
        try { $('#mimic-bg').attr('style',`background-image: url(../snip/Snip_Artwork.jpg?${Math.random()});`); } catch(e) {}
        previous_title = document.getElementById('title').textContent;
    }
}

window.setInterval(update_music, 2000);