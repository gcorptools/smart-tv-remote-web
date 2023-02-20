import {
  BraviaRemoteControl,
  RemoteControlProvider,
  RemoteControlUtils,
  RemoteType,
} from '@gcorptools/smart-tv-remote-common';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import { useCallback, useMemo } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const remoteControlUtils = useMemo(() => {
    const instance = RemoteControlUtils.getInstance();
    instance.setTypeMap({
      [RemoteType.Bravia]: BraviaRemoteControl,
      [RemoteType.Samsung]: BraviaRemoteControl,
    });
    return instance;
  }, []);

  const isBrowser = useCallback(() => typeof window !== 'undefined', []);

  const storeKey = useCallback(
    (key: string, value: string) => {
      if (!isBrowser()) {
        return;
      }
      localStorage.setItem(key, value);
    },
    [isBrowser]
  );

  const readKey = useCallback(
    (key: string) => {
      if (!isBrowser()) {
        return null;
      }
      localStorage.getItem(key);
    },
    [isBrowser]
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
      <RemoteControlProvider
        utils={remoteControlUtils}
        storeKey={storeKey}
        readKey={readKey}
      >
        <Component {...pageProps} />
      </RemoteControlProvider>
    </ConfigProvider>
  );
};

export default App;
