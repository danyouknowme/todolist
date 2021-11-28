import React, { FC, useState, useEffect } from 'react'
import axios from 'axios';
import CardTasks from '../components/CardTasks';
import './home.scss';
import { Assignment, Delete, EditTwoTone, Info, LockOpen } from '@material-ui/icons';

interface TasksProps {
    "_id": string,
    "title": string,
    "description": string,
    "__v": number
}

const Home: FC = () => {
    const [data, setData] = useState<TasksProps[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/lists')
            .then(response => setData(response.data))
            .catch((error) => console.log(error));
    });
    
    return (
        <div className="home">
            <div className="wrapper">
                <h1>Tasks</h1>
                <div className="table">
                    <div className="tasks">
                        <Assignment />
                        <span>Tasks</span>
                    </div>
                    <div className="detail">
                        <Info />
                        <span>Detail</span>
                    </div>
                    <div className="show">
                        <LockOpen />
                    </div>
                    <div className="edit">
                        <EditTwoTone />
                    </div>
                    <div className="delete">
                        <Delete />
                    </div>
                </div>
                {data.map((item: TasksProps) => (
                    <CardTasks {...item} />
                ))}
            </div>
        </div>
    )
}

export default Home;
