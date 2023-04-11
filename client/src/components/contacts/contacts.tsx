import React, {
	FC, ChangeEvent, cloneElement, ReactElement, 
	useState, useContext, FormEvent,	SyntheticEvent
} from 'react'
import { Link } from 'react-router-dom'
import { Snackbar, IconButton, SnackbarContent, 
			SnackbarCloseReason } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import FieldContacts from '../field-contacts'
import { PortfolioServiceContext } from '../portfolio-service-provider'

import { TypeContacts as TypeDataContacts } from '../../services/types'
import { emailValidation } from '../../utils/helper'
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
	
	// submit data from form-contacts
	const { postDataContacts } = useContext(PortfolioServiceContext)
	const [success, setSuccess] = useState(false)
	const [errMessage, setErrMessage] = useState('')
	const [isModal, setIsModal] = useState(false)
	const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (name.trim() && email.trim() && message.trim()) {
			if (emailValidation(email)) {
				const dataForm = { name, email, message }
				postDataContacts(JSON.stringify(dataForm))
					.then((res: TypeDataContacts) => {
						setSuccess(true)
						setErrMessage('')
						setName('')
						setEmail('')
						setMessage('')
						setIsModal(false)
						console.log('success: ', res)
					})
					.catch((error: Error) => console.log('error: ', error))
			} else {
				setErrMessage('Введен некорректный email')
				setIsModal(true)
			}
		} else {
			setErrMessage('Необходимо заполнить все поля')
			setIsModal(true)
			console.log('empty fields!')
		}
	}

	const stylesSnackbar = {
		color: '#fff',
		fontFamily: 'Inter',
		backgroundColor: '#893f45'
	}

	const onClose = (e: SyntheticEvent<any>, reason: SnackbarCloseReason): void => {
		if (reason === 'clickaway') {
			return null
		}

		setIsModal(false)
	};


	return (
		<section id='contacts' className={styles.contacts}>
			<div className={styles.boxContacts}>
				<h2 className={styles.headerContacts}>Контакты</h2>
				<div className={styles.contentContacts}>
					<div className={styles.boxFormContacts}>
						<form onSubmit={handleSubmit} className={styles.formContacts}>
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

						<Snackbar open={isModal} onClose={onClose} autoHideDuration={5000}
									anchorOrigin={{ vertical: 'top', horizontal: 'center',}}>
							<SnackbarContent action={<ItemSnackbar onClose={onClose} />}
													style={stylesSnackbar}
													message={errMessage}
							/>
						</Snackbar>
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

const ItemSnackbar: FC<any> = ({onClose}) => {
	return (
		<>
			<IconButton size='small' color='inherit' onClick={onClose}>
				<CloseIcon fontSize='small' />
			</IconButton>
		</>
	)
}


export default Contacts