// this code is in reference to W3 schools
let index = 0;

function slideshow() {
  let i;
  let picture;
  picture= document.getElementsByClassName("pics");
  for (i = 0; i < picture.length; i++) {
    picture[i].style.display = "none";
  }
  index++;
  if (index > picture.length) {index = 1}
  picture[index-1].style.display = "flex";
  setTimeout(slideshow, 3000); // Change image every 3 seconds
}

slideshow();
