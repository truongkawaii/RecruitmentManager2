import React, { useState, useEffect } from 'react';
import { Spin, Modal } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Button from '../../common/Button';
import './Admin.scss';
import ListAccount from '../../components/ListAccount';
import {
  getListUser,
  addUser,
  sortDataUser,
  allDataUser,
} from '../../state/actions';

function Admins() {
  const dataUsers = useSelector(state => state.usersState.dataSort);
  const sortingUser = useSelector(state => state.usersState.sorting);
  const dispatch = useDispatch();
  // const antIcon = <LoadingOutlined style={{ fontSize: 35 }} spin />;
  const [showModal, setShowModal] = useState(false);
  const [valueEmail, setValueEmail] = useState({ email: null });
  const [validateEmail, setValidateEmail] = useState(false);

  const handleOk = () => {
    if (validateEmail) {
      dispatch(addUser(valueEmail));
      setValueEmail({ email: '' });
      setShowModal(false);
      toast.success('Them email thanh cong');
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handlerSortDataUserBlock = () => {
    if (sortingUser) {
      dispatch(allDataUser());
    } else dispatch(sortDataUser());
  };

  const handlerEmailTyping = e => {
    setValueEmail({ email: e.target.value });
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        e.target.value,
      )
    ) {
      setValidateEmail(true);
    } else setValidateEmail(false);
  };

  const modal = (
    <Modal
      title="Nhập email muốn thêm"
      visible={showModal}
      onOk={handleOk}
      onCancel={handleCancel}
      cancelText="Hủy"
      okText="Đồng ý"
    >
      <input
        onChange={handlerEmailTyping}
        value={valueEmail.email}
        className="email-invite"
        type="email"
        placeholder="Nhập email muốn mời ..."
      />
    </Modal>
  );

  return (
    <div className="adminPage">
      <h2>Danh sách tài khoản admin</h2>
      <div className="btn-optionAdmin">
        <div className="btn-add">
          {sortingUser ? (
            <Button
              name="tất cả admin"
              bgColor="rgb(27, 105, 141)"
              color="white"
              click={handlerSortDataUserBlock}
            />
          ) : (
            <Button
              name="admin đã xóa"
              bgColor="rgb(27, 105, 141)"
              color="white"
              click={handlerSortDataUserBlock}
            />
          )}
        </div>
        <div className="btn-add">
          <Button
            type="plus"
            name="Thêm admin"
            click={() => {
              setShowModal(true);
            }}
            bgColor="#E09319"
            color="white"
          />
        </div>
      </div>

      {dataUsers ? <ListAccount listData={dataUsers} /> : null}
      {modal}
    </div>
  );
}

export default Admins;
