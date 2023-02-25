import RemoteControlColumn from '@/pages/remote-control/remote-control-column';
import { RemoteControlAction } from '@gcorptools/smart-tv-remote-common';
import { Row } from 'antd';
import { useMemo } from 'react';

const RemoteControlRow = ({
  index,
  columns,
  value,
}: {
  index: number;
  columns: number;
  value: Record<number, RemoteControlAction[]>;
}) => {
  const safeValue = useMemo(() => value || {}, [value]);

  return (
    <Row style={{ marginBottom: 5 }} justify='center' align='middle'>
      {Array.from(Array(columns)).map((_: any, i: number) => (
        <RemoteControlColumn
          key={`row-${index}-column-${i}`}
          value={safeValue[i] || []}
          index={i}
        />
      ))}
    </Row>
  );
};

export default RemoteControlRow;
