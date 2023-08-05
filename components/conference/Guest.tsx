import * as fs from 'fs';
import path from 'path';

import styles from './Guest.module.less';

type Guest = {
  name: string;
  pic: string;
  position: string;
};

export interface GuestProps {
  guests: Guest[];
}

export async function getGuestInfoData(): Promise<GuestProps> {
  const filePath = path.join(process.cwd(), './components/data/GuestData.json');
  const text = fs.readFileSync(filePath, 'utf8');
  let guestJSON = JSON.parse(text) as GuestProps;
  return guestJSON;
}

function GuestInfo({ guests }: GuestProps) {
  return (
    <div className="d-block text-center" id="guests">
      <section
        className={`${styles.container} mx-0 my-auto position-relative ${styles.animated}`}
      >
        <h2 className="fs-4 m-0 py-5">演讲嘉宾（持续更新）</h2>
        <ul className="d-flex justify-content-between flex-wrap list-unstyled">
          {guests.map((guest, index) => (
            <li className={`${styles.media} text-center mt-1`} key={index}>
              <img
                src={
                  'https://conf.freecodecamp.one/assets/speakers/' + guest.pic
                }
              />
              <h4 className="fs-6">{guest.name}</h4>
              <p className="mt-3">
                <span>{guest.position}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default GuestInfo;
