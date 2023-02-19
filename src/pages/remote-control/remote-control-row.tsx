import RemoteControlColumn from '@/pages/remote-control/remote-control-column';
import { BaseRemoteControlAction } from '@gcorptools/smart-tv-remote-common';
import { Row } from 'antd';

const RemoteControlRow = ({
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
        <RemoteControlColumn
          key={`row-${index}-column-${i}`}
          value={value[i] || []}
          index={i}
        />
      ))}
    </Row>
  );
};

export default RemoteControlRow;
