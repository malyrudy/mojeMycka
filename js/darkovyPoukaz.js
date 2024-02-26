// Stažení dárkového poukazu 
var imagePaths = ['./images/dárkový_poukaz1.jpg', './images/dárkový_poukaz2.jpg', './images/dárkový_poukaz3.jpg', './images/dárkový_poukaz4.jpg'];

function downloadImage(imagePath, downloadFileName) {
    // Vytvoření odkazu na stáhnutí
    var link = document.createElement('a');
    link.href = imagePath;
    link.download = downloadFileName;

    // Přidání odkazu do těla dokumentu
    document.body.appendChild(link);

    // Simulace kliknutí na odkaz
    link.click();

    // Odstranění odkazu z dokumentu
    document.body.removeChild(link);
}