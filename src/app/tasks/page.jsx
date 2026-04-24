import TasksCard from '@/components/TasksCard';
import WithForm from '@/components/WithForm';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TasksPage =async () => {
 const tasks = await getTasks()
 return (
  <div>
   <h2 className='text-3xl mb-4'>Task: {tasks.length}</h2>
   <WithForm></WithForm>
   <div className='grid grid-cols-3 gap-5 mt-8'>
    {
     tasks.map(task => <TasksCard key={task.id} task={task}></TasksCard>)
    }
   </div>
  </div>
 );
};

export default TasksPage;