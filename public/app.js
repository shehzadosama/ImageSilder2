var index = 0;
showImage(index);

function showImage(ind) {
    index= ind;
    var slides = document.getElementsByClassName('slides');
    if (ind > slides.length-1) {
        index = 0;
    }
    if (ind < 0) {
        index = slides.length-1;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';

}


function incrementIndex() {
    index++;
    showImage(index);
}

function decrementIndex() {
    index--;
    showImage(index);
}
// setInterval(incrementIndex, 1000);

function next(){
   
incrementIndex();

}


function back(){
 
decrementIndex();

}