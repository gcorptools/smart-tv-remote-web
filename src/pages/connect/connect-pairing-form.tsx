import { useRemoteControlApi } from '@gcorptools/smart-tv-remote-common';
import { Form, FormInstance, Input, Space, Button } from 'antd';
import { useRef } from 'react';

const ConnectPairingForm = ({ onSuccess, layout, onBack }: any) => {
  const [form] = Form.useForm();
  const ref = useRef<FormInstance>(null);
  const { sendAuthKey } = useRemoteControlApi();

  const onSubmit = async (values: any) => {
    const { authKey } = values;
    const encoded = Buffer.from(`:${authKey}`, 'binary').toString('base64');
    await sendAuthKey(encoded).then(onSuccess);
  };

  return (
    <Form
      {...layout}
      ref={ref}
      form={form}
      size='middle'
      name='connect-pairing-form'
      onFinish={onSubmit}
      requiredMark='optional'
    >
      <Form.Item
        hasFeedback
        name='authKey'
        label='Pairing key'
        rules={[{ required: true }]}
        help='ie: 1234 (see notification on your TV)'
      >
        <Input />
      </Form.Item>

      <Space.Compact style={{ width: '100%', marginBottom: 10 }}>
        <Button block htmlType='button' onClick={onBack}>
          Back
        </Button>
        <Button block type='primary' htmlType='submit'>
          Save
        </Button>
      </Space.Compact>
    </Form>
  );
};

export default ConnectPairingForm;
