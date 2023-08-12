import { FC } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';

import citySchedulesData from '../data/CitySchedulesData.json';
import styles from './CityScheduleInfo.module.less';

export const CityScheduleInfo: FC = () => (
  <Container>
    <section
      className={`${styles.container} mx-auto my-0 position-relative ${styles.animated} text-center`}
    >
      <h2 id="schedule" className="fs-4 py-5">
        大会日程与报名通道
      </h2>

      <Tabs className="w-100 mb-2" variant="pills" justify>
        {citySchedulesData.map(({ city, href, schedules }) => (
          <Tab className="p-3" key={city} eventKey={city} title={city}>
            <div
              className={`${styles.table_box} w-100 overflow-x-auto`}
              data-city={city}
              key={city}
            >
              <div className="d-flex">
                <a
                  className="px-3 pb-3 text-start"
                  target="_blank"
                  href={href}
                  rel="noreferrer"
                >
                  {href ? '点此报名' : '报名通道即将开启'}
                </a>
              </div>
              {schedules?.[0] && (
                <table className="text-start w-100`">
                  <thead>
                    <tr>
                      <th className="px-3 py-3 ">时间</th>
                      <th className="px-3 py-3 ">主题</th>
                      <th className="px-3 py-3">演讲嘉宾</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedules.map(({ time, topic, guest }) => (
                      <tr key={topic}>
                        <td className="px-3 py-2">{time}</td>
                        <td className="py-2">{topic}</td>
                        <td className="py-2">{guest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </Tab>
        ))}
      </Tabs>
    </section>
  </Container>
);
