const thumbnails = document.querySelectorAll('.thumbnails img');
const mainImg = document.getElementById('main-img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImg.src = thumbnail.src;
    });
});
