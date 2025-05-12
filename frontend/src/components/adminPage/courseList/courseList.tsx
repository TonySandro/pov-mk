import React from 'react';
import { useSelector } from 'react-redux';
import styles from './courseList.module.scss';
import { RootState } from '../../../app/store';
import CourseItem from '../courseItem/courseItem';

const CourseList: React.FC = () => {
  const courses = useSelector((state: RootState) => state.course.list);

  if (courses.length === 0) {
    return <p className={styles.emptyMessage}>Nenhum curso cadastrado.</p>;
  }

  return (
    <section className={styles.courseListSection}>
      <h2 className={styles.sectionTitle}>Cursos Cadastrados</h2>
      <div className={`${styles.courseGrid} ${courses.length === 1 ? styles.single : ''}`}>
        {courses.map(course => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CourseList;
