function initCarousel() {
  // ваш код...
  let Karysel_Inner = document.querySelector(".carousel__inner").offsetWidth
  let Karysel_Right = document.querySelector(".carousel__arrow_right")
  let Karysel_Left = document.querySelector(".carousel__arrow_left")
  let Karysel_SLide = document.querySelectorAll(".carousel__slide").length

  let slaid=0

    sdvig(slaid, Karysel_Right, Karysel_Left, Karysel_SLide)
     
    Karysel_Right.addEventListener( "click", () => {
    slaid++
    document.querySelector(".carousel__inner").style.transform = `translateX(-${slaid * Karysel_Inner}px)`
    sdvig(slaid, Karysel_Right, Karysel_Left, Karysel_SLide)
  })

  Karysel_Left.addEventListener( "click", () => {
    slaid--
    document.querySelector(".carousel__inner").style.transform = `translateX(-${slaid * Karysel_Inner}px)`
    sdvig(slaid, Karysel_Right, Karysel_Left, Karysel_SLide)
  })
}


function sdvig(slaid, Karysel_Right, Karysel_Left, dKarysel_SLidel) {
  
  if (slaid == 0) {
    Karysel_Left.style.display = 'none'
  } else {
    Karysel_Left.style.display = ''
  }

  if (slaid == dKarysel_SLidel -1) {
    Karysel_Right.style.display = 'none'
  } else {
    Karysel_Right.style.display = ''
  }
}