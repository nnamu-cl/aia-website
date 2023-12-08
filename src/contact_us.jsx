import React from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const ContactUs = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div className="contact-us" style={{marginLeft: "200px", marginRight: "500px", alignItems: 'center' }}>
      <Title level={2}>Contact Us</Title>
      <Paragraph>
        If you have any questions or feedback, please feel free to contact us using the form below.
      </Paragraph>
      <Form
        name="contact"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please enter your name',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please enter your email',
            },
            {
              type: 'email',
              message: 'Invalid email format',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[
            {
              required: true,
              message: 'Please enter your message',
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactUs;
