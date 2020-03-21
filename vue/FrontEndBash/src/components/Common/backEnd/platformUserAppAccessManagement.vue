<template>
<div id="boy_platformUserAppAccessManagement_backEnd">
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
          @click="handleEdit(scope.$index, scope.row)">编辑APP权限</el-button>
      
      </template>
    </el-table-column>
  </el-table>

<el-dialog title="编辑App权限" :visible.sync="dialogFormVisible">
  <el-form :model="form">
 
     <el-form-item label="待选APP权限" :label-width="formLabelWidth">
            <el-table
            :data="appOptions"
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
                <p>开发机构简介: {{ scope.row.devOrgDesciption }}</p>
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.devOrg }}</el-tag>
                </div>
                </el-popover>
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
                @click="handleAssign(scope.$index, scope.row)">选取</el-button>
                
            </template>
            </el-table-column>
        </el-table>
    </el-form-item>
    <el-form-item label="已有APP权限" :label-width="formLabelWidth">
         <el-table
            :data="appOptionsAuthSelected"
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
                <p>开发机构简介: {{ scope.row.devOrgDesciption }}</p>
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.devOrg }}</el-tag>
                </div>
                </el-popover>
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
                type="danger"
                @click="handleRevoke(scope.$index, scope.row)">删除</el-button>
                
            </template>
            </el-table-column>
        </el-table>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">完 成</el-button>
   
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
         
        appOptions: [{
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
        }] ,
        appOptionsAuthSelected: [{
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
        }]
 
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
        this.form.platformUserId=row.platformUserId;
        this.form.platformUserGuid=row.platformUserGuid;

      },
      handleAssign(index,row){
        console.log(index, row);
      }, 
      handleRevoke(index,row){
        console.log(index, row);
      }
    }
  }
</script>