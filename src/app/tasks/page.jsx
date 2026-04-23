import TasksCard from '@/components/TasksCard';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TasksPage =async () => {
 const tasks = await getTasks()
 return (
  <div>
   <h2 className='text-3xl'>Task: {tasks.length}</h2>
   
   <div>
    {
     tasks.map(task => <TasksCard key={task.id} task={task}></TasksCard>)
    }
   </div>
  </div>
 );
};

export default TasksPage;