import Link from 'next/link';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import PersonCard from '../components/PersonCard';
import { data } from './api/data';

type OrganizersComponentProps = {
  picPrefix: string;
  item: {
    pic: string;
    name?: string;
  };
};

const organizers = Object.values(data).flatMap(city => city.organiser);

const Organiser: FC<OrganizersComponentProps> = ({ picPrefix, item }) => {
  return (
    <Container>
      <h1 className="mb-4">社区组织者</h1>
      <Row as="ul" className="list-unstyled g-5" xs={2} sm={6}>
        {organizers.map(item => (
          <Col
            className="list_item mb-5 text-center"
            key={item?.name}
            style={{ marginBottom: '50px', width: '20%' }}
          >
            {item.link ? (
              <Link href={`/organiser/${item.link}`} passHref>
                <a className="text-dark">
                  <PersonCard
                    picPrefix={picPrefix}
                    pic={item.pic}
                    name={item.name}
                  />
                </a>
              </Link>
            ) : (
              <PersonCard
                picPrefix={picPrefix}
                pic={item.pic}
                name={item.name}
              />
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Organiser;
