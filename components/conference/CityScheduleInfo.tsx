import { FC, useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';

import citySchedulesData from '../../data/conference/CitySchedulesData.json';
import styles from './CityScheduleInfo.module.less';

export const CityScheduleInfo: FC = () => {
  const [selectCity, setSelectCity] = useState(citySchedulesData[0].city); // 初始化为第一个城市
  return (
    <Container>
      <section className="container mx-auto my-0 position-relative animated text-center">
        <h2 id="schedule" className="fs-4 py-3">
          大会日程与报名通道
        </h2>

        <Tabs
          className="flex-nowrap overflow-x-auto py-2"
          variant="pills"
          fill
          activeKey={selectCity}
          onSelect={key => setSelectCity(key)}
        >
          {citySchedulesData.map(({ city }) => (
            <Tab className="" key={city} eventKey={city} title={city} id={city}>
              <div data-city={city} key={city}></div>
            </Tab>
          ))}
        </Tabs>

        {citySchedulesData
          .filter(({ city }) => city === selectCity)
          .map(({ city, href, schedules }) => (
            <div className={styles.table_box} key={city}>
              <div className="d-flex">
                <a
                  className="px-3 py-2 text-start"
                  target="_blank"
                  href={href}
                  rel="noreferrer"
                >
                  {href ? '点此报名' : '报名通道即将开启'}
                </a>
              </div>

              {schedules?.[0] && (
                <table className="text-start">
                  <thead>
                    <tr>
                      <th className="p-2 align-top">时间</th>
                      <th className="p-2 align-top">主题</th>
                      <th className="p-2 align-top">演讲嘉宾</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedules.map(({ time, topic, guest }, index) => (
                      <tr key={index}>
                        <td className="p-2 align-top">{time}</td>
                        <td className="p-2 align-top">{topic}</td>
                        <td className="p-2 align-top">{guest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))}
      </section>
    </Container>
  );
};
