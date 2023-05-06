import { useState } from 'react'

import { Container, Options, Option, SelectedOption } from './styles'

import { RxCaretDown } from 'react-icons/rx'

export function Select({ placeholder, onChange, name, title, ...rest }) {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedValue, setSelectedValue] = useState('Pratos Principais')

	const [categoriesOption, setCategoriesOption] = useState([
		'Pratos Principais',
		'Sobremesas',
		'Drinks',
	])

	const selectedOption = categoriesOption.find(
		({ value }) => value === selectedValue,
	)

	function handleIsOpen(event) {
		event.preventDefault()
		setIsOpen((state) => !state)
	}

	function changeSelectedValue(value) {
		setSelectedValue(value)
		onChange && onChange(value)
	}

	return (
		<Container>
			<label htmlFor={name}>{title}</label>

			{/* 			<SelectedOption>{selectedOption?.label ?? placeholder}</SelectedOption>
			<button onClick={handleIsOpen}>
				<RxCaretDown />
			</button>

			{isOpen ? (
				<Options isOpen={isOpen}>
					{categoriesOption.map((option) => (
						<Option>{option}</Option>
					))}
				</Options>
			) : (
				''
			)} */}

			<select
				value={selectedValue}
				name={name}
				onChange={() => {
					changeSelectedValue()
				}}>
				{categoriesOption.map((option) => (
					<option
						key={option}
						value={option}>
						{option}
					</option>
				))}
			</select>
		</Container>
	)
}
