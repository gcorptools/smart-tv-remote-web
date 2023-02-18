import RemoteColumn from '@/pages/remote/remote-column';
import { BaseRemoteControlAction } from '@/types';
import { Row } from 'antd';

const RemoteRow = ({
  index,
  columns,
  value,
}: {
  index: number;
  columns: number;
  value: Record<number, BaseRemoteControlAction[]>;
}) => {
  return (
    <Row style={{ marginBottom: 5 }} justify='center' align='middle'>
      {Array.from(Array(columns)).map((_: any, i: number) => (
        <RemoteColumn
          key={`row-${index}-column-${i}`}
          value={value[i] || []}
          index={i}
        />
      ))}
    </Row>
  );
};

export default RemoteRow;
