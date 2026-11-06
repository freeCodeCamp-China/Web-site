import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
  Icon,
  Nameplate,
  Stack,
  text2color,
} from 'idea-react';
import { marked } from 'marked';
import { Issue } from 'mobx-github';
import { FC } from 'react';

export type IssueCardProps = Issue & Omit<CardProps, 'id' | 'body'>;

export const IssueCard: FC<IssueCardProps> = ({
  theme = 'light',
  id,
  number,
  title,
  labels,
  body,
  html_url,
  user,
  comments,
  created_at,
  ...props
}) => (
  <Card {...props} theme={theme}>
    <CardHeader
      as="h4"
      className="d-flex justify-content-between align-items-center gap-3"
    >
      <a
        className="text-decoration-none text-secondary text-truncate"
        title={title}
        href={html_url}
        target="_blank"
        rel="noreferrer"
      >
        #{number} {title}
      </a>
      <Stack direction="horizontal" gap={2}>
        {labels.map(
          label =>
            typeof label === 'object' && (
              <Badge
                key={label.name}
                className="fs-6"
                {...(label.color
                  ? {
                      theme: undefined,
                      style: { background: `#${label.color}` },
                    }
                  : {
                      theme: text2color(label.name || '', ['light']),
                    })}
              >
                {label.name}
              </Badge>
            ),
        )}
      </Stack>
    </CardHeader>
    <CardBody
      as="article"
      dangerouslySetInnerHTML={{ __html: marked(body || '') }}
    />
    <CardFooter className="d-flex justify-content-between align-items-center">
      {user && <Nameplate name={user.name || ''} avatar={user.avatar_url} />}

      <Stack direction="horizontal" gap={2}>
        <Icon name="chat-left-text" />
        {comments}
      </Stack>

      <time dateTime={created_at}>{new Date(created_at).toLocaleString()}</time>
    </CardFooter>
  </Card>
);
