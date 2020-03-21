import Vue from 'vue';
import CryptoJS from 'crypto-js';
 
//对外抛出的通用方法
export default{
    //加密
    encrypt(word,keyStr,times){
 
         keyStr=keyStr? keyStr: 'abcdefgabcdefg66';
         var key=CryptoJS.enc.Utf8.parse(keyStr);
         var srcs=CryptoJS.enc.Utf8.parse(word);
         var encrypyted='';
         for(var i =0;i<times;i++){
             if(i===0){
                encrypyted=CryptoJS.AES.encrypt(srcs,key,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.Pkcs7});
                
             }else{
                encrypyted=CryptoJS.AES.encrypt(encrypyted.toString(),key,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.Pkcs7});
             }
         }
        console.log(encrypyted.toString());
        return encrypyted.toString();
    },

    //解密
    decrypt(word,keyStr,times){
        keyStr=keyStr? keyStr: 'abcdefgabcdefg66';
        var key=CryptoJS.enc.Utf8.parse(keyStr);
        var decrypt='';
        for(var i=0;i<times;i++){
            if(i===0){
                
                decrypt=CryptoJS.AES.decrypt(word,key,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.Pkcs7});
                 
            }else{
                decrypt=CryptoJS.AES.decrypt(CryptoJS.enc.Utf8.stringify(decrypt).toString(),key,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.Pkcs7});
            }
        }
        console.log(CryptoJS.enc.Utf8.stringify(decrypt).toString());
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();

    },
    setSessionStorage(key,value){
        sessionStorage.setItem(key,value);
    },
    getSessionStorage(key){
        return sessionStorage.getItem(key);
    },
    getUsbUrl(){
        return 'http://192.168.125.1:8080'
    }
   
}