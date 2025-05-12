import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './courseForm.module.scss';

export const courseSchema = yup.object({
  title: yup.string().required('Título é obrigatório'),
  description: yup.string().required('Descrição é obrigatória'),
  price: yup
    .number()
    .typeError('O preço deve ser um número')
    .positive('O preço deve ser positivo')
    .required('Preço é obrigatório'),
  imageUrl: yup.string().url('URL inválida').required('Imagem é obrigatória'),
  modules: yup
    .array()
    .of(yup.object({ name: yup.string().required('Nome do módulo é obrigatório') }))
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
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CourseFormData>({
    resolver: yupResolver(courseSchema),
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
        <label>Título</label>
        <input {...register('title')} />
        {errors.title && <p className={styles.errorText}>{errors.title.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label>Descrição</label>
        <textarea {...register('description')} />
        {errors.description && <p className={styles.errorText}>{errors.description.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label>Preço</label>
        <input type="number" {...register('price')} />
        {errors.price && <p className={styles.errorText}>{errors.price.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label>URL da Imagem</label>
        <input {...register('imageUrl')} />
        {errors.imageUrl && <p className={styles.errorText}>{errors.imageUrl.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label>Módulos</label>
        {fields.map((field, index) => (
          <div key={field.id} className={styles.moduleItem}>
            <input {...register(`modules.${index}.name` as const)} />
            <button type="button" onClick={() => remove(index)}>Remover</button>
            {errors.modules?.[index]?.name && (
              <p className={styles.errorText}>{errors.modules[index]?.name?.message}</p>
            )}
          </div>
        ))}
        <button type="button" onClick={() => append({ name: '' })}>
          Adicionar Módulo
        </button>
      </div>

      <button type="submit" className={styles.submitButton}>
        {submitLabel}
      </button>
    </form>
  );
};

export default CourseForm;
