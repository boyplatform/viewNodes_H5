<template>
<div id="boy_userLogin_backEnd">
<el-form ref="form"   label-width="10%" style="text-align:center" >
  <el-form-item label="">
    <el-input
    placeholder="用户名"
    v-model="loginUserName"
    clearable
    style="width:30%"
    >
    </el-input>
  </el-form-item>
   <el-form-item label="">
   <el-input
    type="password"
    placeholder="密码"
    v-model="loginUserPwd"
    clearable
    style="width:30%"
    >
    </el-input>
   </el-form-item>
    
  <el-form-item style="align:left"> 
       <el-button @click="handleLogin()">登 陆</el-button>
       <el-button @click="loginUserName = '';loginUserPwd=''">清 空</el-button>
        
 </el-form-item>
</el-form>


  </div>
</template>




<script>
import common from '@/frontEndUtilJs/common.js'
import httpHelper from '@/frontEndUtilJs/httpHelper.js'
  export default {
    data() {
      return {
          loginUserName:"",
          loginUserPwd:"" 
      }
    },
   
    methods: {
      handleLogin() {
        console.log(this.loginUserName, this.loginUserPwd);
         //invoke usb
         let postConfig={
            url:common.getUsbUrl()+"/viewNode/h5/Common/userLogin",
            data:{
              platformUserName:this.loginUserName,
              platformUserPwd:this.loginUserPwd 
              
            }
            
         }
          
         httpHelper.httpPost(postConfig,function(response){
              if(response.result){
                 common.setSessionStorage("platformUserGuid",response.data.platformUserGuid);
                 common.setSessionStorage("platformUserName",this.loginUserName);
                  this.$message('用户登陆成功');
                  //jump to admin main page
                  this.$router.push({path:'/adminHomeNavPage'});
              }else{
                 this.$message('用户登陆失败');
              }
         }.bind(this))

      } 
    }
  }
</script>