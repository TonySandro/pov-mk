import React from 'react';
import styles from './allCourses.module.scss';

interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

interface AllCoursesProps {
  courses?: Course[];
}

const AllCourses: React.FC<AllCoursesProps> = ({ courses = [] }) => {
  return (
    <section className={styles.allCoursesSec}>
      <div className={styles.allCoursesContainer}>
        <h2 className={styles.coursesTitle}>Cursos disponíveis</h2>

        <div className={styles.coursesRow}>
          {courses.map((course) => (
            <div key={course.id} className={styles.courseCard}>
              <img
                className={styles.courseImage}
                src={course.imageUrl}
                alt={course.title}
              />

              <div className={styles.cardBody}>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseDescription}>{course.description}</p>
                <p className={styles.coursePrice}>R$ {course.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
