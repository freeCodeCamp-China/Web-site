import Giscus, { GiscusProps } from '@giscus/react';
import { observer } from 'mobx-react';
import { FC, useContext } from 'react';

import { I18nContext } from '../models/Translation';

export const CommentBox: FC<Partial<GiscusProps>> = observer(props => {
  const { currentLanguage } = useContext(I18nContext);

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
