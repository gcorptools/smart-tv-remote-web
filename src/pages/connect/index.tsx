import { CLIENT_ROUTES } from '@/constants';
import {
  useRemoteControlApi,
  RemoteType,
} from '@gcorptools/smart-tv-remote-common';
import {
  Button,
  Checkbox,
  Form,
  FormInstance,
  Input,
  Select,
  Space,
  Typography,
} from 'antd';
import Router from 'next/router';
import { useMemo, useRef } from 'react';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { md: { offset: 2, span: 20 } },
};
const tailLayout = {
  wrapperCol: { md: { offset: 8, span: 20 } },
};

const { Text } = Typography;

const Connect = ({}: any) => {
  const [form] = Form.useForm();
  const ref = useRef<FormInstance>(null);
  const { read, newRemote } = useRemoteControlApi();
  const initialValues = useMemo(() => {
    const oldParams = read();
    return {
      type: oldParams?.type || '',
      domain: oldParams?.domain || '',
      authKey: oldParams?.authKey || '0000',
      port: oldParams?.port || 80,
      debug: oldParams?.debug || false,
    };
  }, [read]);

  const options = useMemo(
    () =>
      Object.keys(RemoteType)
        .sort()
        .map((label: string) => ({
          value: (RemoteType as any)[label],
          label,
        })),
    []
  );

  const onReset = () => {
    form.resetFields();
  };

  const onSubmit = (values: any) => {
    const { type, ...params } = values;
    newRemote(type, params);
    Router.push(CLIENT_ROUTES.remoteControl);
  };

  return (
    <Form
      {...layout}
      ref={ref}
      form={form}
      size='middle'
      name='configuration-form'
      onFinish={onSubmit}
      initialValues={initialValues}
      requiredMark='optional'
    >
      <Form.Item
        hasFeedback
        name='type'
        label='Type'
        rules={[{ required: true }]}
        help='Choose a type from your TV'
      >
        <Select options={options} />
      </Form.Item>

      <Form.Item
        hasFeedback
        name='domain'
        label='Domain'
        rules={[{ required: true }]}
        help='ie: http://192.168.1.1'
      >
        <Input />
      </Form.Item>

      <Form.Item
        hasFeedback
        name='port'
        label='Port'
        rules={[{ required: true }]}
        help='ie: 80'
      >
        <Input type='number' step={1} min={0} />
      </Form.Item>

      <Form.Item
        hasFeedback
        name='authKey'
        label='Auth key'
        rules={[{ required: false }]}
        help='ie: 0000'
      >
        <Input />
      </Form.Item>

      <Form.Item name='debug' {...tailLayout} valuePropName='checked'>
        <Checkbox>
          Enable debug
          <Text type='secondary'> (Enable extra information in logs)</Text>
        </Checkbox>
      </Form.Item>

      <Space.Compact style={{ width: '100%', marginBottom: 10 }}>
        <Button block htmlType='button' onClick={onReset}>
          Reset
        </Button>
        <Button block type='primary' htmlType='submit'>
          Save
        </Button>
      </Space.Compact>
    </Form>
  );
};

export default Connect;
