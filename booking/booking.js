let icon = document.querySelector('.ion1')
let swiper = document.querySelector('.swiper')
let display = document.querySelector('.display')

icon.addEventListener('click', () => {
  swiper.classList.toggle('dis')
})
let den1 = document.querySelector('.language1')
let den2 = document.querySelector('.language2')
let den = document.querySelector('.language').addEventListener('click', () => {
  den1.classList.toggle('language1')
  den2.classList.toggle('language2')
})

let down = document.querySelector('.down')
down.addEventListener('click', () => {
  let podmenu = document.querySelectorAll('.podmenu')
  let up = document.querySelector('.up')
  up.classList.remove('up')
  down.classList.add('nona')
  for (let cycle = 0; cycle <= podmenu.length; cycle++){
    podmenu[cycle].classList.remove('nona')
  }
})
let upper = document.querySelector('.up')
upper.addEventListener('click', () => {
  down.classList.remove('nona')
  upper.classList.add('up')
  let podmenue = document.querySelectorAll('.podmenu')
  for (let cycle1 = 0; cycle1 <= podmenue.length; cycle1++){
    podmenue[cycle1].classList.add('nona')
  }
})
    
let out = document.querySelectorAll('.out')
for (let oute = 0; oute < out.length; oute++){
  out[oute].addEventListener('click', () => {
    out[oute].classList.add('nona')
    let check1 = document.querySelectorAll('.check1')
    for (let checked = 0; checked < check1.length; checked++){
      check1[checked].classList.remove('nona')
    }
  })
}
let gg = document.querySelectorAll('.check1')
for (let gg1 = 0; gg1 < gg.length; gg1++){
  gg[gg1].addEventListener('click', () => {
    gg[gg1].classList.add('nona')
  for (let ott = 0; ott < out.length; ott++){
    out[ott].classList.remove('nona')
  }
})
}


let outu = document.querySelectorAll('.outu')
for (let outer = 0; outer < outu.length; outer++){
  outu[outer].addEventListener('click', () => {
    outu[outer].classList.add('nona')
    let check2 = document.querySelectorAll('.check2')
    for (let checkede = 0; checkede < check2.length; checkede++){
      check2[checkede].classList.remove('nona')
    }
  })
}
let aa = document.querySelectorAll('.check2')
for (let aa1 = 0; aa1 < aa.length; aa1++){
  aa[aa1].addEventListener('click', () => {
    aa[aa1].classList.add('nona')
  for (let otter = 0; otter < outu.length; otter++){
    outu[otter].classList.remove('nona')
  }
})
}






let outuu = document.querySelectorAll('.outuu')
for (let outere = 0; outere < outuu.length; outere++){
  outuu[outere].addEventListener('click', () => {
    outuu[outere].classList.add('nona')
    let check3 = document.querySelectorAll('.check3')
    for (let checkeder = 0; checkeder < check3.length; checkeder++){
      check3[checkeder].classList.remove('nona')
    }
  })
}
let aaa = document.querySelectorAll('.check3')
for (let aaa1 = 0; aaa1 < aaa.length; aaa1++){
  aaa[aaa1].addEventListener('click', () => {
    aaa[aaa1].classList.add('nona')
  for (let ottert = 0; ottert < outuu.length; ottert++){
    outuu[ottert].classList.remove('nona')
  }
})
}








let down1 = document.querySelector('.down1')
down1.addEventListener('click', () => {
  let podmenu1 = document.querySelectorAll('.podmenu1')
  let upp = document.querySelector('.up1')
  upp.classList.remove('up1')
  down1.classList.add('nona')
  for (let cycles = 0; cycles <= podmenu1.length; cycles++){
    podmenu1[cycles].classList.remove('nona')
  }
})
let upper1 = document.querySelector('.up1')
upper1.addEventListener('click', () => {
  down1.classList.remove('nona')
  upper1.classList.add('up1')
  let podmenuer = document.querySelectorAll('.podmenu1')
  for (let cycle11 = 0; cycle11 <= podmenuer.length; cycle11++){
    podmenuer[cycle11].classList.add('nona')
  }
})










let outuu1 = document.querySelectorAll('.out1')
for (let outeres = 0; outeres < outuu1.length; outeres++){
  outuu1[outeres].addEventListener('click', () => {
    outuu1[outeres].classList.add('nona')
    let checks = document.querySelectorAll('.checks')
    for (let checkedera = 0; checkedera <= checks.length; checkedera++){
      checks[checkedera].classList.remove('nona')
    }
  })
}
let aaaz = document.querySelectorAll('.checks')
for (let aaaz1 = 0; aaaz1 < aaaz.length; aaaz1++){
  aaaz[aaaz1].addEventListener('click', () => {
    aaaz[aaaz1].classList.add('nona')
  for (let otterta = 0; otterta < outuu1.length; otterta++){
    outuu1[otterta].classList.remove('nona')
  }
})
}




let outuu2 = document.querySelectorAll('.out2')
for (let outeres2 = 0; outeres2 < outuu2.length; outeres2++){
  outuu2[outeres2].addEventListener('click', () => {
    outuu2[outeres2].classList.add('nona')
    let checks1 = document.querySelectorAll('.checks1')
    for (let checkedera1 = 0; checkedera1 <= checks1.length; checkedera1++){
      checks1[checkedera1].classList.remove('nona')
    }
  })
}
let aaaza = document.querySelectorAll('.checks1')
for (let aaaz2 = 0; aaaz2 < aaaza.length; aaaz2++){
  aaaza[aaaz2].addEventListener('click', () => {
    aaaza[aaaz2].classList.add('nona')
  for (let otterta1 = 0; otterta1 < outuu2.length; otterta1++){
    outuu2[otterta1].classList.remove('nona')
  }
})
}





let outuu3 = document.querySelectorAll('.out3')
for (let outeres3 = 0; outeres3 < outuu3.length; outeres3++){
  outuu3[outeres3].addEventListener('click', () => {
    outuu3[outeres3].classList.add('nona')
    let checks2 = document.querySelectorAll('.checks2')
    for (let checkedera2 = 0; checkedera2 <= checks2.length; checkedera2++){
      checks2[checkedera2].classList.remove('nona')
    }
  })
}
let aaaza1 = document.querySelectorAll('.checks2')
for (let aaaz3 = 0; aaaz3 < aaaza1.length; aaaz3++){
  aaaza1[aaaz3].addEventListener('click', () => {
    aaaza1[aaaz3].classList.add('nona')
  for (let otterta2 = 0; otterta2 < outuu3.length; otterta2++){
    outuu3[otterta2].classList.remove('nona')
  }
})
}


let outuu4 = document.querySelectorAll('.out4')
for (let outeres4 = 0; outeres4 < outuu4.length; outeres4++){
  outuu4[outeres4].addEventListener('click', () => {
    outuu4[outeres4].classList.add('nona')
    let checks3 = document.querySelectorAll('.checks3')
    for (let checkedera3 = 0; checkedera3 <= checks3.length; checkedera3++){
      checks3[checkedera3].classList.remove('nona')
    }
  })
}
let aaaza2 = document.querySelectorAll('.checks3')
for (let aaaz4 = 0; aaaz4 < aaaza1.length; aaaz4++){
  aaaza2[aaaz4].addEventListener('click', () => {
    aaaza2[aaaz4].classList.add('nona')
  for (let otterta3 = 0; otterta3 < outuu4.length; otterta3++){
    outuu4[otterta3].classList.remove('nona')
  }
})
}

let outuu5 = document.querySelectorAll('.out5')
for (let outeres5 = 0; outeres5 < outuu5.length; outeres5++){
  outuu5[outeres5].addEventListener('click', () => {
    outuu5[outeres5].classList.add('nona')
    let checks4 = document.querySelectorAll('.checks4')
    for (let checkedera4 = 0; checkedera4 <= checks4.length; checkedera4++){
      checks4[checkedera4].classList.remove('nona')
    }
  })
}
let aaaza3 = document.querySelectorAll('.checks4')
for (let aaaz5 = 0; aaaz5 < aaaza3.length; aaaz5++){
  aaaza3[aaaz5].addEventListener('click', () => {
    aaaza3[aaaz5].classList.add('nona')
  for (let otterta4 = 0; otterta4 < outuu5.length; otterta4++){
    outuu5[otterta4].classList.remove('nona')
  }
})
}