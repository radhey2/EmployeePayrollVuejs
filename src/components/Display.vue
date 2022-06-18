<template>
    <table id="display" className="display">
        <tbody>
            <tr>
               <th> ProfilePic</th>
               <th>Name</th>
               <th>Gender</th>
               <th>Department</th>
               <th>Salary</th>
               <th>StartDate</th>
               <th>note</th>
               <th>Actions</th>
            </tr>
               <tr v-for="employee in employees" :key="employee.id">
                       <td><img src="{{employee.profilePic}}"/></td>
                       <td> {{employee.name}}</td>
                       <td> {{employee.gender}}</td>
                       <td> {{employee.department}}</td>
                       <td> {{employee.salary}}</td>
                       <td> {{employee.startDate}}</td>
                       <td> {{employee.note}}</td>
                       <td>
                        <img @click="remove(employee.employeeId)" src="../assets/icons8-delete-30.png" alt="delete"/>
                        <img @click="update(employee.employeeId)" src="../assets/icons8-edit-image-24.png" alt="update"/>
                       </td> 
               </tr>
        </tbody>
    </table>
</template>

<script>

import service from '../service';
export default {
    name: 'DisplayHome',
    data(){
        return {
            employees: []
        }
    },
    methods: {
        getEmployee(){
            service.getAllEmployee().then((response) => {
                console.log(response.data.data);
                this.employees = response.data.data;
            });
        },

    update(id){
        this.$router.push({name: "EdiForm",parent:{id:id}})
    },

    remove(employeeId){
        
            var answer = window.confirm("Data once deleted can not be restored[] Do you wish to continue ?")
            if(answer === true){
                service.deleteEmployee(employeeId).then((data) => {
                alert("Employee Deleted SuccessFully!!");
                window.location.reload();
                this.getEmployee();
                })
        .catch((error) => {
            alert("Something went wrong!");
        });
            }
            else{
                window.location.reload();
            }
        

    },
    },
  created() {
            this.getEmployee();
        }
    
}
</script>