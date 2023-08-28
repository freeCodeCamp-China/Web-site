import { FC, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import citySchedulesData from '../../data/conference/CitySchedulesData.json';
import styles from './CityScheduleInfo.module.less';

export const CityScheduleInfo: FC = () => {
  const [selectedCity, setSelectedCity] = useState(citySchedulesData[0]?.city);

  return (
    <section className="container position-relative text-center">
      <h2 id="schedule" className="fs-4 py-5">
        大会日程与报名通道
      </h2>

      <Tabs
        className="flex-nowrap overflow-x-auto py-2"
        variant="pills"
        fill
        activeKey={selectedCity}
        onSelect={key => setSelectedCity(key)}
      >
        {citySchedulesData.map(({ city }, index) => (
          <Tab className="" key={city} eventKey={city} title={city} id={index}>
            <div data-city={city} key={city}></div>
          </Tab>
        ))}
      </Tabs>
    </section>
  );
};
