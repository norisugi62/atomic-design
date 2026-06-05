import styled from 'styled-components';
import SearchInput from '@molecules/SearchInput';
import UserCard from '@organism/user/UserCard';

const users = [...Array(10).keys()].map((i) => {
  return {
    id: i,
    name: `nori-${i}`,
    image:
      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    email: '12345@nori.com',
    phone: '111-222-333',
    company: {
      name: 'テスト株式会社',
    },
    web: 'http://google.com',
  };
});

const Users = () => {
  return (
    <SContainer>
      <h2>User一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

export default Users;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
