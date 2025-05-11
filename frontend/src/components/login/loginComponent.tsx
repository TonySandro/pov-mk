import React from 'react';
import styles from './loginComponent.module.scss';
import image from '../../image/svg-3.svg';

const LoginComponent: React.FC = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Fazendo login...');
  };

  return (
    <section className={styles.loginSection}>
      <div className={styles.loginContainer}>
        <div className={styles.imageWrapper}>
          <img className={styles.loginImage} src={image} alt="Ilustração de login" />
        </div>

        <div className={styles.formWrapper}>
          <h2 className={styles.formTitle}>Entre agora e aprofunde suas habilidades</h2>
          <form className={styles.loginForm} onSubmit={handleLogin}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">E-mail</label>
              <input
                className={styles.input}
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="password">Senha</label>
              <input
                className={styles.input}
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                required
              />
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
