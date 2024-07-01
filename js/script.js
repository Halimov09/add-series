'use strict'

const adv = document.querySelectorAll('.promo__adv img'),
  wrapper = document.querySelector('.promo__bg'),
  genre = wrapper.querySelector('.promo__genre'),
  seriesList = document.querySelector('.promo__interactive-list'),
  subm = document.querySelector(".add"),
  inp = document.querySelector(".adding__input"),
  check = document.querySelector("[type=checkbox]"),
  delet = document.querySelectorAll(".delete")

const seriesDB = {
  series: [
    'Omar',
    'The Final Legacy',
    'Ertugrul',
    'Magnificent Century',
    'The Great Seljuks: Guardians...',
  ],
}

function genr() {
  adv.forEach((item) => {
    item.remove()
  })
  
  genre.innerHTML = "Comedy"
  
  wrapper.style.backgroundImage = `url(img/1.jpg)`
}



subm.addEventListener(`submit`, (event) => {
  event.preventDefault()
  let val = inp.value
  
  if (val) {
    if (val.length > 18) {
      val = `${val.substring(0, 18)}...`
    }
    if (check.checked) {
      console.log("sevimli film");
    }
  seriesDB.series.push(val)
  sorts(seriesDB.series)
  push(seriesDB.series, seriesList)
  event.target.reset()
}

})



function push(params, parent) {
  parent.innerHTML = ""
  params.forEach((item, i) => {
    seriesList.innerHTML += `
    <li class="promo__interactive-item">
       ${i + 1}  ${item}
      <div class="delete"></div>
    </li>
    `
  })
  document.querySelectorAll(".delete").forEach((item, idx) => {
      item.addEventListener('click' , () => {
      item.parentElement.remove()
      seriesDB.series.splice(idx, 1)
      push(seriesDB.series, seriesList)
    })
  })
}

function sorts(sor) {
  sor.sort()
}

console.log(delet);



genr()
sorts(seriesDB.series)
push(seriesDB.series, seriesList)