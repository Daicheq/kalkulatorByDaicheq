let input = document.querySelector('.calculator-head')
const btns = document.querySelectorAll('.btn')
const btnReset = document.querySelector('.reset-btn')
const btnEqual = document.querySelector('.equal-btn')
const btnDelete = document.querySelector('.delete-btn')

const equalValues = () => {
	try {
		const equalV = eval(input.value)
		if (equalV !== undefined) {
			input.value = equalV
		}
	} catch (e) {
		if (e instanceof SyntaxError) {
			alert('Wprowadź poprawne działanie!')
		}
		input.value = ''
	}

	checkLength()
}

const resetInput = () => {
	input.value = ''
	input.style.fontSize = '40px'
}
btns.forEach(btn => {
	btn.addEventListener('click', e => {
		input.value += btn.textContent
		checkLength()
	})
})

const checkLength = () => {
	let lengthValue = input.value
	if (lengthValue.length > 24) {
		input.style.fontSize = '18px'
	} else if (lengthValue.length > 18) {
		input.style.fontSize = '20px'
	} else if (lengthValue.length > 11) {
		input.style.fontSize = '24px'
	}
}

const deleteChar = () => {
	if (input.value == 'Infinity') {
		input.value = ''
	} else {
		let lengthValue = input.value
		input.value = lengthValue.slice(0, -1)
	}
}

input.addEventListener('keyup', e => {
	if (['1', '2', '3', '4', '5', '7', '8', '9', , '0', '*', '/', '+', '-'].indexOf(e.key) === -1) {
		input.value = ''
	}
	checkLength()
})

btnEqual.addEventListener('click', equalValues)
btnReset.addEventListener('click', resetInput)
btnDelete.addEventListener('click', deleteChar)

// zrobić obługę z klawiatury
// MODAL DODAĆ
