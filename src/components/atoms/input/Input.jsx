import styled from 'styled-components';

const Input = ({ type = 'text', name = '', id = '', placeholder = '' }) => {
  return <SInput id={id} type={type} name={name} placeholder={placeholder} />;
};

export default Input;

const SInput = styled.input`
  color: white;
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 500px;
  outline: none;
`;
