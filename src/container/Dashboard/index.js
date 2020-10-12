import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import Recruitment from '../../components/Recruitment';
import OptionSearch from '../../components/OptionSearch';
import Button from '../../common/Button';

function Dashboard() {
  return (
    <div className="home-dash">
      <h2>Các vị trí đang tuyển</h2>
      <OptionSearch />
      <div>
        <div className="btn-add">
          <Button name="Thêm Job" bgColor="#E09319" color="white" />
        </div>
        <Recruitment />
      </div>
    </div>
  );
}

export default Dashboard;
