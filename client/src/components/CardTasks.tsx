import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './cardtasks.scss';

interface Props {
    "_id": string,
    "title": string,
    "description": string,
    "__v": number
}

const CardTasks: FC<Props> = (props) => {

    const deleteTask = (id: string) => {
        if (window.confirm('Are you sure you wish to delete this item?')) {
            axios.delete(`http://localhost:3000/api/lists/${id}`);
        }
    }
    return (
        <div className="item">
            <div className="title">
                <span>{props.title}</span>
            </div>
            <div className="desc">
                <span>{props.description}</span>
            </div>
            <div className="showed">
                <Link to={{ pathname: `/${props._id}`, state: props }} >Show</Link>
            </div>
            <div className="edited">
                <Link to={{ pathname: `/${props._id}` }} >Edit</Link>
            </div>
            <div className="deleted">
                <span onClick={() => deleteTask(props._id)}>Delete</span>
            </div>
        </div>
    )
}

export default CardTasks;
