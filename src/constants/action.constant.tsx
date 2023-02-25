import {
  RemoteControlAction,
  SONY_ACTIONS,
} from '@gcorptools/smart-tv-remote-common';
import {
  PoweroffOutlined,
  MinusOutlined,
  PlusOutlined,
  UpOutlined,
  DownOutlined,
  BackwardOutlined,
  ForwardOutlined,
  FastBackwardOutlined,
  FastForwardOutlined,
  PauseOutlined,
  BorderOutlined,
  HomeOutlined,
  PlayCircleOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  BarcodeOutlined,
  QuestionOutlined,
  EyeInvisibleOutlined,
  PictureOutlined,
  ExpandAltOutlined,
  ControlOutlined,
} from '@ant-design/icons';
import { Typography } from 'antd';

const { Text } = Typography;

export type WebRemoteAction = RemoteControlAction & {
  icon: JSX.Element;
};

const ACTION_ICON: Record<string, JSX.Element> = {
  AudioQualityMode: <ControlOutlined />,
  Wide: <ExpandAltOutlined />,
  PictureMode: <PictureOutlined />,
  PicOff: <EyeInvisibleOutlined />,
  iManual: <QuestionOutlined />,
  GGuide: <BarcodeOutlined />,
  Next: <ForwardOutlined />,
  Prev: <BackwardOutlined />,
  Forward: <FastForwardOutlined />,
  Rewind: <FastBackwardOutlined />,
  Play: <PlayCircleOutlined />,
  Pause: <PauseOutlined />,
  Stop: <BorderOutlined />,
  Down: <CaretDownOutlined />,
  Up: <CaretUpOutlined />,
  Home: <HomeOutlined />,
  Left: <CaretLeftOutlined />,
  Right: <CaretRightOutlined />,
  PowerOff: <PoweroffOutlined />,
  VolumeDown: <MinusOutlined />,
  VolumeUp: <PlusOutlined />,
  ChannelDown: <DownOutlined />,
  ChannelUp: <UpOutlined />,
};

export const ICON_BRAVIA_ACTIONS = Object.keys(SONY_ACTIONS).reduce(
  (result: Record<string, RemoteControlAction>, key: string) => {
    const item = result[key];
    const icon = ACTION_ICON[key] || <Text>{item.text}</Text>;
    return { ...result, [key]: { ...item, icon } };
  },
  SONY_ACTIONS
);
