import {
  SonyRemoteControl,
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
      [RemoteType.Sony]: SonyRemoteControl,
      [RemoteType.Samsung]: SonyRemoteControl,
    });
    return instance;
  }, []);

  const onSuccess = useCallback((result: any) => {
    console.log('Storing called');
    console.log('result', result);
  }, []);

  const onError = useCallback((err: any) => {
    console.log('error', err);
  }, []);

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
        onSuccess={onSuccess}
        onError={onError}
      >
        <Component {...pageProps} />
      </RemoteControlProvider>
    </ConfigProvider>
  );
};

export default App;
