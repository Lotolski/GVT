var filename = 1;

window.onkeydown = function (evt) {
    console.log(evt);
    var key = evt.which ? evt.which : evt.keyCode;
    var c = String.fromCharCode(key);
    switch (c) {
        case ('R'):
            if (filename < 24) {
                filename++;
            }
            else {
                filename = 1;
            }
            loadImage(filename);
            break;
        case ('L'):
            if (filename == 1) {
                filename = 24;
            }
            else {
                filename--
            }
            loadImage(filename);
            break;
    }
};
function loadImage(filename) {
    var imageObj = new Image();
    imageObj.onload = function () {
        var img = document.getElementById('x');
        img.setAttribute('src', this.src);
    };
    imageObj.src = "textures/" + filename + ".png";
}