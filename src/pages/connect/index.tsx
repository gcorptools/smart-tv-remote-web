import { CLIENT_ROUTES } from '@/constants';
import ConnectPairingForm from '@/pages/connect/connect-pairing-form';
import ConnectParamsForm from '@/pages/connect/connect-params-form';
import { Steps, Typography } from 'antd';
import Router from 'next/router';
import { useState } from 'react';

const { Text } = Typography;
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { md: { offset: 2, span: 20 } },
};
const tailLayout = {
  wrapperCol: { md: { offset: 8, span: 20 } },
};

const Connect = ({}: any) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'TV Parameters',
      description: <Text>Enter your TV settings</Text>,
      content: (
        <ConnectParamsForm
          onSuccess={() => setCurrentStep(1)}
          layout={layout}
          tailLayout={tailLayout}
        />
      ),
    },
    {
      title: 'Pairing',
      description: <Text>Enter the authentication key</Text>,
      content: (
        <ConnectPairingForm
          onBack={() => setCurrentStep(0)}
          onSuccess={() => Router.push(CLIENT_ROUTES.remoteControl)}
          layout={layout}
          tailLayout={tailLayout}
        />
      ),
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    description: item.description,
  }));

  return (
    <>
      <Steps size='small' current={currentStep} items={items} />
      <div>{steps[currentStep].content}</div>
    </>
  );
};

export default Connect;
