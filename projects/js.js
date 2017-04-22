function change(el){

  var lpimg = document.getElementById('lpimg');

  lpimg.src = el.style.backgroundImage.replace(/url\(/, '').replace(/"/, '').replace(/"/, '').replace(/'/, '').replace(/'/, '').replace(/\)/, '');

  //lpimg.src = el.style.backgroundImage.substring(4,el.style.backgroundImage.length-1);

  var newlp = lpimg.cloneNode(true);
  lpimg.parentNode.replaceChild(newlp, lpimg);

  window.scrollTo(0, document.getElementById('lpimg').offsetTop);

}
