import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Icon,
  Row,
  text2color,
} from 'idea-react';
import { GitRepository } from 'mobx-github';
import { FC, useState } from 'react';

import { IssueCard } from './Card';

export const IssuePanel: FC<GitRepository> = ({ name, language, issues }) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <Card className="p-0" theme="light">
      <CardHeader
        className="cursor-pointer"
        onClick={() => setIsExpand(!isExpand)}
      >
        <Row className="align-items-center gx-3">
          <Col span={4} sm={2}>
            {language && (
              <Badge className="fs-6" theme={text2color(language, ['light'])}>
                {language}
              </Badge>
            )}
          </Col>
          <Col span={6} sm={8} as="h3" className="m-0 text-truncate">
            {name}
          </Col>
          <Col span={1} className="text-end">
            <Badge className="fs-6" pill theme="info">
              {issues?.length}
            </Badge>
          </Col>
          <Col span={1} className="text-end">
            <Icon
              size={1.5}
              name={isExpand ? 'arrows-collapse' : 'arrows-expand'}
            />
          </Col>
        </Row>
      </CardHeader>

      <Collapse open={isExpand}>
        <CardBody as={Row} cols={1} sm={2} xl={2} className="g-3">
          {issues?.map(issue => (
            <Col key={issue.title}>
              <IssueCard className="h-100" {...issue} />
            </Col>
          ))}
        </CardBody>
      </Collapse>
    </Card>
  );
};
