import { RemoteType } from '@/enums';
import {
  BaseRemoteControl,
  ActionMap,
  BaseRemoteControlParams,
} from '@/types/models';

export type RemoteControlCtxStateType = {
  type: RemoteType;
  remoteControl: BaseRemoteControl | null;
  actionsMap: ActionMap;
};

export type RemoteControlCtxApiType = {
  read: () => BaseRemoteControlParams & { type: RemoteType };
  newRemote: (type: RemoteType, params: BaseRemoteControlParams) => void;
};

export type RemoteControlCtxType = RemoteControlCtxStateType & {
  api: RemoteControlCtxApiType;
};
