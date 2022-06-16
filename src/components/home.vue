<template>
     <body>

        <header class="header-content header">
            <div class="logo-content">
                <img src="src\assets\logo.png" alt="">
                    <div>
                        <span class="emp-text">EMPLOYEE</span><br>
                        <span class="emp-text emp-payroll">PAYROLL</span>
                    </div>
            </div>
        </header>

        
    
        <div class="main-content">
            <div class="header-content">
                <div class="emp-detail-text">Employee Details 
                    <div class="emp-count"></div>
                </div>
                   <router-link to="/profile">  
                        <img src="src\assets\2e34e565526802985f40f7c11146406d.png" alt="" width="40" height="33">Add User
                   </router-link>
            </div>
            <div class="table-main">
                <table class="table" id="display">
                    <tr>
                        <th></th>   <th>Name</th>   <th>Gender</th>     <th>Department</th>
                                    <th>Salary</th> <th>Start Date</th> <th>Actions</th>    
                    </tr>
                </table>
            </div>
        </div>
    </body>
</template>