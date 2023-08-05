import React, { FC } from 'react';
import { Card } from 'react-bootstrap';

type PersonCardProps = {
  picPrefix: string;
  pic: string;
  name?: string;
};

const PersonCard: FC<PersonCardProps> = ({ picPrefix, pic, name }) => {
  return (
    <div>
      <Card
        className="rounded-circle shadow-sm mx-auto"
        style={{ width: '120px', height: '120px' }}
      >
        <Card.Img
          variant="top"
          src={`${picPrefix}/organiser/${pic}`}
          alt={name}
        />
      </Card>
      <p className="mt-3 mb-1">{name}</p>
    </div>
  );
};

export default PersonCard;
