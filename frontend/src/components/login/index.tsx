import React from 'react';
import {
  LoginSection,
  LoginContainer,
  ImageWrapper,
  LoginImage,
  FormWrapper,
  FormTitle,
  LoginForm,
  FormGroup,
  Label,
  Input,
  LoginButton,
  BottomText,
  RegisterLink
} from './index.style';
import image from '../../image/svg-3.svg';

const LoginComponent: React.FC = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Fazendo login...');
  };

  return (
    <LoginSection>
      <LoginContainer>
        <ImageWrapper>
          <LoginImage src={image} alt="Ilustração de login" />
        </ImageWrapper>

        <FormWrapper>
          <FormTitle>Entre agora e aprofunde suas habilidades</FormTitle>
          <LoginForm onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                required
              />
            </FormGroup>

            <LoginButton type="submit">Entrar</LoginButton>
          </LoginForm>

          <BottomText>
            Não tem uma conta?
            <RegisterLink href="#cadastro"> Cadastre-se</RegisterLink>
          </BottomText>
        </FormWrapper>
      </LoginContainer>
    </LoginSection>
  );
};

export default LoginComponent;
