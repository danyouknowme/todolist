import { AddCircle, Info } from '@material-ui/icons';
import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import './show.scss';
import './create.scss';

interface TasksProps {
    "_id": string,
    "title": string,
    "description": string,
    "__v": number
}

const Edit = () => {
    let location = useLocation();
    let history = useHistory();
    const state = location.state as TasksProps;
    const { title, description, _id } = state;

    const [newTitle, setNewTitle] = useState<string>(title);
    const [newDescription, setNewDescription] = useState<string>(description);

    const editTask = () => {
        axios.put(`http://localhost:3000/api/lists/${_id}`, {
            "title": newTitle,
            "description": newDescription
        })
            .then(response => {
                console.log(response);
                history.push('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="show">
            <div className="wrapper">
                <h1>Edit task</h1>
                <div>
                    <div className="task">
                        <AddCircle />
                        <span>Task</span>
                    </div>
                    <div className="content">
                        <input type="text" placeholder="Enter task..." value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <div className="task">
                        <Info />
                        <span>Detail</span>
                    </div>
                    <div className="content">
                        <input type="text" placeholder="Enter details..." value={newDescription} onChange={(e) => setNewDescription(e.target.value)}/>
                    </div>
                </div>
                <button onClick={editTask}>Submit</button>
            </div>
        </div>
    )
}

export default Edit;
