let input = document.querySelector('.calculator-head')
const btns = document.querySelectorAll('.btn')
const btnReset = document.querySelector('.reset-btn')
const btnEqual = document.querySelector('.equal-btn')
const btnDelete = document.querySelector('.delete-btn')

const equalValues = () => {
	let lengthValue = input.value
	if (lengthValue.slice(-2) !== '/0') {
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
	} else {
		alert('Cholero nie dziel przez ZERO!')
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
	if (e.keyCode == 13) {
		equalValues()
	} else if (
		//backspace
		e.keyCode == 8 ||
		// numbers
		e.keyCode == 16 ||
		e.keyCode == 48 ||
		e.keyCode == 49 ||
		e.keyCode == 50 ||
		e.keyCode == 51 ||
		e.keyCode == 52 ||
		e.keyCode == 53 ||
		e.keyCode == 54 ||
		e.keyCode == 55 ||
		e.keyCode == 56 ||
		e.keyCode == 57 ||
		e.keyCode == 58 ||
		e.keyCode == 59 ||
		// numpad
		e.keyCode == 96 ||
		e.keyCode == 97 ||
		e.keyCode == 98 ||
		e.keyCode == 99 ||
		e.keyCode == 100 ||
		e.keyCode == 101 ||
		e.keyCode == 102 ||
		e.keyCode == 103 ||
		e.keyCode == 104 ||
		e.keyCode == 105 ||
		// operators +-/ with shift
		e.keyCode == 106 ||
		e.keyCode == 107 ||
		e.keyCode == 109 ||
		e.keyCode == 110 ||
		e.keyCode == 111 ||
		e.keyCode == 187 ||
		e.keyCode == 189 ||
		e.keyCode == 191 ||
		e.keyCode == 190
	) {
		checkLength()
	} else {
		input.value = ''
	}
})

btnEqual.addEventListener('click', equalValues)
input.onkeyup = function (e) {
	if (e.keyCode == 13) {
		equalValues()
	}
}
btnReset.addEventListener('click', resetInput)
btnDelete.addEventListener('click', deleteChar)
