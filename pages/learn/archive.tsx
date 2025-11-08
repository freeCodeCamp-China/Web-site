import { observer } from 'mobx-react';
import { FC } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import { PageHead } from '../../components/PageHead';
import { SectionTitle } from '../../components/SectionTitle';
import { stableCourses } from '../../config/curriculum';

const ArchivePage: FC = observer(() => (
  <Container as="main">
    <PageHead title="稳定版课程列表 - freeCodeCamp 中文社区" />

    <SectionTitle
      id="stable-courses"
      className="py-5 text-center text-md-start"
      count={stableCourses.length}
    >
      稳定版课程
    </SectionTitle>

    <Row as="ul" className="list-unstyled g-4" xs={1} md={2} lg={3}>
      {stableCourses.map(course => (
        <Col key={course.id} as="li">
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column">
              <Card.Title as="h3" className="fs-5 mb-3">
                {course.title}
              </Card.Title>
              <Card.Text className="text-muted flex-grow-1">
                {course.description}
              </Card.Text>
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-3"
              >
                开始学习
              </a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
));

export default ArchivePage;
