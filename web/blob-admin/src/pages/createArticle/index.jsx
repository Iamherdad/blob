import { Button, Form, Input, Popover, Select, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useState, useEffect } from "react";
import Bytemd from "../../components/markdown";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import TextArea from "antd/es/input/TextArea";
import { uploadImg } from "../../service/api/fileUpload";

export default function CreateArticle() {
  const [value, setValue] = useState("");
  const [fileList, setFileList] = useState([]);

  const [form] = Form.useForm();
  const uploadChange = ({ file, fileList: newFileList }) => {
    if (file.status == "removed") {
      console.log(111);
      form.setFieldValue("cover", undefined);
    }
    console.log(newFileList, "file");

    setFileList(newFileList);
  };

  const onFinish = () => {};
  const onFinishFailed = () => {};
  const onChange = () => {};
  const onSearch = () => {};
  const handleClick = async () => {
    try {
      const vail = await form.validateFields();
      console.log(vail, "1");
    } catch (err) {
      console.log(err, "err");
      console.log(form.getFieldValue("cover"), "val");
    }
  };
  const handleUpload = async ({ file, onSuccess }) => {
    let fromData = new FormData();
    fromData.append("file", file);

    const result = await uploadImg(fromData);
    if (result.code) {
      onSuccess(result.data);
    }
    console.log(result, "result");
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        上传封面
      </div>
    </div>
  );
  return (
    <div className={styles.createArticle}>
      <div className={styles.header}>
        <Input
          className={styles.left}
          placeholder="请输入标题"
          bordered={false}
        />

        <div className={styles.right}>
          <Popover
            content={
              <div className={styles.content}>
                <h3 className={styles.contentTitle}>发布文章</h3>
                <div className={styles.contentBox}>
                  <Form
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    style={{
                      maxWidth: 600,
                    }}
                    // initialValues={{
                    //   remember: true,
                    // }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    form={form}
                  >
                    <FormItem
                      label="选择标签"
                      name="tags"
                      rules={[
                        {
                          required: true,
                          message: "请选择你的标签!",
                        },
                      ]}
                    >
                      <Select
                        showSearch
                        placeholder="选择对应标签"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        options={[
                          {
                            value: "web",
                            label: "前端",
                          },
                          {
                            value: "node",
                            label: "node",
                          },
                          {
                            value: "go",
                            label: "go",
                          },
                        ]}
                      />
                    </FormItem>
                    <FormItem
                      label="文章封面"
                      name="cover"
                      rules={[
                        {
                          required: true,
                          message: "请选择你的封面!",
                        },
                      ]}
                    >
                      <Upload
                        customRequest={handleUpload}
                        listType="picture-card"
                        onChange={uploadChange}
                        maxCount={1}
                        fileList={fileList}
                        headers={{ ContentType: "multipart / form - data" }}
                      >
                        {fileList.length >= 1 ? null : uploadButton}
                      </Upload>
                    </FormItem>
                    <FormItem
                      label="编辑摘要"
                      name="desc"
                      rules={[
                        {
                          required: true,
                          message: "摘要不能为空!",
                        },
                      ]}
                    >
                      <TextArea></TextArea>
                    </FormItem>
                  </Form>
                  <Button type="primary" onClick={handleClick}>
                    Submit
                  </Button>
                </div>
              </div>
            }
            trigger="click"
            placement="bottomLeft"
          >
            <Button type="primary">发布</Button>
          </Popover>
        </div>
      </div>
      <Bytemd value={value || ""} setValue={setValue} />
    </div>
  );
}
