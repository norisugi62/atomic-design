import styled from 'styled-components';
import { BaseButton } from './BaseButton.jsx';

const PrimaryButton = ({ children }) => {
  return <SButton>{children}</SButton>;
};
export default PrimaryButton;

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
