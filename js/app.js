// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// In questo esercizio è importante seguire le milestone per affrontare in maniera via via crescente le difficoltà di ogni problema.



let images = ['./img/01.webp','./img/02.webp','./img/03.webp','./img/04.webp','./img/05.webp']


let currentIndex = 0

// RECUPERIAMO DAL DOM IL CAROSELLO DOVE INSERIRE LE SLIDES
const carosello = document.querySelector('.carosello')
console.log(carosello)

for (let i = 0; i < images.length; i++) {
	const srcImage = images[i]
	console.log(srcImage)

	let className = 'slide'
	if (i === currentIndex) {
		className += ' active'
	}

	const htmlSlide = `
    <div class="${className}">
      <img src="${srcImage}" alt="">
    </div>
  `

	carosello.innerHTML += htmlSlide
}

// RECUPERATO LE SLIDE DEL CAROSELLO
let slideElements = document.querySelectorAll('.carosello .slide')
// slideElements = [...slideElements]
console.log(slideElements)

// RECUPERATO I DUE CONTROLLI
const arrowLeftElement = document.getElementById('arrow-left')
const arrowRightElement = document.getElementById('arrow-right')

console.log(arrowLeftElement, arrowRightElement)

// slideElements[currentIndex].classList.add('active')

//AGGANCIAMO GLI EVENT LISTENER AI CONTROLLI
arrowLeftElement.addEventListener('click', function () {
	console.log('prev slide')

	//nascondere la slide attiva
	console.log(slideElements[currentIndex])
	slideElements[currentIndex].classList.remove('active')

	if (currentIndex > 0) {
		currentIndex--
	} else {
		currentIndex = slideElements.length - 1 //last index
	}

	// mostrare la slide precedente
	console.log(slideElements[currentIndex])
	slideElements[currentIndex].classList.add('active')
	// aggiornare il currentIndex
})

arrowRightElement.addEventListener('click', function () {
	console.log('next slide')
	console.log(currentIndex)

	const lastIndex = slideElements.length - 1

	// if (currentIndex < lastIndex) {
	// nascondere la slide attiva
	console.log(slideElements[currentIndex])
	slideElements[currentIndex].classList.remove('active')

	if (currentIndex < lastIndex) {
		currentIndex += 1
	} else {
		currentIndex = 0
	}

	// mostrare la slide successiva
	console.log(slideElements[currentIndex])
	slideElements[currentIndex].classList.add('active')

	// aggiornare il currentIndex

	// }
})


