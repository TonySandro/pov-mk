import React from 'react';
import ReactDOM from 'react-dom';
import EditCourse from './editCourse';
import styles from './editCourseModal.module.scss';

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

const EditCourseModal: React.FC<Props> = ({ course, onClose }) => {
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <EditCourse course={course} onClose={onClose} />
      </div>
    </div>,
    document.body
  );
};

export default EditCourseModal;
