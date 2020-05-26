import React, { useEffect } from 'react'
import { Modal, Button, Form, Select, Input } from 'antd'
import { TeamOutlined, FormOutlined } from '@ant-design/icons'
import style from './style.module.scss'

const { Option } = Select;
const { TextArea } = Input;

type ModalProps = {
  user: any
  inputValue: any
  visible: boolean
  isLoading: boolean
  onClose: Function
  onShow: Function
  onSearch: Function
  onChangeInput: any 
  onSelectUser: any
  onModalOk: any
  onChangeTextArea: any
  selectedUserId: any
  users: any
  messageText: string
}

const NewDialogModal: React.FC<ModalProps> = ({user, visible, inputValue, messageText, selectedUserId, isLoading, users = [], onShow, onClose, onSearch, onChangeInput, onSelectUser, onChangeTextArea, onModalOk}) => {
  const options = users.map((user: any) => (
    <Option id={user._id} value={user._id}key={user._id}>{user.fullname}</Option>
  ))
  useEffect(() => {

  },[visible])
  
  return (
    <div style={{backgroundColor: 'white'}}>
         <div className={style.chat__sidebar_header}>
              <div>
                <TeamOutlined />
                <span style={{marginLeft: "5px"}}>Dialogs list</span>
              </div>
              <FormOutlined onClick={() => onShow()}/>
            </div>
            
      <Modal
        title="Create dialog"
        visible={visible}
        onCancel={() => onClose()}
        footer={[
          <Button key="back" onClick={() => onClose()}>
            Close
          </Button>,
          <Button
            disabled={!messageText}
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={onModalOk}
          >
            Create
          </Button>
        ]}
      >
        <Form className="add-dialog-form">
          <Form.Item label="Input username or E-Mail">
            <Select
              value={inputValue}
              onSearch={(value) => onSearch(value)}
              onChange={onChangeInput}
              onSelect={(value) => onSelectUser(value)}
              notFoundContent={null}
              style={{ width: "100%" }}
              defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
              placeholder="Input username or E-Mail"
              showSearch
            >
              {options}
            </Select>
          </Form.Item>
          {selectedUserId && (
            <Form.Item label="Your message">
              <TextArea
                //autosize={{ minRows: 3, maxRows: 10 }}
                onChange={onChangeTextArea}
                value={messageText}
              />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
    )
}



export default NewDialogModal