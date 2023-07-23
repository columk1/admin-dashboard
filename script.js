function generate() {

    var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];

    function populate(a) {
    for ( var i = 0; i < 6; i++ ) {
        var x = Math.round( Math.random() * 14 );
        var y = hexValues[x];
        a += y;
    }
    return a;
    }

    let images = document.querySelectorAll('.project-img');

    for (i = 0; i < images.length; i++) {
        var newColor1 = populate('#');
        var newColor2 = populate('#');
        var angle = Math.round( Math.random() * 360 );

        var gradient = "linear-gradient(" + angle + "deg, " + "rgb(71,216,159)" + ", " + newColor2 + ")";

        images[i].style.background = gradient;
    }
}

generate();