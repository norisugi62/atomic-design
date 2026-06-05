import styled from 'styled-components';
import Card from '@atoms/card/Card.jsx';
import UserIconWithName from '@molecules/user/UserIconWithName';

const UserCard = ({ user }) => {
  const { name, image, email, phone, company, web } = user;
  return (
    <Card>
      <UserIconWithName image={image} name={name} />
      <SDl>
        <dt>メール</dt>
        <dd>{email}</dd>
        <dt>電話</dt>
        <dd>{phone}</dd>
        <dt>会社名</dt>
        <dd>{company.name}</dd>
        <dt>WEB</dt>
        <dd>{web}</dd>
      </SDl>
    </Card>
  );
};

export default UserCard;

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
