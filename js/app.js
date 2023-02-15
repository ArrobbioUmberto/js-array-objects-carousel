// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// In questo esercizio è importante seguire le milestone per affrontare in maniera via via crescente le difficoltà di ogni problema.



let picture = ['./img/img1.jpeg', './img/img2.jpeg', './img/img3.jpeg', './img/img4.webp', './img/img5.jpg', './img/img6.webp']

const slideElements = document.querySelectorAll('.carousel .slide')
console.log(slideElements)
const arrowElementRight = document.querySelector('.arrow-right')
console.log(arrowElementRight)
const arrowElementLeft = document.querySelector('.arrow-left')
console.log(arrowElementLeft)

let indiceSlideAttiva = 0

// milestone 2 Al click dell’utente sulle frecce (una a sinistra e una a destra), il programma cambierà l’immagine attiva, 
// che quindi verrà visualizzata al posto della precedente. Attenzione quando arriviamo all’ultima slide e 
// clicchiamo sulla freccia destra, o viceversa se siamo sulla prima e clicchiamo sulla freccia sinistra.
let  carousel = document.querySelector('.carousel')


arrowElementRight.addEventListener('click', function () {

	if (indiceSlideAttiva > 0){
		console.log('current slide', indiceSlideAttiva)
		// avendo inserito il ciclo for che genera l'HTML non mi definisce più la parte di slide.corrente 
			let slideCorrente = slideElements[indiceSlideAttiva]
			console.log(slideCorrente)
			// togliendo la classe active
			slideCorrente.classList.remove('active')
		
			// incremento l'indice
			indiceSlideAttiva += 1
		
			let prossimaSlide = slideElements[indiceSlideAttiva]
			// aggiungiamo la classe active alla seconda slide
			prossimaSlide.classList.add('active')
		
		
			console.log('next slide', indiceSlideAttiva)
	}
   
})
arrowElementLeft.addEventListener('click', function(){
    console.log('current slide', indiceSlideAttiva)

	if (indiceSlideAttiva < slideElements.lenght - 1) {
		
		let slideCorrente = slideElements[indiceSlideAttiva]
		// togliendo la classe active
		slideCorrente.classList.remove('active')
	
		// inremento l'indice
		indiceSlideAttiva -= 1
	
		let prossimaSlide = slideElements[indiceSlideAttiva]
		// aggiungiamo la classe active alla seconda slide
		prossimaSlide.classList.add('active')
	
		console.log('next slide', indiceSlideAttiva)
	}

	
})

for (i = 0; i < picture.length; i++){
    let slide = document.createElement('div')
    slide.classList.add('slide')
    if (i=0){
        slide.classList.add('active')
    }

    let image = document.createElement('img')
    image.src = picture[i]
    slide.appendChild(image)
    carousel.appendChild(slide)
}


// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito per generare 
// il markup delle slide potete usare la concatenazione delle stringe, il template literal o il metodo createElement… a voi la scelta.
// Nel generare il markup fate attenzione che solo una delle 5 slide deve avere la classe active e risultare quindi visibile…


// ciclo delle immagini che devono scorrere 





