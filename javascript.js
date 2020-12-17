const imagesSlide = document.querySelector('.images-slide');
const imagesImages = document.querySelectorAll('.images-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = imagesImages[0].clientWidth;

imagesSlide.style.tranform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= imagesImages.lenght -1) return;
imagesSlide.style.transition = "transform 0.4s ease-in-out";
counter++;
imagesSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
imagesSlide.style.transition = "transform 0.4s ease-in-out";
counter--;
imagesSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

imagesSlide.addEventListener('transitionend', () => {
if(imagesImages[counter].id == 'lastClone') {
   imagesSlide.style.transition = "none";
   counter = imagesImages.length - 2;
   imagesSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


}

if(imagesImages[counter].id == 'firstClone') {
imagesSlide.style.transition = "none";
counter = imagesImages.length - counter;
imagesSlide.style. transform = 'translateX(' + (-size * counter) + 'px)';



}













































})