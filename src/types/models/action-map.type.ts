import { BaseRemoteControlAction } from '@/types/models/base-remote-control-action.type';

export type ActionMap = Record<
  number,
  Record<number, BaseRemoteControlAction[]>
>;
