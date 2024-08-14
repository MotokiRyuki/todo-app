import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3000/tasks');
    setTasks(response.data);
  };

  const createTask = async () => {
    if (!newTaskTitle) return;
    const response = await axios.post('http://localhost:3000/tasks', { title: newTaskTitle, completed: false });
    setTasks([...tasks, response.data]);
    setNewTaskTitle('');
  };

  const updateTask = async (id, updatedTask) => {
    const response = await axios.put(`http://localhost:3000/tasks/${id}`, updatedTask);
    setTasks(tasks.map(task => (task._id === id ? response.data : task)));
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>タスク管理アプリ</h1>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="タスクを入力して下さい"
          style={{ flexGrow: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '4px', marginRight: '10px' }}
        />
        <button
          onClick={createTask}
          style={{ padding: '10px 20px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}
        >
          作成
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
        {tasks.map(task => (
          <li key={task._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', marginBottom: '10px', backgroundColor: '#f9f9f9', borderRadius: '4px', border: '1px solid #ddd' }}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#999' : '#000' }}>{task.title}</span>
            <div>
              <button
                onClick={() => updateTask(task._id, { ...task, completed: !task.completed })}
                style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                {task.completed ? '未完了' : '完了'}
              </button>
              <button
                onClick={() => deleteTask(task._id)}
                style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: '#f44336', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
