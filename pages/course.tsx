import { Icon } from 'idea-react';
import { observer } from 'mobx-react';
import { FC } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import { PageHead } from '../components/PageHead';
import { SectionTitle } from '../components/SectionTitle';
import { stableCourses } from './api/curriculum';

const CoursePage: FC = observer(() => (
  <Container as="main">
    <PageHead title="课程列表" />

    <SectionTitle
      className="py-5 text-center text-md-start"
      count={stableCourses.length}
    >
      课程列表
    </SectionTitle>

    <Row as="ul" className="list-unstyled g-4" xs={1} md={2} lg={3}>
      {stableCourses.map(({ id, title, description, link, icon }) => (
        <Col key={id} as="li">
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column gap-3">
              <Icon name={icon} size={3} className="text-primary" />
              <Card.Title as="h3" className="fs-5">
                {title}
              </Card.Title>
              <Card.Text className="text-muted flex-grow-1">
                {description}
              </Card.Text>
              <Button href={link} target="_blank" variant="primary">
                开始学习
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
));

export default CoursePage;
