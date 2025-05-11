import styled from 'styled-components';

export const LoginSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const LoginImage = styled.img`
  width: 80%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
`;

export const FormWrapper = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #212529;
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #212529;
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  outline: none;
  color: #212529;

  &:focus {
    border-color: #6c63ff;
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
  }
`;

export const LoginButton = styled.button`
  background: #6c63ff;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #5b54d3;
  }
`;

export const BottomText = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
  margin-top: 1rem;
  text-align: center;
`;

export const RegisterLink = styled.a`
  color: #6c63ff;
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.25rem;

  &:hover {
    text-decoration: underline;
  }
`;
