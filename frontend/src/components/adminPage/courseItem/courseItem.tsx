import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCourse } from '../../../features/course/courseSlice';
import styles from './courseItem.module.scss';

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  modules: { name: string }[];
}

interface Props {
  course: Course;
  onEdit?: (course: Course) => void; 
}
interface Props {
  course: Course;
  onEdit?: (course: Course) => void; // para edição futura
}

const CourseItem: React.FC<Props> = ({ course, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir este curso?')) {
      dispatch(deleteCourse(course.id));
    }
  };

  return (
    <div className={styles.courseCard}>
      <img src={course.imageUrl} alt={course.title} className={styles.courseImage} />
      <div className={styles.courseContent}>
        <h3 className={styles.courseTitle}>{course.title}</h3>
        <p className={styles.courseDescription}>{course.description}</p>
        <p className={styles.coursePrice}>R$ {course.price.toFixed(2)}</p>

        {course.modules.length > 0 && (
          <ul className={styles.moduleList}>
            {course.modules.map((mod, idx) => (
              <li key={idx} className={styles.moduleItem}>{mod.name}</li>
            ))}
          </ul>
        )}

        <div className={styles.actionButtons}>
          <button className={styles.editButton} onClick={() => onEdit?.(course)}>Editar</button>
          <button className={styles.deleteButton} onClick={handleDelete}>Excluir</button>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;