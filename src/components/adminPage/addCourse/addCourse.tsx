import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addCourse } from '../../../features/course/courseSlice';
import { v4 as uuidv4 } from 'uuid';
import styles from './addCourse.module.scss';
import { useTranslation } from 'react-i18next';

type CourseFormData = {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  modules: { name: string }[];
};

const AddCourse: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const courseSchema = yup.object({
    title: yup.string().required(t('errors.title')),
    description: yup.string().required(t('errors.description')),
    price: yup
      .number()
      .typeError(t('errors.price_type'))
      .positive(t('errors.price_positive'))
      .required(t('errors.price_required')),
    imageUrl: yup.string().url(t('errors.image_url')).required(t('errors.image_required')),
    modules: yup
      .array()
      .of(
        yup.object({
          name: yup.string().required(t('errors.module_required')),
        })
      )
      .optional()
      .default([]),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CourseFormData>({
    resolver: yupResolver(courseSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'modules',
  });

  const onSubmit = (data: CourseFormData) => {
    const clonedData = JSON.parse(JSON.stringify(data));
    const courseWithId = { ...clonedData, id: uuidv4() };
    dispatch(addCourse(courseWithId));
    reset();
  };

  return (
    <section className={styles.loginSection}>
      <div className={styles.loginContainer}>
        <div className={styles.formWrapper}>
          <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="title">{t('title')}</label>
              <input className={styles.input} id="title" {...register('title')} />
              {errors.title && <p className={styles.errorText}>{errors.title.message}</p>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="description">{t('description')}</label>
              <textarea className={styles.input} id="description" {...register('description')} />
              {errors.description && <p className={styles.errorText}>{errors.description.message}</p>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="price">{t('price')}</label>
              <input type="number" className={styles.input} id="price" {...register('price')} />
              {errors.price && <p className={styles.errorText}>{errors.price.message}</p>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="imageUrl">{t('imageUrl')}</label>
              <input className={styles.input} id="imageUrl" {...register('imageUrl')} />
              {errors.imageUrl && <p className={styles.errorText}>{errors.imageUrl.message}</p>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>{t('modulesLabel')}</label>
              {fields.map((field, index) => (
                <div key={field.id} className={styles.moduleItem}>
                  <input
                    className={styles.input}
                    placeholder={t('modulePlaceholder', { index: index + 1 })}
                    {...register(`modules.${index}.name` as const)}
                  />
                  <button type="button" onClick={() => remove(index)}>
                    {t('remove')}
                  </button>
                  {errors.modules?.[index]?.name && (
                    <p className={styles.errorText}>{errors.modules[index]?.name?.message}</p>
                  )}
                </div>
              ))}
              <button
                type="button"
                className={styles.addModuleButton}
                onClick={() => append({ name: '' })}
              >
                {t('addModule')}
              </button>
            </div>

            <button className={styles.loginButton} type="submit">{t('submit')}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCourse;
