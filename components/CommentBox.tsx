import Giscus, { GiscusProps } from '@giscus/react';
import { observer } from 'mobx-react';
import { FC } from 'react';

import { i18n } from '../models/Translation';

export const CommentBox: FC<Partial<GiscusProps>> = observer(props => {
  const { currentLanguage } = i18n;

  return (
    <Giscus
      repo="freeCodeCamp-China/Web-site"
      repoId="MDEwOlJlcG9zaXRvcnkxNTU0OTgyNTk="
      category="General"
      categoryId="DIC_kwDOCUS3E84CfFTk"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      lang={
        currentLanguage?.startsWith('zh-')
          ? currentLanguage
          : currentLanguage?.split('-')[0]
      }
      loading="lazy"
      {...props}
    />
  );
});
