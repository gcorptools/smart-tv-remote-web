import {
  BraviaRemoteControl,
  RemoteControlProvider,
  RemoteControlUtils,
  RemoteType,
} from '@gcorptools/smart-tv-remote-common';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import { useMemo } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const remoteControlUtils = useMemo(() => {
    const instance = RemoteControlUtils.getInstance();
    instance.setTypeMap({
      [RemoteType.Bravia]: BraviaRemoteControl,
      [RemoteType.Samsung]: BraviaRemoteControl,
    });
    return instance;
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
      <RemoteControlProvider utils={remoteControlUtils}>
        <Component {...pageProps} />
      </RemoteControlProvider>
    </ConfigProvider>
  );
};

export default App;
