import React from "react"

import { Button ,Form,Input,message} from "antd"
import { useNavigate } from "react-router-dom"
import { Path } from "@/router/constant"
import ModalButton from "@/component/modal-button"


const AppCenterPage = () => {
  const navigate=useNavigate()
  return (
    <div className="flex-1">
      <div className="flex justify-end p-4 bg-gray-100">
        <Button type="primary" onClick={() => navigate(Path.TemplatesCenter)}>
          从模板创建应用
        </Button>
        <ModalButton
          modal={
            // <Form layout="vertical" form={createBlankForm} preserve={false}>
            <Form layout="vertical" preserve={false}>
              <Form.Item
                label="应用名称"
                name="name"
                // rules={[emptyValidator('应用名称')]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="应用图标" name="icon">
                {/* <ImageUploader /> */}
              </Form.Item>
              <Form.Item label="应用描述" name="desc">
                <Input.TextArea />
              </Form.Item>
            </Form>
          }
          modalTitle="创建应用"
          // onModalOK={async () => {
          //   const values = await createBlankForm.validateFields()
          //   const res = await reqCreateApp(values)
          //   if (isResolved(res)) {
          //     void message.success('创建成功')
          //     return
          //   }
          //   return Promise.reject()
          // }}
          className="ml-5"
        >
          创建空白应用
        </ModalButton>
      </div>
    </div>
  )
}
export default AppCenterPage