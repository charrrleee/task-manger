import utils from "../utils";

interface TaskListProps {
    tasks: Tasks[];
    deleteTask: (id: number) => void;
}


const TaskList: React.FC<TaskListProps> = (props) => {
    const handleDeleteTask = (id: number) => {
      props.deleteTask(id);
    };
  
    return (
        <div className="table-responsive m-4">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.tasks.length > 0 ? (
              props.tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.category}</td>
                  <td>{utils.formatDate(task.dueDate)}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center">
                  No Task
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>      
    );
  };
  
  export default TaskList;