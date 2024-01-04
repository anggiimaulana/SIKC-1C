document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".background img");
    let currentImage = 0;

    function changeImage() {
        images.forEach(img => img.style.opacity = 0);
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].style.opacity = 1;
    }

    setInterval(changeImage, 4000);
});    

document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop(); // Mendapatkan nama halaman saat ini

    // Menetapkan kelas 'active' pada elemen navigasi yang sesuai dengan halaman saat ini
    const navLinks = document.querySelectorAll('.a-navbar');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split("/").pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Pastikan untuk menghapus kelas 'active' dari tautan yang tidak aktif
        }
    });
});

function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const fullImage = document.getElementById('full-image');
    
    fullImage.src = imageSrc;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}

document.getElementById('polindraLogo').addEventListener('click', function() {
    window.location.href = 'https://polindra.ac.id';
});
