import { FormatListNumbered, Info } from '@material-ui/icons';
import React, { FC } from 'react'
import { useLocation, Link } from 'react-router-dom';
import './show.scss';

interface TasksProps {
    "_id": string,
    "title": string,
    "description": string,
    "__v": number
}

const Show: FC = () => {
    let location = useLocation();
    const state = location.state as TasksProps;
    const { title, description } = state;
    return (
        <div className="show">
            <div className="wrapper">
                <h1>Show task</h1>
                <div>
                    <div className="task">
                        <FormatListNumbered />
                        <span>Task</span>
                    </div>
                    <div className="desc">
                        <span>{title}</span>
                    </div>
                </div>
                <div>
                    <div className="task">
                        <Info />
                        <span>Detail</span>
                    </div>
                    <div className="desc">
                        <span>{description}</span>
                    </div>
                </div>
                <Link to="/">Edit task</Link>
            </div>
        </div>
    )
}

export default Show;

