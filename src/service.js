import axios from 'axios'

const Employee_url = 'http://localhost:8082/employeepayrollservice'

class service{

    addEmployee(data){
        return axios.post(`${Employee_url}/create`,data);
    }

    getAllEmployee(){
        return axios.get(`${Employee_url}/get`);
    }

    deleteEmployee(employeeId){
        return axios.delete(`${Employee_url}/delete/${employeeId}`)
    }

}
export default new service()