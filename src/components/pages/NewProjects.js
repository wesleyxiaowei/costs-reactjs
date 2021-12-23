import styles from './NewProjects.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProjects () {
    return (
        <div className={styles.newproject_container}>
            <h1>Novo Projeto</h1>
            <p>Crie seu projeto para adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProjects