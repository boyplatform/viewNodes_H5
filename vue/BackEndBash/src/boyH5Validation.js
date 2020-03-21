'use strict'
var validator=require('validator');
 
var boyH5Common=require('./boyH5Common');
var QueueValidator=(function(){
    
    
    
    
    return function() {
         
        this.InputValidator=function(body,router){
            
            let validatorResult=[];
            switch(router)
            {
               
              case '/hubEntry':
                if(body.type===undefined||body.cmd===undefined)
                {
                    validatorResult.push({RequestResponseId:boyH5Common.getUUID(),Result:false,Description:'报文结构错误,请检查核对!'})
                }else{
                    if(body.type==="encryption"&&body.cmd==="getEncryptionString"&&(body.encryptionTimes===undefined||body.encryptionKey===undefined)){
                       
                        validatorResult.push({RequestResponseId:boyH5Common.getUUID(),Result:false,Description:'报文结构错误,请检查核对!'})

                    }
                    validatorResult.push({Result:true});
                }
                break;
               
            }

            return validatorResult[0];
        }


    
    }
})();

module.exports=QueueValidator;