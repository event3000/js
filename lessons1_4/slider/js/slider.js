(function(){

'use strict';





let slider = {
	innit: function(id) { // создаем ul

		this.elem = document.createElement("ul"); // созд-ем
		document.getElementById(id).appendChild(this.elem); // привязываем к родителю
		this.curentSlide = 0; // счетчик
	},

	addSlide: function(src, alt) { //  создаем сам слайд li c img
		let li = document.createElement("li");
		let img = document.createElement("img");
		img.setAttribute("src", src);
		img.setAttribute("alt", alt);

		img.style.height = window.innerHeight + "px"; // доб размер окна
		img.style.width  = window.innerWidth + "px"; // доб размер окна

		li.appendChild(img);
		this.elem.appendChild(li);
	},

	nextSlide: function(){ //перекл слайд
		if (this.curentSlide < this.allSlides.length-1) {
		 	this.allSlides[this.curentSlide].classList.remove("active");
		 	this.allSlides[this.curentSlide+1].classList.add("active");
		 	this.curentSlide++;
		} else {
			this.curentSlide = 0;
			this.allSlides[this.allSlides.length-1].classList.remove("active") ;
			this.allSlides[0].classList.add("active");
		}

	},

	runSlider: function() { // просто запуск слайдера
		this.allSlides = document.querySelectorAll("#slider > ul > li"); // найти эл-ты кот соот-ют селектору и в массив
		this.nextSlide();
		setInterval(this.nextSlide.bind(this), 3000); // привязк к объекту this
	},

	setSize: function() {
		let imgs = document.querySelectorAll("img");
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.height = window.innerHeight + "px";
			imgs[i].style.width = window.innerWidth + "px";
		}
	}
};

slider.innit("slider");
slider.addSlide("img/slider01.jpg");
slider.addSlide("img/slider02.jpg");
slider.addSlide("img/slider03.jpg");
slider.runSlider();

window.addEventListener("resize", slider.setSize);

// global.innitSlider = slider.innit.bind(slider); // ВЫНОС В ОТД ФАЙЛ ЕСЛИ



}() );


/////////// в др js файле

// innitSlider('slider');
