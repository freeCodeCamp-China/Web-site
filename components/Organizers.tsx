import { FC } from 'react';

import * as cityData from '../pages/api/data';

export const Organizers: FC = () => {
  const organizers = Object.values(cityData.data).flatMap(
    city => city.organiser,
  );

  return (
    <div className="content">
      <p className="list_head">社区组织者</p>
      <div className="lists">
        {organizers.map(item => (
          <div className="list_item" key={item?.name}>
            {item?.link ? (
              <a href={`organiser.html?name=${item.link}`}>
                <div className="img_content">
                  <div>
                    <img
                      src={`picPrefix + 'organiser/' + item.pic`}
                      alt={item?.name}
                    />
                  </div>
                </div>
                <p>{item?.name}</p>
              </a>
            ) : (
              <div className="img_content">
                <div>
                  <img
                    src={`picPrefix + 'organiser/' + item.pic`}
                    alt={item?.name}
                  />
                </div>
                <p>{item?.name}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
