import React, { useState } from 'react';
import './App.css';
import { Memo } from './Memo';

export interface ITodo {
    todo: string;
    color: string;
}

function App(): React.ReactElement<{}> {
    const [todo, setTodo] = useState<string>('');
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    return (
        <div className='App'>
            <div style={{ boxSizing: 'border-box', padding: '32px' }}>
                <form
                    action='#'
                    style={{ display: 'flex', justifyContent: 'center' }}
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();

                        setTodoList((oldTodoList) => [
                            ...oldTodoList,
                            {
                                todo,
                                color:
                                    '#' +
                                    Math.round(
                                        Math.random() * 16700000
                                    ).toString(16),
                            },
                        ]);

                        setTodo('');
                    }}
                >
                    <input
                        type='text'
                        style={{ marginRight: '16px' }}
                        value={todo}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setTodo(e.target.value)
                        }
                    />
                    <button type='submit'>추가</button>
                </form>
            </div>

            <div
                style={{
                    position: 'relative',
                    boxSizing: 'border-box',
                    padding: '24px',
                }}
            >
                {todoList.map((data) => (
                    <Memo todo={data.todo} color={data.color} key={data.todo} />
                ))}
            </div>
        </div>
    );
}

export default App;
