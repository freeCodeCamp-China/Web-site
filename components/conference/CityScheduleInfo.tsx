import { FC, useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';

import citySchedulesData from '../../data/conference/CitySchedulesData.json';
import styles from './CityScheduleInfo.module.less';

export const CityScheduleInfo: FC = () => {
  const [selectedCity, setSelectedCity] = useState(citySchedulesData[0].city); // 初始化为第一个城市

  return (
    <Container>
      <section className="container mx-auto my-0 position-relative animated text-center">
        <h2 id="schedule" className="fs-4 py-5">
          大会日程与报名通道
        </h2>

        <Tabs
          className="flex-nowrap overflow-x-auto py-2"
          variant="pills"
          fill
          activeKey={selectedCity}
        >
          {citySchedulesData.map(({ city }) => (
            <Tab key={city} eventKey={city} title={city} id={city}>
              <div data-city={city} key={city}></div>
            </Tab>
          ))}
        </Tabs>
      </section>
    </Container>
  );
};
