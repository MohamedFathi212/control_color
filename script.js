function changecolor() {
    let r = parseInt(document.getElementById('r').value);
    let g = parseInt(document.getElementById('g').value);
    let b = parseInt(document.getElementById('b').value);

    var color ='#' + hex(r) + hex(g) + hex(b);
    window.dd.style.backgroundColor = color;

    document.getElementById('hex-label').innerHTML =color;
    document.getElementById('r-label') .innerHTML = r;
    document.getElementById('g-label') .innerHTML = g;
    document.getElementById('b-label') .innerHTML = b;


    if (r < 0 && g < 0 && b < 0) {
        document.getElementById('contaniner').style.color = 'white';
    }else{
        document.getElementById('contaniner').style.color = 'black';
    }
}

function hex(v) {
    var hex = v.toString(16);
    if(v < 16 ){
        hex ="0" + hex;
    }
    return hex;
}