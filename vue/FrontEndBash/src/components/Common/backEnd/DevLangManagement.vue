<template>
<div id="boy_DevLangManagement_backEnd">

<el-form ref="form"   label-width="10%" style="text-align:left" >
  <el-form-item label="语言名称">
    <el-input
    placeholder="语言名称"
    v-model="newOpImpDevLangName"
    clearable
    style="width:30%"
    >
    </el-input>
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
       <el-button @click="handleAdd(newOpImpDevLangName,isSharedSelectedValueOnceNew)">添 加</el-button>
       <el-button @click="newOpImpDevLangName = '';isSharedSelectedValueOnceNew=''">清 空</el-button>
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
      label="语言名称"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>语言名称: {{ scope.row.opImpDevLangName }}</p>
         
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.opImpDevLangName }}</el-tag>
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

<el-dialog title="编辑语言信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="语言名称" :label-width="formLabelWidth">
      <el-input v-model="form.opImpDevLangName" autocomplete="off"></el-input>
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
    <el-button type="primary" @click="handleSave(form.opImpDevLangGuid)">保存</el-button>
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
        newOpImpDevLangName:"",
       
        tableData: [{
          opImpDevLangId: '1',
          opImpDevLangGuid:"afsfafare",
          opImpDevLangName: 'C#',
          isShared: 0 ,
          createTime:'2019-12-12'
        }, {
          opImpDevLangId: '2',
          opImpDevLangGuid:"132adsfadsdf",
          opImpDevLangName: 'nodejs',
          isShared: 1 ,
          createTime:'2019-12-12'
        }, {
          opImpDevLangId: '3',
          opImpDevLangGuid:"314safaffds",
          opImpDevLangName: 'java',
          isShared: 0 ,
          createTime:'2019-12-12'
        }, {
          opImpDevLangId: '4',
          opImpDevLangGuid:"fasfa23gsa",
          opImpDevLangName: 'go',
          isShared: 1,
          createTime:'2019-12-12'
        }],
         dialogFormVisible: false,
        form: {
          opImpDevLangGuid: '',
          opImpDevLangId: '',
          opImpDevLangName: '',
          isShared: 0 
        
        },
        formLabelWidth: '120px',
        isSharedOptions: [{
          value: 1,
          label: '是'
        }, {
          value: 0,
          label: '否'
        }] ,
        isSharedSelectedValue:"",
        isSharedOptionsOnceNew: [{
          value: 1,
          label: '是'
        }, {
          value: 0,
          label: '否'
        }] ,
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
        this.form.opImpDevLangGuid=row.opImpDevLangGuid;
        this.form.opImpDevLangId=row.opImpDevLangId;
        this.form.opImpDevLangName=row.opImpDevLangName;
        this.form.isShared=row.isShared;
         
      },
      handleAdd(opImpDevLangName,isShared){
        console.log(newUserName, newUserPwd,systemRoleSelectedValueOnceNew);
         //invoke usb
         
      },
      handleDelete(index, row) {
        //console.log(index, row);
        console.log(row.opImpDevLangGuid);
           //invoke usb
             
      },
      handleSave(opImpDevLangGuid){
        console.log(opImpDevLangGuid);
          if(this.form.opImpDevLangGuid===opImpDevLangGuid)
          {
                
                  //invoke usb
                    
          }
        
      },
      handleDataRefresh(){
              console.log('handle data Refresh....');
             
      }
    }
  }
</script>