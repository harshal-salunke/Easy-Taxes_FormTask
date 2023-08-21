import React from "react";
import { Form, Button, Modal, Upload, Radio, Checkbox } from "antd";
import "./inputStyles.css";

const FormPage = ({ page, setPage, formData, setFormData }) => {
  const [form] = Form.useForm();

  const handleFormSubmit = async () => {
    try {
      const values = await form.validateFields();
      setFormData({ ...formData, ...values });
      setPage(page + 1);
    } catch (error) {
      console.error("Validation error:", error);
    }
  };

  return (
    <Modal
      visible={true} // Always visible for simplicity
      title={`Create Form - Page ${page + 1}`}
      footer={[
        page > 0 && (
          <Button key="back" onClick={() => setPage(page - 1)}>
            Back
          </Button>
        ),
        page < 3 && (
          <Button key="next" type="primary" onClick={() => setPage(page + 1)}>
            Next
          </Button>
        ),
        page === 3 && (
          <>
            <span>Thank you for submitting the form!</span>
            <Button key="submit" type="primary" onClick={handleFormSubmit}>
              Submit
            </Button>
          </>
        ),
      ]}
    >
      {page === 0 && (
        <Form form={form}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <input className="generic-input" />
          </Form.Item>
          <Form.Item
            name="file"
            label="Upload File"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
          >
            <Upload.Dragger name="files" beforeUpload={() => false}>
              <p className="ant-upload-drag-icon">Drag & drop a file here</p>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item
            name="lastYearReturns"
            label="Did you file the returns last year?"
            rules={[{ required: true, message: "Please select an option" }]}
          >
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      )}
      {page === 1 && (
        <Form form={form}>
          <Form.Item
            name="incorporationDocs"
            label="Please Upload the Incorporation Documents"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
            rules={[
              { required: true, message: "Upload documents is required" },
            ]}
          >
            <Upload.Dragger name="files" beforeUpload={() => false}>
              <p className="ant-upload-drag-icon">Drag & drop a file here</p>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item
            name="ownershipChanges"
            label="Was there any changes in Ownership Structure in 2022?"
            rules={[{ required: true, message: "Please select an option" }]}
          >
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="shareholdingPattern"
            label="Upload latest Shareholding pattern"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
            rules={[
              {
                required: true,
                message: "Upload shareholding pattern is required",
              },
            ]}
          >
            <Upload.Dragger name="files" beforeUpload={() => false}>
              <p className="ant-upload-drag-icon">Drag & drop a file here</p>
            </Upload.Dragger>
          </Form.Item>
        </Form>
      )}
      {page === 2 && (
        <Form form={form}>
          <Form.Item
            name="transactionTypes"
            label="Was there any following transaction in 2022?"
            rules={[
              { required: true, message: "Please select at least one option" },
            ]}
          >
            <Checkbox.Group>
              <Checkbox value="capitalInfusion">Capital Infusion</Checkbox>
              <Checkbox value="capitalWithdraw">Capital Withdraw</Checkbox>
              <Checkbox value="relatedPartyTransaction">
                Related Party Transaction
              </Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            name="transactionDocs"
            label="Upload document for the same"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
            rules={[{ required: true, message: "Upload document is required" }]}
          >
            <Upload.Dragger name="files" beforeUpload={() => false}>
              <p className="ant-upload-drag-icon">Drag & drop a file here</p>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item
            name="additionalDocs"
            label="Please upload the following documents"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
            rules={[
              { required: true, message: "Upload documents are required" },
            ]}
          >
            <Checkbox.Group>
              <Checkbox value="bankStatement">Bank Statement</Checkbox>
              <Checkbox value="creditCardStatements">
                Credit card statements
              </Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            name="transactionDocs2"
            label="Upload document for the transaction"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
            rules={[{ required: true, message: "Upload document is required" }]}
          >
            <Upload.Dragger name="files" beforeUpload={() => false}>
              <p className="ant-upload-drag-icon">Drag & drop a file here</p>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item
            name="payment"
            label="Please complete the payment."
            // rules={[{ required: true, message: "Payment is required" }]}
          >
            {/* Payment input */}
            {/* <input className="generic-input" type="text" /> */}
          </Form.Item>
          <div className="logo-section">
            <img src="easytaxes-logo.png" alt="EasyTaxes Logo" />
            <span>EasyTaxes</span>
          </div>
          <Form.Item name="coupon" label="Enter a Coupon">
            {/* Coupon input */}
            <input className="generic-input" type="text" />
            <Button>Apply</Button>
          </Form.Item>
          <div className="total-section">
            <span>Total $349.00</span>
          </div>
          <div className="buttons-section">
            <Button onClick={() => setPage(page - 1)}>Back</Button>
            <Button type="primary" onClick={() => setPage(page + 1)}>
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Modal>
  );
};

export default FormPage;
