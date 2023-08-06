import * as fs from 'fs';
import { type } from 'os';
import path from 'path';
import { Col, Row } from 'react-bootstrap';

import styles from './Guest.module.less';

type Schedule = {
  time: string;
  topic: string;
  guest?: string;
};

type CitySchedules = {
  city: string;
  href: string;
  schedules: Schedule[];
};

export interface CityScheduleProps {
  citySchedules: CitySchedules[];
}

export async function getScheduleInfoData(): Promise<CityScheduleProps> {
  const filePath = path.join(
    process.cwd(),
    './components/data/CityScheduleData.json',
  );
  const text = fs.readFileSync(filePath, 'utf8');
  let guestJSON = JSON.parse(text) as CityScheduleProps;
  return guestJSON;
}

function CityScheduleInfo({ citySchedules }: CityScheduleProps) {
  const cityList = citySchedules?.map((citySchedule, index) => {
    return (
      <span className="open" key={index}>
        {citySchedule.city}
      </span>
    );
  });

  const citySchedulesInfo = citySchedules?.map((citySchedule, index) => {
    return (
      <div
        className="table_box"
        data-city={citySchedule.city}
        style={{ display: 'block' }}
        key={index}
      >
        <a target="_blank" href={citySchedule.href} rel="noreferrer">
          点此报名
        </a>
        if ({citySchedule.schedules} !== undefined)
        {
          <table>
            <thead>
              <tr>
                <th>时间</th>
                <th>主题</th>
                <th>演讲嘉宾</th>
              </tr>
            </thead>
            <tbody>
              {citySchedule.schedules?.map((schedule, sub) => {
                return (
                  <tr key={sub}>
                    <td>{schedule.time}</td>
                    <td>{schedule.topic}</td>
                    <td>{schedule.guest}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      </div>
    );
  });

  return (
    <div className="d-block text-center" id="schedule">
      <section
        className={`${styles.container} mx-auto my-0 position-relative ${styles.animated}`}
      >
        <h2>大会日程与报名通道</h2>
        <h4 className="timeline">
          <div>{cityList}</div>
        </h4>
        {citySchedulesInfo}
      </section>
    </div>
  );
}

export default CityScheduleInfo;
