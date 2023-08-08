import { FC } from 'react';
import { Nav, Tab, Tabs } from 'react-bootstrap';

import citySchedulesData from './../data/CitySchedulesData.json';
import styles from './ConferenceSchedule.module.less';

type Schedule = {
  time: string;
  topic: string;
  guest?: string;
};

type CitySchedules = {
  city: string;
  href?: string;
  schedules?: Schedule[];
};

export interface CityScheduleProps {
  citySchedulesList: CitySchedules[];
}

const { citySchedulesList } = citySchedulesData as CityScheduleProps;

export const CityScheduleInfo: FC = () => {
  return (
    <div className="text-center" id="schedule">
      <section
        className={`${styles.container} mx-auto my-0 position-relative ${styles.animated}`}
      >
        <h2>大会日程与报名通道</h2>

        <Tabs
          variant="pills"
          defaultActiveKey={citySchedulesList[0].city}
          className="mb-3"
          justify
        >
          {citySchedulesList?.map(({ city, href, schedules }) => (
            <Tab className="open p-3" key={city} eventKey={city} title={city}>
              <div
                className="table_box"
                data-city={city}
                style={{ display: 'block' }}
                key={city}
              >
                <a
                  target="_blank"
                  href={href}
                  rel="noreferrer"
                  className="text-start"
                >
                  {href ? '点此报名' : '报名通道即将开启'}
                </a>
                {schedules === undefined || schedules?.length === 0 ? (
                  <></>
                ) : (
                  <table>
                    <thead>
                      <tr>
                        <th>时间</th>
                        <th>主题</th>
                        <th>演讲嘉宾</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedules.map(({ time, topic, guest }) => (
                        <tr key={topic}>
                          <td>{time}</td>
                          <td>{topic}</td>
                          {guest !== undefined ? <td>{guest}</td> : <></>}
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
    </div>
  );
};
