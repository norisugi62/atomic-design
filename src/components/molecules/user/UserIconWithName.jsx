import styled from 'styled-components';

const UserIconWithName = ({ image, name }) => {
  return (
    <SContainer>
      <SImg src={image} alt="プロフィール" width={160} height={160} />
      <SNmae>{name}</SNmae>
    </SContainer>
  );
};

export default UserIconWithName;

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;

const SNmae = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
