import styles from './SubmitForm.module.css'

function SubmitForm({text}) {
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitForm