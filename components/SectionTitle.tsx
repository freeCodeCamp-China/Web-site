import { Badge } from 'idea-react';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

export type SectionTitleProps = PropsWithChildren<
  HTMLAttributes<HTMLHeadingElement> & { count?: number }
>;

export const SectionTitle: FC<SectionTitleProps> = ({
  className = '',
  count,
  children,
}) => (
  <h2 className={`d-flex align-items-center gap-2 ${className}`}>
    {children}
    <Badge className="fs-6" pill theme="danger">
      {count}
    </Badge>
  </h2>
);
