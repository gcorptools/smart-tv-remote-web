import { CLIENT_ROUTES } from '@/constants';
import { useRemoteControlState } from '@/contexts';
import RemoteRow from '@/pages/remote/remote-row';
import { Button, Divider, Empty, Row, Typography } from 'antd';
import Router from 'next/router';
import { useMemo } from 'react';

const { Title } = Typography;

const Remote = () => {
  const { type, remoteControl, actionsMap } = useRemoteControlState();
  const { rows, columns } = useMemo(() => {
    let row = 0;
    const maxColumns = Object.keys(actionsMap)
      .map((key: string) => +key)
      .sort((a: number, b: number) => a - b)
      .reduce((result: number[], key: number) => {
        row = +key;
        const columnKeys = Object.keys(actionsMap[row]).map((c: string) => +c);
        const columns = Math.max(...columnKeys); // Number of columns
        result.push(columns);
        return result;
      }, []);
    const rows = Array.from(Array(row + 1));
    const columns = Math.max(...maxColumns) + 1;
    return { rows, columns };
  }, [actionsMap]);

  const BackButton = () => (
    <Button
      type='primary'
      onClick={() => Router.push(CLIENT_ROUTES.configuration)}
    >
      Back to configurations
    </Button>
  );

  if (!remoteControl) {
    return (
      <Empty>
        <BackButton />
      </Empty>
    );
  }

  return (
    <>
      <Row justify='space-around' align='middle'>
        <Title level={3}>{type.toUpperCase()}</Title>
      </Row>
      <Row justify='space-around' align='middle'>
        <BackButton />
      </Row>
      <Divider />

      {rows.map((_: any, index: number) => (
        <RemoteRow
          key={`row-${index}`}
          index={index}
          columns={columns}
          value={actionsMap[index] || {}}
        />
      ))}
    </>
  );
};

export default Remote;
