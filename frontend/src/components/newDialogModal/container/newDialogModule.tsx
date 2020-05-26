import { default as NewDialogModal } from '../component/newDialogModule'
import React, { useState } from "react";
import { connect } from "react-redux";
import { AppState } from '../../../redux/store';
import { fetchUserData } from '../../../redux/selectors';
import { userAPI, dialogsAPI } from '../../../API';

const SidebarContainer = (user: any) => {
    const [visible, setVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messageText, setMessagaText] = useState("");
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(false);
  
    const onClose = () => {
      setVisible(false);
    };
  
    const onShow = () => {
      setVisible(true);
    };
  
    const onSearch = (value: any) => {
      setIsLoading(true);
      userAPI
        .findUsers(value)
        .then(( data: any ) => {
          console.log(data.data)
          setUsers(data.data);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    };
  
    const onAddDialog = () => {
      dialogsAPI
        .create({
          partner: selectedUserId,
          text: messageText
        })
        .then(onClose)
        .catch(() => {
          setIsLoading(false);
        });
    };
  
    const handleChangeInput = (value: any) => {
      setInputValue(value);
    };
  
    const onChangeTextArea = (e: any) => {
      setMessagaText(e.target.value);
    };
  
    const onSelectUser = (userId: any) => {
      setSelectedUserId(userId);
    };
  
    return (
      <NewDialogModal
        user={user}
        inputValue={inputValue}
        visible={visible}
        isLoading={isLoading}
        onClose={onClose}
        onShow={onShow}
        onSearch={onSearch}
        onChangeInput={handleChangeInput}
        onSelectUser={onSelectUser}
        onModalOk={onAddDialog}
        onChangeTextArea={onChangeTextArea}
        messageText={messageText}
        selectedUserId={selectedUserId}
        users={users}
      />
    );
  };
  
  const mapStateToProps = (state: AppState) => ({
    user: fetchUserData(state)
  })

export default connect(mapStateToProps, {})(SidebarContainer);
