import styled from 'styled-components';

const Card = ({ children }) => {
  return <SCard>{children}</SCard>;
};

export default Card;

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
