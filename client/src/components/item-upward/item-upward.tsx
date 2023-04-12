import React, { FC, useState, useEffect } from 'react'

import { IoIosArrowDropupCircle } from 'react-icons/io'
import styles from './item-upward.module.less'

const ItemUpward: FC = () => {
	const [isShown, setIsShown] = useState(true)

	const onClick = ():void => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	const onShow = () => {
		const scrolled = document.documentElement.scrollTop

		if (scrolled > 300) {
			setIsShown(true)
		} else if (scrolled <= 300) {
			setIsShown(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', onShow)

		return () => window.removeEventListener('scroll', onShow)
	}, [])

	return (
		<div  className={styles.itemUpward}
				style={{ display: isShown ? 'inline-flex' : 'none' }}>
			<button  className={styles.btnUpward}
						onClick={onClick}>
				<IoIosArrowDropupCircle className={styles.iconUpward} />
			</button>
		</div>
	)
}

export default ItemUpward