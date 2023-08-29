import { FC } from 'react';
import { Container, Nav, Tab } from 'react-bootstrap';

import citySchedulesData from '../../data/conference/CitySchedulesData.json';
import styles from './CityScheduleInfo.module.less';

export const CityScheduleInfo: FC = () => (
  <Container>
    <section className="container mx-auto my-0 position-relative animated text-center">
      <h2 id="schedule" className="fs-4 py-5">
        大会日程与报名通道
      </h2>

      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={citySchedulesData[0].city}
      >
        <Nav className="flex-nowrap overflow-x-auto pb-2" variant="pills">
          {citySchedulesData.map(({ city }) => (
            <Nav.Item key={city}>
              <Nav.Link eventKey={city}>{city}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Tab.Content>
          {citySchedulesData.map(({ city, href, schedules }) => (
            <Tab.Pane key={city} eventKey={city}>
              <div className={styles.table_box} key={city}>
                <a
                  className="px-3 py-2 text-start d-flex w-50"
                  target="_blank"
                  href={href}
                  rel="noreferrer"
                >
                  {href ? '点此报名' : '报名通道即将开启'}
                </a>
                {schedules?.[0] && (
                  <table className="text-start">
                    <thead>
                      <tr>
                        <th className="p-2 align-middle">时间</th>
                        <th className="p-2 align-middle">主题</th>
                        <th className="p-2 align-middle">演讲嘉宾</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedules.map(({ time, topic, guest }) => (
                        <tr key={time}>
                          <td className="p-2 align-middle">{time}</td>
                          <td className="p-2 align-middle">{topic}</td>
                          <td className="p-2 align-middle">{guest}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    </section>
  </Container>
);
