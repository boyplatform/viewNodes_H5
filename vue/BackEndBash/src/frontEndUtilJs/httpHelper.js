import Vue from 'vue';
import axios from 'axios';
 
//对外抛出的通用方法
export default{

    
    httpPost(config,callback){
        config.method='post';
        axios(config).then(function(response){
              callback(response);
        })
    },
    httpGet(config,callback){
        config.method='get';
        axios(config).then(function(response){
             callback(response);
        })
    }

    

}