import axios from 'axios'

const Employee_url = 'http://localhost:8082/employeepayrollservice'

class service{

    addEmployee(data){
        return axios.post(`${Employee_url}/create`,data);
    }

}
export default new service()