/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const containerStyle = css`
  border: 2px solid #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const titleStyle = css({
  margin: 0,
  color: '#3d84a8',
  fontSize: '25px',
});

const buttonStyle = css`
  background-color: pink;
  border: none;
  padding: 8px;
  border-radius: 8px;
  color: gray;
  &:hover {
    color: gray;
    background-color: white;
    cursor: pointer;
  }
`;





const Emotions = () => {
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <button css={buttonStyle}>FIGHT!!</button>
    </div>
  );
};

export default Emotions;
