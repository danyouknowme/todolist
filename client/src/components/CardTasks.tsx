import React, { FC } from 'react';
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
                <a href='/'>Show</a>
            </div>
            <div className="edited">
                <a href='/'>Edit</a>
            </div>
            <div className="deleted">
                <a href='/'>Delete</a>
            </div>
        </div>
    )
}

export default CardTasks;
