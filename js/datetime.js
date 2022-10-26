// date & time


function update_date_time() {
    let date_now = new Date(Date.now());
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    document.getElementById('time').innerHTML = `${fixed(date_now.toLocaleTimeString())}`;
    document.getElementById('date').textContent = `${pad_num(date_now.getDate())} ${months[date_now.getMonth()]} ${date_now.getFullYear()}`;
}

// pad number
function pad_num(text) {
    if (parseInt(text) < 10)
        return `0${text}`;
    else
        return text;
}

// fixed-width
function fixed(text) {
    return text.split('').map(c => {
        const span = `<span digit="${c}">${c}</span>`;
        return span;
    }).join('');
}


// interval
window.setInterval(update_date_time, 1000);