import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './cardtasks.scss';

interface Props {
    "_id": string,
    "title": string,
    "description": string,
    "__v": number
}

const CardTasks: FC<Props> = (props) => {
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
                <a href='/'>Delete</a>
            </div>
        </div>
    )
}

export default CardTasks;
