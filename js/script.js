let arrow = document.querySelectorAll(".arrow");
for(let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", changeImageNext);
}
function changeImageNext (e) {
    let target = e.target.parentElement || e.srcElement.parentElement;
    let arr = [...target.children];// преобразовываем html collection в массив
    let arrImage = arr.slice(0, 3);
    let currentImage = target.querySelector("img:not(.slider)");//текущее изображение 
    for (let i = 0; i < arrImage.length; i++) {
        if (arrImage[i] == currentImage) {
            currentImage.classList.add("slider");
            if (e.target.alt == "arrow-next") {
                if (i+1 < arrImage.length) {
                arrImage[i+1].classList.remove("slider");
                }
                else {
                arrImage[0].classList.remove("slider");
                }
            }
            else if (e.target.alt == "arrow-back") {
                if (i == 0) {
                arrImage[arrImage.length -1].classList.remove("slider"); 
                }
                else {
                arrImage[i - 1].classList.remove("slider"); 
                }
            }
        }
    }
}
let btn = document.querySelectorAll(".feedback");
for(let j = 0; j < btn.length; j++) {
    btn[j].addEventListener("click", formFeedback);
}
function formFeedback (e) {
    e.preventDefault();
    let scrollBlock = document.getElementById("feedback");
    window.scrollTo(0, scrollBlock.offsetTop);
}
const imageTags = [...document.querySelectorAll('img[data-big-img-src]')];
imageTags.forEach(imageTag => {
        const newImageTag = document.createElement('img');
        newImageTag.src = imageTag.dataset['bigImgSrc'];
        newImageTag.alt = imageTag.alt;
        newImageTag.className = imageTag.className;
        newImageTag.onload = () => { imageTag.replaceWith(newImageTag) }
});