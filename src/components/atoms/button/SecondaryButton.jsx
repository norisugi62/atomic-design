import styled from 'styled-components';
import { BaseButton } from './BaseButton.jsx';

const SecondaryButton = ({ children }) => {
  return <SButton>{children}</SButton>;
};
export default SecondaryButton;

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
