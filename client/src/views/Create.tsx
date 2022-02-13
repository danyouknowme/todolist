import { AddCircle, Info } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './show.scss';
import './create.scss';

const Create = () => {
  let history = useHistory();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const createTask = () => {
    axios
      .post('http://localhost:8000/api/lists', {
        title,
        description,
      })
      .then((response) => {
        console.log(response);
        history.push('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='show'>
      <div className='wrapper'>
        <h1>Create task</h1>
        <div>
          <div className='task'>
            <AddCircle />
            <span>Task</span>
          </div>
          <div className='content'>
            <input
              type='text'
              placeholder='Enter task...'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className='task'>
            <Info />
            <span>Detail</span>
          </div>
          <div className='content'>
            <input
              type='text'
              placeholder='Enter details...'
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <button onClick={createTask}>Submit</button>
      </div>
    </div>
  );
};

export default Create;
