import React from 'react'
import './FirstStep.css'
import { useDispatch } from "react-redux";
import { useState } from 'react'    


import { Input, Radio,DatePicker, InputNumber, Button} from 'antd';
var data=[]

var user={
    name:'',
    email:'',
    role:'',
    address:'',
    paymentMethod:'',password:'',
}

function FirstStep() {
    const [state1, setState1]= useState()
    const [state2, setState2]= useState()
    const [state3, setState3]= useState()
    const [state4, setState4]= useState()   

        
    const dispatch = useDispatch()   

    return (
        <div className="formulaire">

                <h6> Nom et prénom</h6>
                <Input
                    value={state1}
                    onChange={(e)=>{
                    //console.log(e.target.value)
                    user.name=e.target.value
                    setState1(e.target.value)
                   
                    //data.push(e.target.value)
                    }    
                }                
                
                className="inputInfo"/>
                <h6> Address</h6>
                <Input
                    value={state2}
                    onChange={(e)=>{
                        setState2(e.target.value)
                        user.address=e.target.value
                    }
                    //console.log(e.target.value)
                    //data.push(e)
    
                }                
                className="inputInfo"/>
                
                <h6> paymentMethod</h6>
                <Radio.Group name="radiogroup" defaultValue={1} style={{marginTop:"10px", marginBottom:"10px" }} 
                onChange={(e)=>{
                    user.paymentMethod = e.target.value}}
                >
                    <Radio value={1}>Espece</Radio>
                    <Radio value={2}>Chec</Radio>
                </Radio.Group>
        </div>
    )
}

export { user as data} 

export default FirstStep


