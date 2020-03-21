<template>
<div id="boy_userManagement_backEnd" style="text-align:left">

<el-form ref="form"   label-width="10%" >
  <el-form-item label="用户名">
    <el-input
    placeholder="用户名"
    v-model="newUserName"
    clearable
    style="width:30%"
    >
    </el-input>
  </el-form-item>
   <el-form-item label="密码">
   <el-input
    type="password"
    placeholder="密码"
    v-model="newUserPwd"
    clearable
    style="width:30%"
    >
    </el-input>
   </el-form-item>
   <el-form-item label="用户类型">
      <el-select v-model="systemRoleSelectedValueOnceNew" placeholder="请选择用户类型"  style="width:30%">
            <el-option
            v-for="item in systemRoleOptionsOnceNew"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
      </el-select>
    </el-form-item>
  <el-form-item style="align:left"> 
       <el-button @click="handleAdd(newUserName,newUserPwd,systemRoleSelectedValueOnceNew)">添 加</el-button>
       <el-button @click="newUserName = '';newUserPwd='';systemRoleSelectedValueOnceNew=''">清 空</el-button>
       <el-button @click="handleDataRefresh()">刷 新 列 表</el-button>
 </el-form-item>
</el-form>
   
 

  <div class="container_table">
  <el-table
    :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    style="width: 100%">
    <el-table-column
      label="创建日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="最后更新日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.updateTime }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="用户名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>用户名: {{ scope.row.platformUserName }}</p>
         
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.platformUserName }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    
    
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-pagination align='center'
                                  @size-change="handleSizeChange"
                                  @current-change="handleCurrentChange"
                                  :current-page="currentPage"
                                  :page-sizes="[5,10,20]"
                                  :page-size="pageSize"
                                  layout="total, sizes, prev, pager, next, jumper"
                                  :total="tableData.length">
                   </el-pagination>
  </div>


<el-dialog title="编辑用户信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="用户名" :label-width="formLabelWidth">
      <el-input v-model="form.platformUserName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input type="password" v-model="form.platformUserPwd" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="是否有效" :label-width="formLabelWidth">
      <el-select v-model="form.isActive" placeholder="请选择是否有效">
       <el-option
        v-for="item in isActiveOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="用户类型" :label-width="formLabelWidth">
      <el-select v-model="form.systemRole" placeholder="请选择用户类型">
            <el-option
            v-for="item in systemRoleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="handleSave(form.platformUserGuid)">保存</el-button>
  </div>
</el-dialog>


  </div>
</template>

<script>
import common from '@/frontEndUtilJs/common.js'
import httpHelper from '@/frontEndUtilJs/httpHelper.js'
  export default {
    data() {
      return {
        total:20,//默认数据总数
        pageSize:5,//每页的数据条数
        currentPage:1,//默认开始页面
         
        newUserName:"",
        newUserPwd:"",
        tableData: [{
          platformUserId: '1',
          platformUserGuid: 'afwegwaweafas',
          platformUserName: 'boybian',
          platformUserPwd: 'xxxxx',
          createTime: '2016-05-04', 
          updateTime: '2016-05-04',
          expiredDayCount: '15',
          isActive:0,
          systemRole:0
        }, {
          platformUserId: '2',
          platformUserGuid: 'afwegwaweafas',
          platformUserName: 'boybian',
          platformUserPwd: 'xxxxx',
          createTime: '2016-05-04', 
          updateTime: '2016-05-04',
          expiredDayCount: '15',
          isActive:1,
          systemRole:1
        }, {
          platformUserId: '3',
          platformUserGuid: 'afwegwaweafas',
          platformUserName: 'boybian',
          platformUserPwd: 'xxxxx',
          createTime: '2016-05-04', 
          updateTime: '2016-05-04',
          expiredDayCount: '15',
          isActive:1,
          systemRole:0
        }, {
          platformUserId: '4',
          platformUserGuid: 'afwegwaweafas',
          platformUserName: 'boybian',
          platformUserPwd: 'xxxxx',
          createTime: '2016-05-04', 
          updateTime: '2016-05-04',
          expiredDayCount: '15',
          isActive:1,
          systemRole:1
        }],
         dialogFormVisible: false,
        form: {
          platformUserGuid: '',
          platformUserId: '',
          platformUserName: '',
          platformUserPwd: '',
          isActive: true,
          systemRole: 0 
        
        },
        formLabelWidth: '120px',
        isActiveOptions: [{
          value: 1,
          label: '是'
        }, {
          value: 0,
          label: '否'
        }],
        isActiveSelectedValue:"",
        systemRoleOptions: [{
          value: 1,
          label: '前端用户'
        }, {
          value: 0,
          label: '系统管理员'
        }],
        systemRoleSelectedValue:"",

        systemRoleOptionsOnceNew: [{
          value: 1,
          label: '前端用户'
        }, {
          value: 0,
          label: '系统管理员'
        }],
        systemRoleSelectedValueOnceNew:""
      }
    },
    beforeCreate: function () {
         
           if(common.getSessionStorage("platformUserGuid")===undefined||
              common.getSessionStorage("platformUserGuid")===""||
               common.getSessionStorage("platformUserGuid")===null){
               console.log('back to login')
               //this.$router.push({path:'/boy_userLogin_backEnd'});
           }
    },
    created: function(){
         console.log('handle data Load....');
        let postConfig={
                      url:common.getUsbUrl()+"/viewNode/h5/Common/selectUser",
                      data:{
                        platformUserNameLike:""
                      }
                      
                  }
                  httpHelper.httpPost(postConfig,function(response){
                  
                      this.tableData=JSON.parse(response.data.value)[0];
                      //console.log(this.tableData.length);
                      //this.total=this.tableData.length;
                  }.bind(this))
    },
   
    methods: {
      //分页点击方法
      handleSizeChange:function(val) {
            this.currentPage = 1;
            this.pageSize = val;
      },
      handleCurrentChange:function(val) {
            this.currentPage = val;
      },
      handleEdit(index, row) {
        console.log(index, row);
        this.dialogFormVisible = true;
        this.form.platformUserId=row.platformUserId;
        this.form.platformUserName=row.platformUserName;
        //this.form.platformUserPwd=row.platformUserPwd;
        this.form.isActive=row.isActive.data[0];
        this.form.systemRole=row.systemRole;
        this.form.platformUserGuid=row.platformUserGuid;

      },
      handleAdd(newUserName,newUserPwd,systemRoleSelectedValueOnceNew){
        console.log(newUserName, newUserPwd,systemRoleSelectedValueOnceNew);
         //invoke usb
         let postConfig={
            url:common.getUsbUrl()+"/viewNode/h5/Common/AddUser",
            data:{
              platformUserName:newUserName,
              platformUserPwd:newUserPwd,
              systemRole:systemRoleSelectedValueOnceNew
            }
            
         }
         
         httpHelper.httpPost(postConfig,function(response){
              if(response.data.result){
                 this.$message('用户注册成功');
                 this.$options.methods.handleDataRefresh();
              }else{
                 this.$message('用户注册失败');
              }
         }.bind(this))
      },
      handleDelete(index, row) {
        //console.log(index, row);
        console.log(row.platformUserGuid);
           //invoke usb
            let postConfig={
                        url:common.getUsbUrl()+"/viewNode/h5/Common/deleteUser",
                        data:{
                          platformUserGuid:row.platformUserGuid 
                          
                        }
                  
                      }
              
            httpHelper.httpPost(postConfig,function(response){
                          if(response.data.result){
                            this.$message('用户删除成功');
                            //vm.$destroy();
                            this.$options.methods.handleDataRefresh();
                          }else{
                            this.$message('用户删除失败');
                          }
                    }.bind(this))
      },
      handleSave(platformUserGuid){
        console.log(platformUserGuid);
          if(this.form.platformUserGuid===platformUserGuid)
          {
                 console.log(this.form.platformUserPwd,this.form.isActive,this.form.systemRole,this.form.platformUserGuid)
                  //invoke usb
                      let postConfig={
                        url:common.getUsbUrl()+"/viewNode/h5/Common/updateUser",
                        data:{
                          platformUserPwd:this.form.platformUserPwd,
                          isActive:this.form.isActive,
                          systemRole:this.form.systemRole,
                          platformUserGuid:this.form.platformUserGuid
                        }
                  
                      }
              
                      httpHelper.httpPost(postConfig,function(response){
                          console.log(response)
                          if(response.data.result){
                            this.$message('用户更新成功');
                            //vm.$destroy();
                            this.$options.methods.handleDataRefresh();
                          }else{
                            this.$message('用户更新失败');
                          }
                    }.bind(this))
          }
        
      },
      handleDataRefresh(){
              console.log('handle data Refresh....');
              let postConfig={
                  url:common.getUsbUrl()+"/viewNode/h5/Common/selectUser",
                  data:{
                    platformUserNameLike:""
                  }
                  
              }
              httpHelper.httpPost(postConfig,function(response){
                     
                this.tableData=JSON.parse(response.data.value)[0];
                //this.total=this.tableData.length;
                //console.log(this.tableData.length);
              }.bind(this))
      }
    }
  }
</script>