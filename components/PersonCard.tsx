import { FC } from 'react';
import { Card } from 'react-bootstrap';

export type PersonCardProps = {
  avatar: string;
  name?: string;
};

export const PersonCard: FC<PersonCardProps> = ({ avatar, name }) => (
  <div>
    <Card
      className="rounded-circle shadow-sm mx-auto"
      style={{ width: '7.5rem', height: '7.5rem' }}
    >
      <Card.Img
        variant="top"
        src={`/image/organiser/${avatar}`}
        alt={name}
        className="rounded-circle"
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </Card>
    <p className="mt-3 mb-1">{name}</p>
  </div>
);
