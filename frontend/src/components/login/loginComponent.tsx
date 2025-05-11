import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './loginComponent.module.scss';
import image from '../../image/svg-3.svg';
import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup
    .string()
    .email('Formato de e-mail inválido')
    .required('E-mail é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('Senha é obrigatória'),
});

type LoginFormData = yup.InferType<typeof loginSchema>;

const LoginComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Logado", data);
  }

  return (
    <section className={styles.loginSection}>
      <div className={styles.loginContainer}>
        <div className={styles.imageWrapper}>
          <img className={styles.loginImage} src={image} alt="Ilustração de login" />
        </div>

        <div className={styles.formWrapper}>
          <h2 className={styles.formTitle}>Entre agora e aprofunde suas habilidades</h2>
          <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">E-mail</label>
              <input
                className={styles.input}
                id="email" 
                placeholder="Digite seu e-mail"
                {...register('email')}
              />
              {errors.email && (
                <p className={styles.errorText}>{errors.email.message}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="password">Senha</label>
              <input
                className={styles.input}
                id="password" 
                placeholder="Digite sua senha" 
                {...register('password')}
              />
              {errors.password && (
                <p className={styles.errorText}>{errors.password.message}</p>
              )}
            </div>

            <button className={styles.loginButton} type="submit">Entrar</button>
          </form>

          <p className={styles.bottomText}>
            Não tem uma conta?
            <a className={styles.registerLink} href="#cadastro"> Cadastre-se</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
