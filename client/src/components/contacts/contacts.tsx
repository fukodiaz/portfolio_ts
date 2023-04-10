import React, {FC} from 'react'

import { AiOutlineSend } from 'react-icons/ai';
import imgContacts from './contacts.svg'
import styles from './contacts.module.less'

const Contacts: FC = () => {

	return (
		<section id='contacts' className={styles.contacts}>
			<div className={styles.boxContacts}>
				<h2 className={styles.headerContacts}>Контакты</h2>
				<div className={styles.contentContacts}>
					<div className={styles.boxFormContacts}>
						<form className={styles.formContacts}>
							fields
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