import { ClipboardText } from 'phosphor-react';
import { ITask } from '../../App';
import { TasksList } from '../TasksList/TasksList';
import styles from './Tasks.module.css'

interface Props{
    tasks: ITask[];
    onDelete: (taskId: number) => void;
    onComplete: (taskId: number) => void;
}

export function Tasks({tasks, onDelete, onComplete}: Props){

    const taskQuantity = tasks.length;
    const completedTasks = tasks.filter((tasks) => tasks.isCompleted).length;

    return(
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>{taskQuantity}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluídas</p>
                    <span>{completedTasks} de {taskQuantity}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map((task) => {
                    return (
                    <TasksList 
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onComplete={onComplete}
                    />)
                })}

                {tasks.length <= 0 &&(
                    <section className={styles.empty}>
                        <ClipboardText size={50}/>
                        <div>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </section>
                )}
            </div>
        </section>
    );
}