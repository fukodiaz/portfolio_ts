import React, {FC, ChangeEvent, useState} from 'react'

import FieldContacts from '../field-contacts'

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

					<div className={styles.personalContacts}>
						<ul className={styles.listContacts}>

						</ul>
						<ul className={styles.listSocialMedia}>

						</ul>
					</div>
				</div>

			</div>
			<img  src={imgContacts} alt='contacts' className={styles.imageContacts} />
		</section>
	)
}

export default Contacts