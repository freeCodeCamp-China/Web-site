import { Button, Container, Tab, Tabs } from 'idea-react';
import { FC } from 'react';

import citySchedulesData from '../../pages/api/conference/CitySchedulesData.json';
import styles from './CityScheduleInfo.module.less';

export const CityScheduleInfo: FC = () => (
  <Container>
    <section className="container mx-auto my-0 position-relative animated text-center">
      <h2 id="schedule" className="fs-4 py-5">
        大会日程与报名通道
      </h2>

      <Tabs
        id="left-tabs-example"
        defaultActiveKey={citySchedulesData[0].city}
        variant="pills"
      >
        {citySchedulesData.map(({ city, href, schedules }) => (
          <Tab
            key={city}
            eventKey={city}
            label={city}
            className={styles.table_box}
          >
            <div className="d-flex justify-content-start py-3">
              <Button theme="primary" target="_blank" href={href}>
                {href ? '点此报名' : '报名通道即将开启'}
              </Button>
            </div>

            {schedules?.[0] && (
              <table className="text-start w-100">
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
          </Tab>
        ))}
      </Tabs>
    </section>
  </Container>
);
