import { useState } from 'react';
import styled from '@emotion/styled';

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
  margin: 0;
  color: #d1768a;
  font-size: 25px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.active ? 'pink' : 'gray')};
  border: none;
  padding: 8px;
  border-radius: 8px;
  color: black;
  cursor: pointer;
`;

const EmotionVer2 = () => {
  const [open, setOpen] = useState(false);
  const onClickToggle = () => setOpen((prev) => !prev);

  return (
    <Container>
      <Title>- Emotion Ver2</Title>
      <Button active={open} onClick={onClickToggle}>
        FIGHT!!
      </Button>
      {open ? '開いている' : '閉じている'}
    </Container>
  );
};

export default EmotionVer2;
