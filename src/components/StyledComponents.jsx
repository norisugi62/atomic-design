import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.p`
  color: orange;
  margin: 0;
`;

const Button = styled.button`
  background-color: yellow;
  border: none;
  padding: 8px;
  border-radius: 8px;
  color: gray;
  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;

const StyledComponents = () => {
  return (
    <div>
      <Container>
        <Title>- Styled Components -</Title>
        <Button>FIGHT!!</Button>
      </Container>
    </div>
  );
};

export default StyledComponents;
