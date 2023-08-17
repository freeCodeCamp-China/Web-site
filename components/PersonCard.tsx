import { FC } from 'react';
import { Card, Col } from 'react-bootstrap';

export type PersonCardProps = {
  avatar: string;
  name: string;
  link?: string;
  position?: string;
  key: number;
};

export const PersonCard: FC<PersonCardProps> = ({
  avatar,
  name,
  link,
  position,
}) => (
  <Col as="li" className="my-3 d-flex  justify-content-center">
    <Card className="border-0 align-items-center">
      <Card.Img
        className="rounded-circle"
        style={{ width: '8rem' }}
        variant="top"
        src={avatar}
        alt={name}
      />
      <Card.Body>
        <Card.Title as="a" className="fs-6" href={link}>
          {name}
        </Card.Title>
        <Card.Subtitle className="fw-light mt-2">{position}</Card.Subtitle>
      </Card.Body>
    </Card>
  </Col>
);
