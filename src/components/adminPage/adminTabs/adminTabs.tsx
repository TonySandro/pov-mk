import React, { useState } from 'react';
import AddCourse from '../addCourse/addCourse';
import CourseList from '../courseList/courseList';
import styles from './adminTabs.module.scss';

const AdminTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'add' | 'list'>('list');

  return (
    <div className={styles.adminTabs}>
      <div className={styles.tabButtons}>
        <button
          className={`${styles.tabButton} ${activeTab === 'add' ? styles.active : ''}`}
          onClick={() => setActiveTab('add')}
        >
          Adicionar Curso
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'list' ? styles.active : ''}`}
          onClick={() => setActiveTab('list')}
        >
          Todos os Cursos
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'add' && <AddCourse />}
        {activeTab === 'list' && <CourseList />}
      </div>
    </div>
  );
};

export default AdminTabs;
