import React, {FC, ChangeEvent, cloneElement, ReactElement, useState} from 'react'
import { Link } from 'react-router-dom'

import FieldContacts from '../field-contacts'

import { contactsData, TypeContacts } from '../../data/contactsData'
import { AiOutlineSend } from 'react-icons/ai'
import imgContacts from './contacts.svg'
import styles from './contacts.module.less'

const Contacts: FC = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const onChangeName = (e: ChangeEvent<HTMLInputElement>):void => setName(e.target.value)
	const onChangeEmail = (e: ChangeEvent<HTMLInputElement>):void => setEmail(e.target.value)
	const onChangeMessage = (e: ChangeEvent<HTMLInputElement>):void => setMessage(e.target.value)
	const createItemContact = ({label, link, content, nodeIcon}: TypeContacts): ReactElement => (
		<li key={label} className={styles.itemContact}>
			<Link to={link} className={styles.linkContact}>
				{
					cloneElement(nodeIcon, { className: styles.iconLinkContact })
				}
			</Link>
			<p className={styles.boxContentContact}>
				<Link to={link} className={styles.contentItemContact}>
					{content}
				</Link>
			</p>
		</li>
	) 

	return (
		<section id='contacts' className={styles.contacts}>
			<div className={styles.boxContacts}>
				<h2 className={styles.headerContacts}>Контакты</h2>
				<div className={styles.contentContacts}>
					<div className={styles.boxFormContacts}>
						<form className={styles.formContacts}>
							<FieldContacts id='name' label='Имя' type='text' name='name' 
												value={name} placeholder='Федор Иванов' className='inputContacts'
												onChange={onChangeName}
												/>
							<FieldContacts id='email' label='Email' type='email' name='email' 
												value={email} placeholder='example@gmail.com' className='inputContacts'
												onChange={onChangeEmail}
												/>
							<FieldContacts id='message' label='Сообщение' type='text' name='message' 
												value={message} placeholder='Написать сообщение...' 
												className='textareaContacts' onChange={onChangeMessage}
												/>
							<p className={styles.boxBtnSubmitContacts}>
								<button type='submit' className={styles.btnSubmitContacts}>
									<p className={styles.textSubmit}>Отправить</p>
									<p className={styles.boxIconSubmit}>
										<AiOutlineSend className={styles.iconSubmit} />
									</p>
								</button>
							</p>
						</form>
					</div>

					<ul className={styles.listContacts}>
						{
							contactsData.length && contactsData.map(createItemContact)
						}
					</ul>
				</div>

			</div>
			<img  src={imgContacts} alt='contacts' className={styles.imageContacts} />
		</section>
	)
}

export default Contacts