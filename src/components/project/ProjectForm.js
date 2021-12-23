import {useEffect, useState} from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitForm from '../form/SubmitForm'

function ProjectForm({btnText}) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            header: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <form className={styles.form}>
                <Input
                 type="text" 
                 text="Nome do projeto" 
                 name="name" 
                 placeholder="Insira o nome do projeto"/>
                <Input 
                type="number"
                text="Orçamento"
                name="budget" 
                placeholder="Insira o orçamento total"/>
                <Select
                text="Selecione a categoria"
                name="category_id"
                options={categories}/>
                <SubmitForm
                text={btnText} />
            </form>
        </div>
    )
}

export default ProjectForm