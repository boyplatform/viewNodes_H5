<template>
<div id="boy_platformAppManagement_backEnd">

<el-form ref="form"   label-width="10%" style="text-align:left" >
  <el-form-item label="APP名称">
    <el-input
    placeholder="APP名称"
    v-model="newAppName"
    clearable
    style="width:30%"
    >
    </el-input>
  </el-form-item>
   <el-form-item label="开发机构">
   <el-input
    placeholder="开发机构"
    v-model="newDevOrg"
    clearable
    style="width:30%"
    >
    </el-input>
   </el-form-item>
  
  <el-form-item label="开发机构简介">
   <el-input
    placeholder="开发机构简介"
    v-model="newDevOrgDesciption"
    clearable
    style="width:30%"
    >
    </el-input>
   </el-form-item>

   <el-form-item label="开发作者">
   <el-input
    placeholder="开发作者"
    v-model="newDevPersonName"
    clearable
    style="width:30%"
    >
    </el-input>
   </el-form-item>

   <el-form-item label="APP简介">
   <el-input
    placeholder="APP简介"
    v-model="newAppDescription"
    clearable
    style="width:30%"
    >
    </el-input>
   </el-form-item>

   <el-form-item label="状态">
      <el-select v-model="statusFlagSelectedValueOnceNew" placeholder="请选择状态"  style="width:30%">
            <el-option
            v-for="item in statusFlagOptionsOnceNew"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
      </el-select>
    </el-form-item>

      <el-form-item label="是否共享">
      <el-select v-model="isSharedSelectedValueOnceNew" placeholder="请选择是否共享"  style="width:30%">
            <el-option
            v-for="item in isSharedOptionsOnceNew"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
      </el-select>
    </el-form-item>

  <el-form-item style="align:left"> 
       <el-button @click="handleAdd(newAppName,newDevOrg,newDevOrgDesciption,newDevPersonName,newAppDescription,statusFlagSelectedValueOnceNew,isSharedSelectedValueOnceNew)">添 加</el-button>
       <el-button @click="newAppName = '';newDevOrg='';newDevOrgDesciption='';newDevPersonName='';newAppDescription='';statusFlagSelectedValueOnceNew='';isSharedSelectedValueOnceNew=''">清 空</el-button>
       <el-button @click="handleDataRefresh()">刷 新 列 表</el-button>
 </el-form-item>
</el-form>

<el-table
    :data="tableData"
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
      label="APP名称"
      width="180">
      <template slot-scope="scope">
      
        <span style="margin-left: 10px">{{ scope.row.appName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="开发机构"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>开发机构: {{ scope.row.devOrg }}</p>
         
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.devOrg }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="开发机构简介"
      width="180">
      <template slot-scope="scope">
       
        <span style="margin-left: 10px">{{ scope.row.devOrgDesciption }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="开发作者"
      width="180">
      <template slot-scope="scope">
       
        <span style="margin-left: 10px">{{ scope.row.devPersonName }}</span>
      </template>
    </el-table-column>
      <el-table-column
      label="APP简介"
      width="180">
      <template slot-scope="scope">
        
        <span style="margin-left: 10px">{{ scope.row.appDescription }}</span>
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

<el-dialog title="编辑APP信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="APP名称" :label-width="formLabelWidth">
      <el-input v-model="form.appName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="开发机构" :label-width="formLabelWidth">
        <el-input  v-model="form.devOrg" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="开发机构简介" :label-width="formLabelWidth">
        <el-input  v-model="form.devOrgDesciption" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="开发作者" :label-width="formLabelWidth">
        <el-input  v-model="form.devPersonName" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="APP简介" :label-width="formLabelWidth">
        <el-input  v-model="form.appDescription" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="状态" :label-width="formLabelWidth">
      <el-select v-model="form.statusFlag" placeholder="请选择当前状态">
       <el-option
        v-for="item in statusFlagOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="是否共享" :label-width="formLabelWidth">
      <el-select v-model="form.isShared" placeholder="请选择是否共享">
            <el-option
            v-for="item in isSharedOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="handleSave(form.appGuid)">保存</el-button>
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
          newAppName: '',
          newDevOrg: '', 
          newDevOrgDesciption: '',
          newDevPersonName: '',
          newAppDescription:'',
          newStatusFlag:0,
          newIsShared:0,
        tableData: [{
          appID: '1',
          appGuid: 'afwegwaweafas',
          appName: 'boybian',
          createTime: '2016-05-04',
          devOrg: 'quantasoft', 
          devOrgDesciption: 'everything is data,everything is possible',
          devPersonName: 'boybian',
          appDescription:'A modility platform',
          statusFlag:0,
          isShared:0
        }, {
            appID: '2',
            appGuid: 'afwegwaweafas',
            appName: 'boybian',
            createTime: '2016-05-04',
            devOrg: 'quantasoft', 
            devOrgDesciption: 'everything is data,everything is possible',
            devPersonName: 'boybian',
            appDescription:'A modility platform',
            statusFlag:0,
            isShared:0
        }, {
            appID: '3',
            appGuid: 'afwegwaweafas',
            appName: 'boybian',
            createTime: '2016-05-04',
            devOrg: 'quantasoft', 
            devOrgDesciption: 'everything is data,everything is possible',
            devPersonName: 'boybian',
            appDescription:'A modility platform',
            statusFlag:0,
            isShared:0
        }, {
            appID: '4',
            appGuid: 'afwegwaweafas',
            appName: 'boybian',
            createTime: '2016-05-04',
            devOrg: 'quantasoft', 
            devOrgDesciption: 'everything is data,everything is possible',
            devPersonName: 'boybian',
            appDescription:'A modility platform',
            statusFlag:0,
            isShared:0
        }],
         dialogFormVisible: false,
        form: {
            appID: '',
            appGuid: '',
            appName: '',
            createTime: '',
            devOrg: '', 
            devOrgDesciption: '',
            devPersonName: '',
            appDescription:'',
            statusFlag:0,
            isShared:0
        
        },
        formLabelWidth: '120px',
        statusFlagOptions: [{
          value: 0,
          label: '停止发布'
        }, {
          value: 1,
          label: '平台审核'
        }, {
          value: 2,
          label: 'Beta测试'
        }, {
          value: 3,
          label: '在线运行'
        }],
        statusFlagSelectedValue:"",
        isSharedOptions: [{
          value: 1,
          label: '是'
        }, {
          value: 0,
          label: '否'
        }],
        isSharedSelectedValue:"",

       statusFlagOptionsOnceNew: [{
          value: 0,
          label: '停止发布'
        }, {
          value: 1,
          label: '平台审核'
        }, {
          value: 2,
          label: 'Beta测试'
        }, {
          value: 3,
          label: '在线运行'
        }],
        statusFlagSelectedValueOnceNew:"",
        isSharedOptionsOnceNew: [{
          value: 1,
          label: '是'
        }, {
          value: 0,
          label: '否'
        }],
         isSharedSelectedValueOnceNew:""
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
            this.tableData=JSON.parse(response.value);
         })
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        this.dialogFormVisible = true;
        
         this.form.appID=row.appID;
         this.form.appGuid=row.appGuid;   
         this.form.appName=row.appName;  
         this.form.createTime=row.createTime;   
         this.form.devOrg=row.devOrg;   
         this.form.devOrgDesciption=row.devOrgDesciption;   
         this.form.devPersonName=row.devPersonName;   
         this.form.appDescription=row.appDescription; 
         this.form.statusFlag=row.statusFlag;  
         this.form.isShared=row.isShared;   

      },
      handleAdd(newAppName,newDevOrg,newDevOrgDesciption,newDevPersonName,newAppDescription,statusFlagSelectedValueOnceNew,isSharedSelectedValueOnceNew){
        console.log(newAppName,newDevOrg,newDevOrgDesciption,newDevPersonName,newAppDescription,statusFlagSelectedValueOnceNew,isSharedSelectedValueOnceNew);
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
              if(response.result){
                 this.$message('APP添加成功');
              }else{
                 this.$message('APP添加失败');
              }
         })
      },
      handleDelete(index, row) {
        //console.log(index, row);
        console.log(row.appGuid);
           //invoke usb
            let postConfig={
                        url:common.getUsbUrl()+"/viewNode/h5/Common/deleteUser",
                        data:{
                          platformUserGuid:row.platformUserGuid 
                          
                        }
                  
                      }
              
            httpHelper.httpPost(postConfig,function(response){
                          if(response.result){
                            this.$message('APP删除成功');
                          }else{
                            this.$message('APP删除失败');
                          }
                    })
      },
      handleSave(appGuid){
        console.log(appGuid);
          if(this.form.appGuid===row.appGuid)
          {
                  //this.form.platformUserName=row.platformUserName;
                  this.form.platformUserPwd=row.platformUserPwd;
                  this.form.isActive=row.isActive;
                  this.form.systemRole=row.systemRole;
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
                          if(response.result){
                            this.$message('APP更新成功');
                          }else{
                            this.$message('APP更新失败');
                          }
                    })
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
                  this.tableData=JSON.parse(response.value);
              })
      }
    }
  }
</script>