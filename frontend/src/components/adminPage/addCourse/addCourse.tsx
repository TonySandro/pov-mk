import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addCourse } from '../../../features/course/courseSlice';
import { v4 as uuidv4 } from 'uuid';
import styles from './addCourse.module.scss';

const courseSchema = yup.object({
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
    .of(
      yup.object({
        name: yup.string().required('Nome do módulo é obrigatório'),
      })
    )
    .optional()
    .default([]),
});

type CourseFormData = {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  modules: { name: string }[];
};

const AddCourse: React.FC = () => {
  const dispatch = useDispatch();

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
    const courseWithId = { ...data, id: uuidv4() };
    dispatch(addCourse(courseWithId));
    reset(); // Limpa o formulário após adicionar
  };

  return (
    <section className={styles.loginSection}>
      <div className={styles.loginContainer}>
        <div className={styles.formWrapper}>
          <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="title">Título</label>
              <input className={styles.input} id="title" {...register('title')} />
              {errors.title && <p className={styles.errorText}>{errors.title.message}</p>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="description">Descrição</label>
              <textarea className={styles.input} id="description" {...register('description')} />
              {errors.description && <p className={styles.errorText}>{errors.description.message}</p>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="price">Preço</label>
              <input type="number" className={styles.input} id="price" {...register('price')} />
              {errors.price && <p className={styles.errorText}>{errors.price.message}</p>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="imageUrl">URL da Imagem</label>
              <input className={styles.input} id="imageUrl" {...register('imageUrl')} />
              {errors.imageUrl && <p className={styles.errorText}>{errors.imageUrl.message}</p>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Módulos (opcional)</label>
              {fields.map((field, index) => (
                <div key={field.id} className={styles.moduleItem}>
                  <input
                    className={styles.input}
                    placeholder={`Módulo ${index + 1}`}
                    {...register(`modules.${index}.name` as const)}
                  />
                  <button type="button" onClick={() => remove(index)}>
                    Remover
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
                Adicionar Módulo
              </button>
            </div>

            <button className={styles.loginButton} type="submit">Adicionar Curso</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCourse;
