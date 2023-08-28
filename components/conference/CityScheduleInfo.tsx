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

      {citySchedulesData
        .filter(citySchedules => citySchedules.city === selectedCity)
        .map(({ city, href, schedules }) => (
          <div className={styles.table_box} key={city}>
            <div className="d-flex">
              <a
                className="p-3 text-start"
                target="_blank"
                href={href}
                rel="noreferrer"
              >
                {href ? '点此报名' : '报名通道即将开启'}
              </a>
            </div>

            {schedules?.[0] && (
              <table className="text-start w-100">
                <thead>
                  <tr>
                    <th className="p-3 align-top">时间</th>
                    <th className="p-3 align-top">主题</th>
                    <th className="p-3 align-top">演讲嘉宾</th>
                  </tr>
                </thead>
                <tbody>
                  {schedules.map(({ time, topic, guest }) => (
                    <tr key={topic}>
                      <td className="px-3 py-2 align-top">{time}</td>
                      <td className="py-2 align-top">{topic}</td>
                      <td className="py-2 align-top">{guest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
    </section>
  );
};
