import {
  BaseRemoteControlAction,
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
  value: BaseRemoteControlAction[];
}) => {
  const { remoteControl } = useRemoteControlState();
  const screens = useBreakpoint();
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

  const onClick = (action: BaseRemoteControlAction) => {
    remoteControl?.sendAction(action);
  };

  const Buttons = () => {
    if (!value.length) {
      return <Button style={buttonStyle} disabled></Button>;
    }
    const [first, ...others] = value;
    if (!others.length || !screens.lg) {
      return (
        <Tooltip title={first.label}>
          <Button style={buttonStyle} onClick={() => onClick(first)}>
            {first.icon}
          </Button>
        </Tooltip>
      );
    }

    const items = others.map((v: BaseRemoteControlAction) => ({
      label: (
        <Tooltip title={v.label}>
          <Text style={buttonStyle}>{v.icon}</Text>
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
          <Text style={dropdownStyle}>{first.icon}</Text>
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
