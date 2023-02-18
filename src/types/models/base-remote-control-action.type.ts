export interface BaseRemoteControlAction {
  label: string;
  value: string;
  x: number;
  y: number;
  icon: JSX.Element;
  hide?: boolean;
}
