"use strict"

let name = prompt('Добрый день, пожалуйста представьтесь!');

if (name) {
	console.log(name, 'добро пожаловать на сайт!');
	} 
	else {
		console.log('Гость, добро пожаловать на сайт!');
}

var calculator = {
	sum: function () {

		let matrix = [];
		let deadline = [];
		let type = [
		['Тип выбранного вами сайта: "Cайт визитка!" Стоимость: 1000 руб! Примерные сроки: 6 дней!',
		'Тип выбранного вами сайта: "Интернет-магазин!" Стоимость: 1500 руб! Примерные сроки: 12 дней!',
		'Тип выбранного вами сайта: "Корпоративный сайт!" Стоимость: 2000 руб! Примерные сроки: 19 дней!'],
		[1000,1500,2000],
		[6,12,19]
		];

		let count1 = prompt('Какой вы желаете тип сайта?\nВыберите из предложенного списка:\n0. Сайт-визитка\n1. Интернет-магазин\n2. Корпоративный сайт');
		
		if (count1 === null || count1 === "") {
			matrix[0] = 0;
			deadline[0] = 0;
			alert('Вы не ввели нужное число!');
		}
		else {
			if (count1 == 0) {
				deadline[0] = type[2][0];
				matrix[0] = type[1][0];		
				console.log(type[0][0]);
		}
		else {
			if (count1 == 1) {
				deadline[0] = type[2][1];
				matrix[0] = type[1][1];
				console.log(type[0][1]);
			}
			else {
				if (count1 == 2) {
					deadline[0] = type[2][2];
					matrix[0] = type[1][2];		
					console.log(type[0][2]);
				}
			}
		}
	}
		
		let design = [
		['Стиль выбранного вами дизайна: "Корпоративный!" Стоимость: 1700 руб! Примерные сроки: 10 дней!',
		'Стиль выбранного вами дизайна: "Рисованный!" Стоимость: 1300 руб! Примерные сроки: 4 дня!',
		'Стиль выбранного вами дизайна: "Материальный!" Стоимость: 1400 руб! Примерные сроки: 7 дней!'],
		[1700,1300,1400],
		[10,4,7]
		];

		let count2 = prompt('Какой вы желаете дизайн сайта?\nВыберите из предложенного списка:\n0. Корпоративный\n1. Рисованный\n2. Материальный');
		
		if (count2 === null || count2 === "") {
			matrix[1] = 0;
			deadline[1] = 0;
			alert('Вы не ввели нужное число!');
		}
		else {
		if (count2 == 0) {
			deadline[1] = design[2][0];
			matrix[1] = design[1][0];		
			console.log(design[0][0]);
		}
		else {
			if (count2 == 1) {
				deadline[1] = design[2][1];
				matrix[1] = design[1][1];
				console.log(design[0][1]);
			}
			else {
				if (count2 == 2) {
					deadline[1] = design[2][2];
					matrix[1] = design[1][2];
					console.log(design[0][2]);
				}
			}
		}
	}


		let layout = [
		['Выбранная вами адаптивность: "Адаптивная!" Стоимость: 2200 руб! Примерные сроки: 8 дней!',
		'Выбранная вами адаптивность: "Мобильная!" Стоимость: 1800 руб! Примерные сроки: 4 дня!',
		'Выбранная вами адаптивность: "Pixel Perfect!" Стоимость: 2600 руб! Примерные сроки: 12 дней!'],
		[2200,1900,2600],
		[8,4,12]
		];

		let count3 = prompt('Какой вы желаете дизайн сайта?\nВыберите из предложенного списка:\n0. Корпоративный\n1. Рисованный\n2. Материальный');
		
		if (count3 === null || count3 === "") {
			matrix[2] = 0;
			deadline[2] = 0;
			alert('Вы не ввели нужное число!');
		}
		else
		if (count3 == 0) {
			deadline[2] = layout[2][0];
			matrix[2] = layout[1][0];		
			console.log(layout[0][0]);
		}
		else {
			if (count3 == 1) {
				deadline[2] = layout[2][1];
				matrix[2] = layout[1][1];		
				console.log(layout[0][1]);
			}
			else {
				if (count3 == 2) {
					deadline[2] = layout[2][2];
					matrix[2] = layout[1][2];		
					console.log(layout[0][2]);
				} 
			}
		}
		console.log('Сроки выполнения работ -', deadline[0] + deadline[1] + deadline[2], 'дня(ей)!');
		console.log('Общая стоимость наших услуг составит -', matrix[0] + matrix[1] + matrix[2], 'руб!');
	}	
}

calculator.sum();