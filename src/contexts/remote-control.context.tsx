import { RemoteType } from '@/enums';
import { BaseRemoteControlParams } from '@/types';
import {
  RemoteControlCtxApiType,
  RemoteControlCtxStateType,
  RemoteControlCtxType,
} from '@/types/contexts';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const REMOTE_CONTROL_INPUT_KEY = 'REMOTE_CONTROL_INPUT_KEY';

const DEFAULT_STATE = {
  type: null as any,
  remoteControl: null,
  actionsMap: {},
};
const DEFAULT_API = {
  read: () => ({} as any),
  newRemote: (type: RemoteType, params: BaseRemoteControlParams) => {},
};

const RemoteControlStateCtx =
  createContext<RemoteControlCtxStateType>(DEFAULT_STATE);
const RemoteControlApiCtx = createContext<RemoteControlCtxApiType>(DEFAULT_API);
const RemoteControlCtx = createContext<RemoteControlCtxType>({
  ...DEFAULT_STATE,
  api: DEFAULT_API,
});

export const RemoteControlProvider = ({ utils, children }: any) => {
  const [state, setState] = useState<RemoteControlCtxStateType>(DEFAULT_STATE);

  const read = (): any => {
    return JSON.parse(localStorage.getItem(REMOTE_CONTROL_INPUT_KEY) || '{}');
  };

  const newRemote = useCallback(
    (type: RemoteType, params: BaseRemoteControlParams) => {
      const instance = utils.newRemoteControl(type, params);
      localStorage.setItem(
        REMOTE_CONTROL_INPUT_KEY,
        JSON.stringify({ ...params, type })
      );
      setState({
        type,
        remoteControl: instance,
        actionsMap: instance.actionsMap(),
      });
    },
    [utils]
  );

  const api = useMemo(() => ({ read, newRemote }), [newRemote]);

  return (
    <RemoteControlCtx.Provider
      value={{
        ...state,
        api,
      }}
    >
      <RemoteControlApiCtx.Provider value={api}>
        <RemoteControlStateCtx.Provider value={state}>
          {children}
        </RemoteControlStateCtx.Provider>
      </RemoteControlApiCtx.Provider>
    </RemoteControlCtx.Provider>
  );
};

export const useRemoteControl = () => useContext(RemoteControlCtx);
export const useRemoteControlApi = () => useContext(RemoteControlApiCtx);
export const useRemoteControlState = () => useContext(RemoteControlStateCtx);
