import styles from './Header.module.css';
import LogoToDo from '../../assets/todo.svg'
import RocketLogo from '../../assets/rocket.svg'
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props{
    onAddTask: (taskTitle: string) => void;
}

export function Header({onAddTask}: Props){

    const [title, setTitle] = useState("");

    function handleSubmit(e: FormEvent){
        e.preventDefault()

        onAddTask(title)
        setTitle("")
    }

    function handleChangeTitle(e: ChangeEvent<HTMLInputElement>){
        setTitle(e.target.value)
    }

    return(
        <header className={styles.header}>  
            <img src={RocketLogo} alt="logo de um foguete"/>
            <img src={LogoToDo} alt="todo list"/>

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input
                placeholder='Insira uma nova tarefa'
                onChange={handleChangeTitle}
                value={title}
                />
                <button>
                    Criar
                    <PlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}