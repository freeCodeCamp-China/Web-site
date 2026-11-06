import {
  Badge,
  Card,
  CardBody,
  CardImage,
  CardSubtitle,
  CardTitle,
  Col,
} from 'idea-react';
import { FC } from 'react';

export interface PersonCardProps {
  avatar: string;
  name: string;
  link?: string;
  position?: string;
  count?: number;
}

export const PersonCard: FC<PersonCardProps> = ({
  avatar,
  name,
  link,
  position,
  count,
}) => (
  <Col as="li" className="my-3 d-flex justify-content-center">
    <Card className="border-0 align-items-center position-relative">
      {count != null && (
        <Badge
          className="fs-6 position-absolute top-0 end-0"
          pill
          theme="danger"
        >
          {count}
        </Badge>
      )}
      <CardImage
        className="rounded-circle"
        style={{ width: '8rem' }}
        placement="top"
        src={avatar}
        alt={name}
      />
      <CardBody>
        <CardTitle
          as="a"
          className="fs-6 text-decoration-none stretched-link"
          href={link || '#'}
        >
          {name}
        </CardTitle>
        <CardSubtitle className="fw-light mt-2">{position}</CardSubtitle>
      </CardBody>
    </Card>
  </Col>
);
