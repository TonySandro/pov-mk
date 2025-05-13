import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './courseForm.module.scss';
import { useTranslation } from 'react-i18next';

export const courseSchema = (t: (key: string) => string) =>
  yup.object({
    title: yup.string().required(t('addCourse:errors.title')),
    description: yup.string().required(t('addCourse:errors.description')),
    price: yup
      .number()
      .typeError(t('addCourse:errors.price_type'))
      .positive(t('addCourse:errors.price_positive'))
      .required(t('addCourse:errors.price_required')),
    imageUrl: yup
      .string()
      .url(t('addCourse:errors.image_url'))
      .required(t('addCourse:errors.image_required')),
    modules: yup
      .array()
      .of(yup.object({ name: yup.string().required(t('addCourse:errors.module_required')) }))
      .optional()
      .default([]),
  });

export type CourseFormData = {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  modules: { name: string }[];
};

interface Props {
  onSubmit: (data: CourseFormData) => void;
  initialValues?: CourseFormData;
  submitLabel: string;
}

const CourseForm: React.FC<Props> = ({ onSubmit, initialValues, submitLabel }) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CourseFormData>({
    resolver: yupResolver(courseSchema(t)),
    defaultValues: initialValues || {
      title: '',
      description: '',
      price: 0,
      imageUrl: '',
      modules: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'modules',
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label>{t('addCourse:title')}</label>
        <input {...register('title')} />
        {errors.title && <p className={styles.errorText}>{errors.title.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label>{t('addCourse:description')}</label>
        <textarea {...register('description')} />
        {errors.description && <p className={styles.errorText}>{errors.description.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label>{t('addCourse:price')}</label>
        <input type="number" {...register('price')} />
        {errors.price && <p className={styles.errorText}>{errors.price.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label>{t('addCourse:imageUrl')}</label>
        <input {...register('imageUrl')} />
        {errors.imageUrl && <p className={styles.errorText}>{errors.imageUrl.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label>{t('addCourse:modulesLabel')}</label>
        {fields.map((field, index) => (
          <div key={field.id} className={styles.moduleItem}>
            <input
              placeholder={t('addCourse:modulePlaceholder', { index: index + 1 })}
              {...register(`modules.${index}.name` as const)}
            />
            <button type="button" onClick={() => remove(index)}>
              {t('addCourse:remove')}
            </button>
            {errors.modules?.[index]?.name && (
              <p className={styles.errorText}>{errors.modules[index]?.name?.message}</p>
            )}
          </div>
        ))}
        <button type="button" onClick={() => append({ name: '' })}>
          {t('addCourse:addModule')}
        </button>
      </div>

      <button type="submit" className={styles.submitButton}>
        {submitLabel}
      </button>
    </form>
  );
};

export default CourseForm;
