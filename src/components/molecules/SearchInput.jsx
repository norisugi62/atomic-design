import styled from 'styled-components';
import PrimaryButton from '@atoms/button/PrimaryButton.jsx';
import Input from '@atoms/input/Input.jsx';

const SearchInput = () => {
  return (
    <SContainer>
      <Input type="text" placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>ボタン</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

export default SearchInput;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
