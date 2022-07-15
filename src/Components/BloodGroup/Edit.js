import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBloodGroupById } from "../../Service/CallAPI";

export default function Edit(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await getBloodGroupById(parseInt(id)).then((res) => console.log(res));
  };

  const onFinish = async (data) => {
    console.log(data);
    try {
    } catch (error) {}
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        onFinish={onFinish}
      >
        <Form.Item label="Blood Name" name="bloodName">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="secondary" onClick={() => navigate(-1)}>
            goBack
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
