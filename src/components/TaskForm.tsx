import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import categories from "../categories";
import * as Yup from 'yup';
import moment from "moment";

interface TaskFormProps {
    addTask: (task: Task) => void;
}


const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  dueDate: Yup.date().required('Due date is required'),
  category: Yup.string().required('Category is required'),
});

const TaskForm: React.FC<TaskFormProps> = (props: TaskFormProps) => {
    const [_, setTask] = useState<Task>();

    return (
        <Formik
       initialValues={{
            id: new Date().getTime(),
            title: '', 
            dueDate: moment().format('DD-MM-YYYY'), 
            category: categories[0],
        }}
        validationSchema={ validationSchema }
        onSubmit={(values, { setSubmitting, resetForm }) => {
         setTimeout(() => {
            const tk = {
                id: new Date().getTime(),
                title: values.title,
                dueDate: moment(`${values.dueDate}`).toDate(),
                category: values.category,
            }
            setTask(tk)      
            props.addTask(tk)      
            setSubmitting(false);
            resetForm();
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form className="row">
         <div className="col-md-6 mb-3">
           <label htmlFor="title">Title</label>
           <Field type="text" name="title" className="form-control" />
           <ErrorMessage name="title" component="div" className="text-danger" />
         </div>
         
         <div className="col-md-6 mb-3">
           <label htmlFor="dueDate">Due Date</label>
           <Field type="date" name="dueDate" className="form-control" />
           <ErrorMessage name="dueDate" component="div" className="text-danger" />
         </div>
       
         <div className="col-md-6 mb-3">
           <label htmlFor="category">Category</label>
           <Field as="select" name="category" className="form-control">
             <option value="">Select ...</option>
             {categories.map((category) => (
               <option key={category} value={category}>
                 {category}
               </option>
             ))}
           </Field>
           <ErrorMessage name="category" component="div" className="text-danger" />
         </div>
       
         <div className="col-md-12">
           <button type="submit" disabled={isSubmitting} className="btn btn-primary">
             Submit
           </button>
         </div>
       </Form>
       
       )}
     </Formik>
    )

}

export default TaskForm