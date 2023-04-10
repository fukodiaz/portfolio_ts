import React, {FC, createElement, ChangeEvent} from 'react'

import styles from './field-contacts.module.less'

type EvChange = ChangeEvent<HTMLInputElement> 
type TypeField = {
	id: string,
	label: string,
	type: string,
	name: string,
	value: string,
	onChange: (e: EvChange) => void,
	placeholder: string,
	className: string
}

const FieldContacts: FC<TypeField> = (props) => {
	const { id, label, type, name, value, 
				onChange, placeholder, className } = props

	return (
		<div className={styles.boxFieldContacts}>
			<label htmlFor={id} className={styles.labelFieldContacts}>
				{label}
			</label>
			{
				createElement(
					name !== 'message' ? 'input' : 'textarea',
					{ 
						id, type, name, value, onChange, placeholder,
						className: styles[className]
					}
				)
			}
		</div>
	)
}

export default FieldContacts