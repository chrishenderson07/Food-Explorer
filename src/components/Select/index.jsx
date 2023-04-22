import { useState } from 'react'

import { Container, Options, Option, SelectedOption } from './styles'

import { RxCaretDown } from 'react-icons/rx'

export function Select({ placeholder, onChange }) {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedValue, setSelectedValue] = useState(0)

	const selectedOption = options.find(({ value }) => value === selectedValue)

	function handleIsOpen(event) {
		event.preventDefault()
		setIsOpen((state) => !state)
	}

	function changeSelectedValue(value) {
		setSelectedValue(value)
		onChange && onChange(value)
	}

	return (
		<Container isOpen={isOpen}>
			<SelectedOption>{selectedOption?.label ?? placeholder}</SelectedOption>

			<button onClick={handleIsOpen}>
				<RxCaretDown />
			</button>

			<Options isOpen={isOpen}>{isOpen && console.log(options)}</Options>
		</Container>
	)
}
