// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// In questo esercizio è importante seguire le milestone per affrontare in maniera via via crescente le difficoltà di ogni problema.




let currentIndex = 0


// RECUPERIAMO DAL DOM IL CAROSELLO DOVE INSERIRE LE SLIDES
const carosello = document.querySelector('.carosello')
console.log(carosello)

const images = [
    {
        image: './img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const playEL = document.getElementById('play')
const stopEl = document.getElementById('stop')
// const repeatEL = document.getElementById('repeat')
const reverseEl = document.getElementById('reverse')





for (let i = 0; i < images.length; i++) {
	const games = images[i]
	const image = games.image
	const title = games.title
	const text = games.text
	console.log(games)
	console.log(games.image)

	// al posto del for si può ottenere la stessa cosa con il foe each

	// images.forEach((image,index)=> {
	// 	const {image,text,title} = games
	// 	let className = 'slide'
	//     if (i === currentIndex) {
	// 	className += ' active'
	//     }
	// 	const htmlSlide = `
    //     <div class="${className}">
	// 	    <img src="${image}" alt="">
	// 	    <div class="description">
	// 	      <h2 id="title" class="title">${title}</h2> 
	// 	      <p  id="text" class="text" >${text}</p>
	// 	    </div>
    //     </div>
    //   `
	//   carosello.innerHTML += htmlSlide
	//   console.log(index,slide)
	// })

	// questa fase appena fatta poteva essere creata anche con la destrutturazione 

	// const { image,text,title} = games

	let className = 'slide'
	if (i === currentIndex) {
		className += ' active'
	}

	const htmlSlide = `
        <div class="${className}">
		    <img src="${image}" alt="">
		    <div class="description">
		      <h2 id="title" class="title">${title}</h2> 
		      <p  id="text" class="text" >${text}</p>
		    </div>
        </div>
      `

	carosello.innerHTML += htmlSlide
	// let titleEL = document.getElementById('title')
    // let textEL = document.getElementById('text')
	// console.log(textEL,titleEL)
	// switch (games.image) {
	// 	case './img/01.webp':
	// 		titleEL.classList.remove('rachet-title','fortnite-title','stray-title','avengers-title')
	// 		titleEL.classList.add('spiderman-title')
	// 	    textEL.classList.remove('rachet-title','fortnite-title','stray-title','avengers-title')
	// 		textEL.classList.add('spiderman-text')
	// 		console.log(textEL)
	// 		break
	// 	case './img/02.webp':
	// 		titleEL.classList.remove('spiderman-title','fortnite-title','stray-title','avengers-title')
	// 		titleEL.classList.add('rachet-title')
	// 		textEL.classList.remove('spiderman-title','fortnite-title','stray-title','avengers-title')
	// 		textEL.classList.add('rachet-text')
	// 		console.log(textEL)
	// 		break
	// 	case './img/03.webp':
	// 		titleEL.classList.remove('rachet-title','spiderman-title','stray-title','avengers-title')
	// 		titleEL.classList.add('fortnite-title')
	// 		textEL.classList.remove('rachet-title','spiderman-title','stray-title','avengers-title')
	// 		textEL.classList.add('fortnite-text')
	// 		console.log(textEL)
	// 		break
	// 	case './img/04.webp':
	// 		titleEL.classList.remove('rachet-title','fortnite-title','spiderman-title','avengers-title')
	// 		titleEL.classList.add('stray-title')
	// 		textEL.classList.remove('rachet-title','fortnite-title','spiderman-title','avengers-title')
	// 		textEL.classList.add('stray-text')
	// 		console.log(textEL)
	// 		break
	// 	case './img/05.webp':
	// 		titleEL.classList.remove('rachet-title','fortnite-title','stray-title','spiderman-title')
	// 		titleEL.classList.add('avengers-title')
	// 		textEL.classList.remove('rachet-title','fortnite-title','stray-title','spiderman-title')
	// 		textEL.classList.add('avengers-text')
	// 		console.log(textEL)
	// 		break
	// }
}


// console.log(images.length,images)
// let immaginiContrario = ''
// let immaginiContrario = images.forEach(element => {
// 	const reverse = images.reverse()
// 	immaginiContrario.push(reverse)
// });
// console.log(immaginiContrario)
// RECUPERATO LE SLIDE DEL CAROSELLO
let slideElements = document.querySelectorAll('.slide')
intervalloAutoPlay = setInterval(autoplay,3000)
function autoplay(){
	let lastIndex = slideElements.length - 1
	if(currentIndex < lastIndex){
		console.log(currentIndex,lastIndex)
		slideElements[currentIndex].classList.remove('active')
		currentIndex = currentIndex + 1
		console.log(currentIndex)
		slideElements[currentIndex].classList.add('active')
	} else if (currentIndex = lastIndex){
		slideElements[currentIndex].classList.remove('active')
		currentIndex = 0
		slideElements[currentIndex].classList.add('active')	
	}	
}

// intervalloreversePlay = setInterval(reverseplay,3000)

// reverseEl.addEventListener('click',function(){
// 	clickPlay = false
// 	if(clickPlay === false){
// 		intervalloreversePlay = setInterval(reverseplay,3000)
// 		function reverseplay (){
// 			let lastIndex = slideElements.length - 1
// 			if(currentIndex < lastIndex){
// 				console.log(currentIndex,lastIndex)
// 				slideElements[lastIndex].classList.remove('active')
// 				lastIndex = lastIndex -1 
// 				console.log(lastIndex)
// 				slideElements[lastIndex].classList.add('active')
// 			} else if (currentIndex = lastIndex){
// 				slideElements[lastIndex].classList.remove('active')
// 				lastIndex = slideElements -1
// 				console.log(lastIndex)
// 				slideElements[lastIndex].classList.add('active')
// 			}
// 		}
// 	}
//  })
playEL.addEventListener('click',function(){
	clickPlay = true
	if (clickPlay){
		intervalloAutoPlay = setInterval(autoplay,3000)
	}
})
stopEl.addEventListener('click',function(){
	clickPlay = false
	clearInterval(intervalloAutoPlay)
	// clearInterval(intervalloreversePlay)
})
// repeatEL.addEventListener('click',function(){
// 	clickRepeat = true
// 	if(clickRepeat){
// 		slideElements[currentIndex].classList.remove('active')
// 		currentIndex = 0
// 		slideElements[currentIndex].classList.add('active')	
// 	}
// })

// Per il tasto di reverse devo invertire i due valori che inserisco per il play 
// il tutto messo all'interno del bottone che fa partire questa cosa 




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


