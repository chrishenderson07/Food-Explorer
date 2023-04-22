import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import { ButtonLogo } from '../ButtonLogo'
import { Input } from '../Input'
import { HamburgerMenu } from '../HamburgerMenu'

import { Container } from './styles'

import { BsHexagonFill, BsReceipt, BsSearch } from 'react-icons/bs'
import { RxExit } from 'react-icons/rx'

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false)

	const navigate = useNavigate()
	return (
		<Container>
			<nav>
				<div className="menu-hamburger ">
					<div className="hamburger">
						<HamburgerMenu
							className="hambMenu"
							onClick={() => setMenuOpen(!menuOpen)}
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
							title="Meus favoritos"
							className="textFavorites"
							onClick={() => navigate('/favorites')}
						/>

						<ButtonText
							className="textOrders"
							title="Histórico de Pedidos"
							onClick={() => navigate('/orders')}
						/>

						<ButtonText
							title="Sair"
							className="textExit"
							onClick={() => {
								navigate('/')
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
							onClick={navigate('/')}
						/>
					</div>
				)}

				{menuOpen ? (
					''
				) : (
					<div className="mobile-cart">
						<ButtonText
							iconSize={30}
							Icon={BsReceipt}
							className="mobile-cart-count"
							onClick={() => navigate('/cart')}
						/>
						<p>10</p>
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

				<div className="favorites">
					<ButtonText
						title="Meus favoritos"
						onClick={() => navigate('/favorites')}
					/>
				</div>

				<div className="orders">
					<ButtonText
						title="Histórico de Pedidos"
						onClick={() => navigate('/orders')}
					/>
				</div>

				<div className="cart">
					<Button
						title="Pedidos"
						Icon={BsReceipt}
						onClick={() => navigate('/cart')}
					/>
				</div>

				<div className="exit">
					<ButtonText
						Icon={RxExit}
						iconSize={32}
						onClick={() => {
							navigate('/')
						}}
					/>
				</div>
			</nav>
		</Container>
	)
}
