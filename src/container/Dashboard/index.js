import React, { useEffect, Fragment } from 'react';
// import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Spin, Space } from 'antd';
import {
  getDataCandidate,
  getDataJD,
  getListAddress,
  getListPosition,
  getListSkill,
  getListUser,
} from '../../state/actions';
import Recruitment from '../../components/Recruitment';
import OptionSearch from '../../components/OptionSearch';
import './Dashboard.scss';

function Dashboard() {
  const dispatch = useDispatch();
  const dataJobs = useSelector(state => state.allJobs.dataJobsSort);
  const totalSize = useSelector(state => state.allJobs.total);
  const perPage = useSelector(state => state.allJobs.perPage);

  const history = useHistory();
  useEffect(() => {
    // fetch Data skills
    dispatch(getListSkill());
  }, [dispatch, getListSkill]);

  useEffect(() => {
    // fetch Data position
    dispatch(getListPosition());
  }, [dispatch, getListPosition]);

  useEffect(() => {
    // fetch Data candidate
    dispatch(getDataCandidate());
  }, [dispatch, getDataCandidate]);

  useEffect(() => {
    // fetch Data Admin
    dispatch(getListUser());
  }, [dispatch, getListUser]);

  useEffect(() => {
    // fetch Data job
    dispatch(getDataJD(1));
  }, [dispatch, getDataJD]);

  useEffect(() => {
    // fetch Data Address
    dispatch(getListAddress());
  }, [dispatch, getListAddress]);

  const handlerJobList = page => {
    dispatch(getDataJD(page));
    history.push(`/dashboard?page=${page}`);
  };

  return (
    <div className="home-dash">
      <h2>Các vị trí đang tuyển</h2>
      <OptionSearch />
      <div>
        <div className="btn-add">
          <Link to="/addjob">Thêm Job</Link>
        </div>
        {dataJobs ? (
          <Recruitment dataRecruitment={dataJobs} />
        ) : (
          <div className="spinner-job">
            <Space size="middle">
              <Spin size="large" />
            </Space>
          </div>
        )}
        <Pagination
          defaultCurrent={1}
          showSizeChanger={false}
          pageSize={perPage}
          total={totalSize}
          onChange={handlerJobList}
        />
      </div>
    </div>
  );
}

export default Dashboard;
