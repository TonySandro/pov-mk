import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCourse } from '../../../features/course/courseSlice';
import CourseForm, { CourseFormData } from '../courseForm/courseForm';
import styles from './editCourse.module.scss';

interface Props {
  course: {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    modules: { name: string }[];
  };
  onClose: () => void;
}

const EditCourse: React.FC<Props> = ({ course, onClose }) => {
  const dispatch = useDispatch();

  const handleUpdate = (data: CourseFormData) => {
    dispatch(updateCourse({ ...data, id: course.id }));
    onClose();
  };

  return (
    <div>
      <h2>Editar Curso</h2>
      <CourseForm
        onSubmit={handleUpdate}
        initialValues={course}
        submitLabel="Salvar Alterações"
      />
      <button onClick={onClose} className={styles.cancel_button}>Cancelar</button>
    </div>
  );
};

export default EditCourse;
