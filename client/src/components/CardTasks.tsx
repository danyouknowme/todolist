import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './cardtasks.scss';
import { Cancel, CheckCircle } from '@material-ui/icons';

interface Props {
    "_id": string,
    "title": string,
    "description": string,
    "isDone": boolean,
    "__v": number
}

const CardTasks: FC<Props> = (props) => {
    const deleteTask = (id: string) => {
        if (window.confirm('Are you sure you wish to delete this item?')) {
            axios.delete(`http://localhost:3000/api/lists/${id}`);
        }
    }

    const doneTask = (id: string) => {
        axios.put(`http://localhost:3000/api/lists/${id}`, {
            title: props.title,
            description: props.description,
            isDone: !props.isDone
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="item">
            <div className="done">
                {!props.isDone ? 
                <Cancel style={{ color: 'red' }} onClick={() => doneTask(props._id)} className="flip" /> :
                <CheckCircle style={{ color: 'green' }}  onClick={() => doneTask(props._id)} className="flip"/>
            }
            </div>
            <div className={props.isDone ? "title donetask" : "title"}>
                <span>{props.title}</span>
            </div>
            <div className={props.isDone ? "desc donetask" : "desc"}>
                <span>{props.description}</span>
            </div>
            <div className="showed">
                <Link to={{ pathname: `/${props._id}`, state: props }} >Show</Link>
            </div>
            <div className="edited">
                <Link to={{ pathname: `/${props._id}/edit`, state: props }} >Edit</Link>
            </div>
            <div className="deleted">
                <span onClick={() => deleteTask(props._id)}>Delete</span>
            </div>
        </div>
    )
}

export default CardTasks;
