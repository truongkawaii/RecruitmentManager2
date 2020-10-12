import { axiosClient } from './config.services';

class TableService {
  static listJob() {
    // return fetchData(query);
    const url = '/recruitment';
    return axiosClient.get(url);
  }

  static addJob(obj) {
    const url = '/recruitment';
    return axiosClient.post(url, { ...obj });
  }

  static editJob(obj) {
    const url = `/recruitment/${obj.id}`;
    return axiosClient.put(url, { ...obj });
  }

  static deleteJob(id) {
    const url = `/recruitment/${id}`;
    return axiosClient.delete(url);
  }

  static listCandidate() {
    const url = '/candidate';
    return axiosClient.get(url);
  }

  static addCandidate(obj) {
    const url = '/candidate';
    return axiosClient.post(url, { ...obj });
  }

  static editCandidate(obj) {
    const url = `/candidate/${obj.id}`;
    return axiosClient.put(url, { ...obj });
  }

  static deleteCandidate(id) {
    const url = `/candidate/${id}`;
    return axiosClient.delete(url);
  }

  static login(token) {
    const url = `/login`;
    console.log(token, 'token...');
    return axiosClient.post(url, { tokenGG: token });
  }

  static listUser() {
    const url = `/user`;
    return axiosClient.get(url);
  }

  static editUser(obj) {
    const url = `/user/${obj.id}`;
    return axiosClient.put(url, { ...obj });
  }

  static addUser(obj) {
    const url = '/user';
    return axiosClient.post(url, { ...obj });
  }
}
export default TableService;
