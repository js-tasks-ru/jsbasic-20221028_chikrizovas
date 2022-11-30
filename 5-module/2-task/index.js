function toggleText() {
  // ваш код...
  let per=document.querySelector('.toggle-text-button')
  per.onclick = function () 
  { 
    document.querySelector('#text').hidden = ( document.querySelector('#text').hidden==true ? false : true) 
  }
}
