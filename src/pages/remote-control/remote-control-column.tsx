import { WebRemoteAction } from '@/constants';
import {
  RemoteControlAction,
  useRemoteControlState,
} from '@gcorptools/smart-tv-remote-common';
import { Button, Col, Dropdown, Grid, Tooltip, Typography } from 'antd';
import { useMemo } from 'react';

const { useBreakpoint } = Grid;

const { Text } = Typography;

const RemoteControlColumn = ({
  index,
  value,
}: {
  index: number;
  value: RemoteControlAction[];
}) => {
  const { remoteControl } = useRemoteControlState();
  const screens = useBreakpoint();
  const safeValue = useMemo(() => value || [], [value]);
  const { buttonStyle, dropdownStyle, colSpan } = useMemo(
    () =>
      screens.lg
        ? {
            colSpan: 3,
            buttonStyle: { width: 100 },
            dropdownStyle: { width: 50 },
          }
        : {
            colSpan: 4,
            buttonStyle: { width: 50, fontSize: '5pt' },
            dropdownStyle: { width: 30, fontSize: '8pt' },
          },
    [screens.lg]
  );

  const onClick = (action: RemoteControlAction) => {
    remoteControl?.sendAction(action);
  };

  const Buttons = () => {
    if (!safeValue.length) {
      return <Button style={buttonStyle} disabled></Button>;
    }
    const [first, ...others] = safeValue;
    if (!others.length || !screens.lg) {
      return (
        <Tooltip title={first.label}>
          <Button style={buttonStyle} onClick={() => onClick(first)}>
            {(first as WebRemoteAction).icon}
          </Button>
        </Tooltip>
      );
    }

    const items = others.map((v: RemoteControlAction) => ({
      label: (
        <Tooltip title={v.label}>
          <Text style={buttonStyle}>{(v as WebRemoteAction).icon}</Text>
        </Tooltip>
      ),
      key: v.label,
      onClick: () => onClick(v),
    }));

    return (
      <Dropdown.Button
        menu={{
          items,
        }}
        onClick={() => onClick(first)}
      >
        <Tooltip title={first.label}>
          <Text style={dropdownStyle}>{(first as WebRemoteAction).icon}</Text>
        </Tooltip>
      </Dropdown.Button>
    );
  };
  return (
    <Col span={colSpan}>
      <Buttons />
    </Col>
  );
};

export default RemoteControlColumn;
