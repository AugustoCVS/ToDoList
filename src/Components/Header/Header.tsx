import styles from './Header.module.css';
import LogoToDo from '../assets/todo.svg'
import RocketLogo from '../assets/rocket.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={RocketLogo} alt="logo de um foguete"/>
            <img src={LogoToDo} alt="todo list"/>
        </header>
    )
}