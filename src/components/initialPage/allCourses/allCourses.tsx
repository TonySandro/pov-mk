import React from 'react';
import styles from './allCourses.module.scss';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <section className={styles.allCoursesSec}>
      <div className={styles.allCoursesContainer}>
        <h2 className={styles.coursesTitle}>{t('common:availableCourses')}</h2>

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
                <p className={styles.coursePrice}>
                  {t('common:currency')} {course.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
