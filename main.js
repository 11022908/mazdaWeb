let slideIndex = 1;
showSlide(slideIndex);

function nextSlide(n){
    showSlide(slideIndex += n);
}

function currentSlide(n){
    showSlide(slideIndex = n);
}

function showSlide(n){
    let i;
    let slides = document.getElementsByClassName('myslide');
    let circles = document.getElementsByClassName('circle');
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }

    for(i = 0; i < circles.length; i++){
        circles[i].className = circles[i].className.replace("active","");
    }

    slides[slideIndex - 1].style.display = "block";
    circles[slideIndex - 1].className += "active";
}


// nav right remove / menu
