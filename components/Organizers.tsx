import { FC } from 'react';

import * as cityData from '../pages/api/data';

export const Organizers: FC = () => {
  const organizers = Object.values(cityData.data).flatMap(
    city => city.organiser,
  );

  return (
    <div className="content">
      <p className="h1 mb-4">社区组织者</p>
      <div className="d-flex flex-wrap">
        {organizers.map(item => (
          <div
            className="list_item mb-5 text-center"
            key={item?.name}
            style={{ marginBottom: '50px', width: '20%' }}
          >
            {item?.link ? (
              <a
                className="text-dark"
                href={`organiser.html?name=${item.link}`}
                style={{ fontSize: '15px' }}
              >
                <div
                  className="rounded-circle shadow-sm mx-auto"
                  style={{
                    width: '120px',
                    height: '120px',
                    overflow: 'hidden',
                  }}
                >
                  <div>
                    <img
                      src={`picPrefix + 'organiser/' + item.pic`}
                      alt={item?.name}
                    />
                  </div>
                </div>
                <p className="mt-3 mb-1">{item?.name}</p>
              </a>
            ) : (
              <div
                className="rounded-circle shadow-sm mx-auto"
                style={{ width: '120px', height: '120px', overflow: 'hidden' }}
              >
                <div>
                  <img
                    src={`picPrefix + 'organiser/' + item.pic`}
                    alt={item?.name}
                  />
                </div>
                <p className="mt-3 mb-1">{item?.name}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
