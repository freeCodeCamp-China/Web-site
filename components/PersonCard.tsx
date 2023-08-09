import { FC } from 'react';
import { Card } from 'react-bootstrap';

export type PersonCardProps = {
  avatar: string;
  name?: string;
};

export const PersonCard: FC<PersonCardProps> = ({ avatar, name }) => (
  <Card
    className="rounded-circle shadow-sm mx-auto"
    style={{ width: '7.5rem', height: '7.5rem' }}
  >
    <Card.Img
      className="rounded-circle object-fit-cover"
      variant="top"
      src={`/image/organizer/${avatar}`}
      alt={name}
    />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
    </Card.Body>
  </Card>
);
