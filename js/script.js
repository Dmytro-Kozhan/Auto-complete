const country = ['Україна', 'Румунія', 'Польща', 'Англія', 'Франція', 'Іспанія',
				'Німеччина', 'Велика Британія', 'Італія', 'Норвегія', 'Фінляндія',
				'Хорватія', 'Нідерланди', 'Угорщина', 'Узбекістан'
]

const input = document.querySelector('.country')

// Створюємо список
const list = document.createElement('div')
list.classList.add('list')
input.after(list)


// Масив з результатом
let res = []

input.addEventListener('input', () => {

	list.innerHTML = ''

	country.forEach((data, index) => {
		let search = searchFunction(input.value, data)
		if(search === -1) return
		res.push(index)
		
		// Для жирного шрифту
		const parts = [
			data.substr(0, search),
			data.substr(search, input.value.length),
			data.substr(search + input.value.length, data.length - search - input.value.length)
		]

		const item = document.createElement('div')
		item.classList.add('item')
		item.innerHTML = parts[0] + `<strong>${parts[1]}</strong>` + parts[2]
		list.append(item)
		list.style.display = 'block'


		item.addEventListener('click', () => {
			input.value = item.textContent
			list.style.display = 'none'
			list.innerHTML = ''
		})

	})

	if(input.value == '') {
		list.innerHTML = ''
		list.style.display = 'none'
	}

})


function searchFunction(what, where) {
	return where.toUpperCase().search(what.toUpperCase())
}