import {
  faBilibili,
  faGithub,
  faTwitter,
  faWeibo,
  faWeixin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faPodcast } from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { FC } from 'react';

const IconMap = {
  website: { icon: faGlobe, color: 'info' },
  github: { icon: faGithub, color: 'dark' },
  twitter: { icon: faTwitter, color: 'primary' },
  weibo: { icon: faWeibo, color: 'danger' },
  wechat: { icon: faWeixin, color: 'success' },
  youtube: { icon: faYoutube, color: 'danger' },
  bilibili: { icon: faBilibili, color: 'primary' },
  podcast: { icon: faPodcast, color: 'warning' },
};

export type SocialIconBarProps = Pick<FontAwesomeIconProps, 'size'> &
  Partial<Record<keyof typeof IconMap, string>>;

export const SocialIconBar: FC<SocialIconBarProps> = ({ size, ...URLs }) => (
  <ul className="list-inline m-0 d-flex flex-wrap justify-content-center gap-3">
    {Object.entries(URLs).map(([key, URI]) => (
      <li key={key} className="list-inline-item">
        <a target="_blank" href={URI} rel="noreferrer">
          <FontAwesomeIcon
            className={`text-${IconMap[key as keyof typeof IconMap].color}`}
            size={size}
            icon={IconMap[key as keyof typeof IconMap].icon}
          />
        </a>
      </li>
    ))}
  </ul>
);
