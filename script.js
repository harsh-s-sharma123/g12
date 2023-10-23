document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('imageContainer');
    const folderPath = 'images/';

    // Function to fetch images from the folder
    function fetchImages() {
        fetch(folderPath)
            .then(response => response.text())
            .then(text => {
                const parser = new DOMParser();
                const htmlDocument = parser.parseFromString(text, 'text/html');
                const links = Array.from(htmlDocument.querySelectorAll('a'));
                links.forEach(link => {
                    if (/\.(jpe?g|png|gif)$/i.test(link.href)) {
                        const img = document.createElement('img');
                        img.src = link.href;
                        imageContainer.appendChild(img);
                    }
                });
            });
    }

    fetchImages();
});
