import styled from "styled-components";
import { useSelector } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import { Button, message, Form, Input } from "antd";
import { useRef, useState } from "react";
import UploadComponent from "./UploadComponent";

const StyledInput = styled(Input)`
  &:focus {
    border-color: black !important;
    box-shadow: none !important;
  }
  height: 45px;
`;

const StyledTextArea = styled(TextArea)`
  &:focus {
    border-color: black !important;
    box-shadow: none !important;
  }
`;

const StyledButton = styled(Button)`
  &.ant-btn:active,
  &.ant-btn:hover {
    background-color: #000000 !important;
    border-color: #000000 !important;
    color: white !important;
  }
`;

const StyleForm = styled(Form)`
  .ant-form-item-explain-error {
    text-align: left !important;
  }
`;

export default function FormComponent() {
  const imgData = useSelector((state) => state.imgFile);
  const [userData, setUserData] = useState({
    dear: "",
    message: "",
    from: "",
  });

  const printRef = useRef();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    window.scroll(0, 0);
    setUserData(values.user);

    if (imgData?.img === "")
      return message.error("Download Gagal karena belum upload gambar !");

    message.success("Download Success!");

    setTimeout(() => {
      printGiftCard();
    }, 2000);
  };

  const onFinishFailed = () => {
    window.scroll(0, 0);
    message.error("Download Gagal karena masih ada data yang kosong!");
  };

  const printGiftCard = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <div className="md:-mt-0 -mt-4 mx-auto md:text-[22px] text-[14px] lg:px-4 md:px-0 gap-6 font-medium capitalize flex flex-col w-full">
      {imgData?.img && (
        <div
          className="container flex flex-wrap  bg-red-300 relative"
          ref={printRef}
        >
          <img
            src={imgData.img}
            alt="Preview"
            className="md:h-[820px] h-[460px] w-full"
          />
          {/* dear */}
          <div
            id="dear"
            className="absolute h-10 w-[50%] mx-auto inset-0  lg:left-40 md:left-20 left-10  md:top-[240px] top-[140px]"
          >
            <h4>{userData?.dear}</h4>
          </div>
          {/* message */}
          <div
            id="message"
            className="absolute w-[50%] text-left h-40 mx-auto  md:leading-[50px] leading-5 border inset-0 lg:left-14 md:left-40 left-10 md:top-[320px] top-[180px]"
          >
            <p>{userData?.message}</p>
          </div>
          {/* from */}
          <div
            id="from"
            className="absolute h-10 w-[50%] mx-auto inset-0 lg:left-48 md:left-28 left-14 md:top-[470px] top-[260px]"
          >
            <h4>{userData?.from}</h4>
          </div>
        </div>
      )}

      <UploadComponent />
      <StyleForm
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          onChange={(e) => setUserData({ ...userData, dear: e.target.value })}
          name={["user", "dear"]}
          label="Dear"
          rules={[
            { required: true, message: "Field ini Wajib Diisi!" },
            {
              type: "string",
              min: 3,
              message: "Field ini minimal harus 3 characters!",
            },
          ]}
        >
          <StyledInput placeholder="Tulis disini" />
        </Form.Item>
        <Form.Item
          onChange={(e) =>
            setUserData({ ...userData, message: e.target.value })
          }
          name={["user", "message"]}
          label="message"
          rules={[{ required: true, message: "Field ini Wajib diisi!" }]}
        >
          <StyledTextArea
            placeholder="Tulis pesan kamu disini"
            showCount
            rows={6}
            maxLength={100}
          />
        </Form.Item>
        <Form.Item
          onChange={(e) => setUserData({ ...userData, from: e.target.value })}
          name={["user", "from"]}
          label="from"
          rules={[
            { required: true, message: "Field ini Wajib Diisi!" },
            {
              type: "string",
              min: 3,
              message: "Field ini minimal harus 3 characters!",
            },
          ]}
        >
          <StyledInput placeholder="Tulis disini" />
        </Form.Item>
        <hr className="my-5 text-gray-400 h-2" />

        <Form.Item>
          <StyledButton
            className="bg-green-700 border text-white w-[40%] mt-5 h-10 mx-auto"
            htmlType="submit"
          >
            Download
          </StyledButton>
        </Form.Item>
      </StyleForm>
    </div>
  );
}
