import { ICON_BRAVIA_ACTIONS } from '@/constants';
import {
  useRemoteControlApi,
  RemoteType,
} from '@gcorptools/smart-tv-remote-common';
import {
  Form,
  FormInstance,
  Input,
  Select,
  Checkbox,
  Space,
  Button,
  Typography,
} from 'antd';
import { useRef, useMemo } from 'react';

const { Text } = Typography;

const ConnectParamsForm = ({ onSuccess, layout, tailLayout }: any) => {
  const [form] = Form.useForm();
  const ref = useRef<FormInstance>(null);
  const { newRemote } = useRemoteControlApi();

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

  const onSubmit = async (values: any) => {
    const { type, ...params } = values;
    const instance = newRemote(
      type,
      params,
      Object.values(ICON_BRAVIA_ACTIONS)
    );
    await instance.requestPairingKey().then(onSuccess);
  };

  return (
    <Form
      {...layout}
      ref={ref}
      form={form}
      size='middle'
      name='connect-params-form'
      onFinish={onSubmit}
      initialValues={{ port: 80 }}
      requiredMark='optional'
    >
      <Form.Item
        hasFeedback
        name='clientId'
        label='Client ID'
        rules={[{ required: true }]}
        help='ie: An unique ID'
      >
        <Input />
      </Form.Item>

      <Form.Item
        hasFeedback
        name='clientName'
        label='Client name'
        rules={[{ required: true }]}
        help='ie: MY-LAPTOP'
      >
        <Input />
      </Form.Item>

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
        name='url'
        label='Url'
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

export default ConnectParamsForm;
