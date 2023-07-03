import { Trash } from 'phosphor-react';
import styles from './TasksList.module.css';
import { ITask } from '../../App';

interface Props{
    task: ITask;
    onDelete: (taskId: number) => void
}

export function TasksList({task, onDelete}: Props){
    return(
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div/>
            </button>

            <p>{task.title}</p>

            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <Trash size={20}/>
            </button>
        </div>
    )
}