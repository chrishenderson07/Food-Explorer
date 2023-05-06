import { useAuth } from '../../hooks/auth'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import { ButtonLogo } from '../ButtonLogo'
import { Input } from '../Input'
import { HamburgerMenu } from '../HamburgerMenu'

import { Container } from './styles'

import { BsHexagonFill, BsSearch } from 'react-icons/bs'
import { RxExit } from 'react-icons/rx'

export function HeaderAdm() {
	const [menuOpen, setMenuOpen] = useState()

	const { signOut } = useAuth()
	const navigate = useNavigate()

	function handleSignOut() {
		signOut()
		navigate('/')
	}

	return (
		<Container>
			<nav>
				<div className="menu-hamburger ">
					<div className="hamburger">
						<HamburgerMenu
							className="hambMenu"
							onClick={() => {
								setMenuOpen(!menuOpen)
							}}
							menuOpen={menuOpen}
							title="Menu"
						/>
						<p>{menuOpen ? 'Menu' : ''}</p>
					</div>

					<div className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
						<div className="search">
							<BsSearch
								size={20}
								color="#C4C4CC"
							/>
							<Input placeholder="Busque por pratos ou ingredientes" />
						</div>

						<ButtonText
							title="Novo Prato"
							className="textFavorites"
							onClick={() => navigate('/new-plate')}
						/>

						<ButtonText
							title="Sair"
							className="textExit"
							onClick={() => {
								handleSignOut()
							}}
						/>
					</div>
				</div>
				{menuOpen ? (
					''
				) : (
					<div className="logo">
						<ButtonLogo
							Icon={BsHexagonFill}
							iconSize="30"
							iconColor="#065E7C"
							title="food explorer"
							onClick={() => navigate('/')}
						/>
						<p>admin</p>
					</div>
				)}

				<div
					className="search"
					id="search">
					<BsSearch
						size={20}
						color="#C4C4CC"
					/>
					<Input placeholder="Busque por pratos ou ingredientes" />
				</div>

				<div className="newPlate">
					<Button
						title="Novo Prato"
						onClick={() => navigate('/new-plate')}
					/>
				</div>

				<div className="exit">
					<ButtonText
						Icon={RxExit}
						iconSize={32}
						onClick={() => {
							handleSignOut()
						}}
					/>
				</div>
			</nav>
		</Container>
	)
}
