<template>
    <body>
    <header >
        
        <div class="header-content">
            <img src="C:\Users\lenovo\Documents\vue\EmployeePayroll\src\assets\logo.png" alt="">
            <div>
                <span class="emp-text">EMPLOYEE</span><br>
                <span class="emp-text emp-payroll">PAYROLL</span>
            </div>
        </div>
           <div>
            <pre>
            {{JSON.stringify(formValues,null,2)}}
            </pre>
            </div>
        <div class="form-content">
            <form class="form" action="#" @submit="save">
                <div class="form-head">Employee Payroll Form</div>
                <div class="row-content">
                    <label class="label text"
                        for="name">Name</label>
                    <input class="input" type="text" id="name" name="name" placeholder="Your name.." required v-model="formValues.name">
                    <error-output class="text-error" for="text"></error-output>
                </div>

                <div class="row-content">
                    <label class="label text" for="profile">Profile Image</label>
                    <div class="profile-radio-content">
                        <label>
                            <input type="radio" id="profile" name="profile"
                                value="../assets/Ellipse3.png" required v-model="formValues.profilePic">
                            <img class="profile" id='image1' src="../assets/Ellipse3.png"/>
                        </label>

                        <label>
                            <input type="radio" id="profile" name="profile"
                                value="../assets/Ellipse -1.png" required v-model="formValues.profilePic">
                            <img class="profile" id='image2' src="../assets/Ellipse -1.png"/>
                        </label>

                        <label>
                            <input type="radio" id="profile" name="profile"
                                value="../assets/Ellipse -8.png" required v-model="formValues.profilePic">
                            <img class="profile" id='image3' src="../assets/Ellipse -8.png"/>
                        </label>

                        <label>
                            <input type="radio" id="profile" name="profile"
                                value="../assets/Ellipse -7.png" required v-model="formValues.profilePic">
                            <img class="profile" id='image4' src="../assets/Ellipse -7.png"/>
                        </label>
                    </div>
                </div>
                <div class="row-content">
                    <label class="label text" for="gender">Gender</label>
                    <div>
                        <input type="radio" id="gender" name="gender" value="male" v-model="formValues.gender">
                        <label class="text" for="gender">Male</label>
                        <input type="radio" id="gender" name="gender" value="female" v-model="formValues.gender">
                        <label class="text" for="gender">Female</label>
                    </div>
                </div>
                <div class="row-content">
                    <label class="label text" for="deparment">Department</label>
                    <div>
                        <input class="checkbox" type="checkbox" id="dept" name="dept" value="HR" v-model="formValues.departments"/>
                        <label class="text" for="hr">HR</label>

                        <input class="checkbox" type="checkbox" id="dept" name="dept" value="Sales" v-model="formValues.departments"/>
                        <label class="text" for="sales">Sales</label>

                        <input class="checkbox" type="checkbox" id="dept" name="dept" value="Finance" v-model="formValues.departments"/>
                        <label class="text" for="finance">Finance</label>

                        <input class="checkbox" type="checkbox" id="dept" name="dept" value="Engineer" v-model="formValues.departments"/>
                        <label class="text" for="engineer">Engineer</label>

                        <input class="checkbox" type="checkbox" id="dept" name="dept" value="Others" v-model="formValues.departments"/>
                        <label class="text" for="others">Others</label>
                    </div>
                </div>
                <div class="row-content">
                    <label class="label text" for="salary">Choose your Salary : </label>
                    <input class="input" type="range" name="salary" id="salary" min="300000"
                        max="500000" step="100" v-model="formValues.salary" >
                    <output class="salary-output-text" for="salary">{{formValues.salary}}</output>
                </div>

            
                <div class="row-content">
                    <label class="label text" for="startDate">Start Date</label>
                    <div>
                        <select id="day" name="Day" v-model="formValues.day">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>

                        <select id="month" name="Month" v-model="formValues.month">
                            <option value="Jan">January</option>
                            <option value="Feb">Febuary</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="Aug">August</option>
                            <option value="Sept">September</option>
                            <option value="Oct">October</option>
                            <option value="Nov">November</option>
                            <option value="Dec">December</option>
                        </select>

                        <select id="year" name="Year" v-model="formValues.year">
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                        </select>
                    </div>
                </div>

            
                <div class="row-content">
                    <label class="label text" for="notes">Notes</label>
                    <textarea id="notes" class="input" name="Notes"
                        placeholder="" style="height:100px" v-model="formValues.note"></textarea>
                        <!-- <input v-model="notes" placeholder="notes">
                        <p>{{notes}}</p> -->
                </div>
                <div class="buttonParent">
                    <router-link to="/"><button class="button submitButton" id="submitButton">Cancel</button></router-link>
                    <div class="submit-reset">
                        <button type="submit" class="button submitButton" id="submitButton">Submit</button>
                        <button type="reset" class="resetButton button">Reset</button>
                    </div>
                </div>
              

            </form>
            
        </div>
    </header>
</body>
</template>
<script>
import service from '../service';

export default {
    name: 'form',
    data(){
    return{
        formValues:{
                name:'',
                salary:'',
                note:'',
                day:'',
                month:'',
                year:'',
                departments:[],
                gender:'',
                profilePic:'',
                startDate:''
            },

    }
    },
    methods: {
        save(event){
            event.preventDefault();
            this.formValues.startDate=this.formValues.day + this.formValues.month + this.formValues.year;
            console.log(this.formValues);
            const data = this.formValues;
            service.addEmployee(data).then((response) => {
                console.log(response)
                console.log(response.data.data)
                this.addEmployee = response.data.data
                 alert("Employee Added Successfully to the Console",response)
            })
            .catch(error => {
                console.log(error);
                 alert("Employee is not Addedd to the Console")
            })
            
           
        }
    },
    
}
</script>