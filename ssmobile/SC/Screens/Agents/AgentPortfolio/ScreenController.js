import React,{ Component } from 'react';
import base64 from 'react-native-base64'
//const base64 = require('base-64');
export class ScreenController extends Component{
    constructor(props){
        super(props);
        //const { navigation } = this.props;
        const {route} = this.props;
        
		this.state={
            imageSource:require("../../../../assets/images/user.png"),
            activeTab:'debut',
            isLoadingProfile:true,
            isLoadingFinished:true,
            Message:'',
            getData: route.params?.data,
            debitData:[],
            finishedData:[],
            profileData:{
                'bill_amount':0
            },
            bearerAuth: route.params?.token,
        };
      
        const {data,getData} = this.state;
        var uid = getData.userId;
        //uid = 'e720854c-f05e-11ea-9e81-066c77ebe1b6';
        this.loadProfile(uid);
        this.GetAgentPaymentTransaction(uid);
    }
    numberFormat=(txt)=>{
        return txt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    onTab=(activeTab)=>{
       this.setState({
        activeTab:activeTab //(this.state.activeTab=="debut"?"finished":'debut')
       });
    }
    loadProfile=(userId)=>{
        // alert('y');
                //this.props.navigation.navigate('StockScreen',{
                //    Title:"StockScreen"});
                this.setState({
                    isLoadingProfile:true
                });
                console.log(this.state.bearerAuth);
               
                bearerAuth = "Bearer " + this.state.bearerAuth;
                   console.log(bearerAuth);
                var form = JSON.stringify({
                    agent_id: 'e720854c-f05e-11ea-9e81-066c77ebe1b6'
                  });
                var url = "https://focusbeauty.zotefamily.com/v1/Agent/GetAgentBill?agent_id="+userId;
                fetch(url,{
                    method: 'GET',
                    headers: {
                        Accept: 'text/plain',
                        Authorization: bearerAuth
                    }
                })
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({isLoadingProfile:false});
                        console.log('result log ');
                        var returnData = result;
                        var status = (returnData.code?returnData.code:returnData.status);
                        var message = (returnData.message?returnData.message:returnData.title);
                        if(status==200){
                            console.log(returnData.data);
                            this.setState({isLoadingProfile:false,debitData:returnData.data.data_list,profileData:returnData.data});
                            
                        }
                        else if(status==400){
                            this.setState({isLoadingProfile:false,Message:message});
                        }
                        else{
                            this.setState({isLoadingProfile:false,Message:message});
                            console.log('start error');
                            console.log(JSON.stringify(returnData));
                            console.log('end error');
                        }
                        
                        
                        console.log('end result log ');
                    },
                    (error) => {
                        console.log('--- error log ');
                        //console.log(error);
                        console.log(JSON.stringify(error));

                        this.setState({isLoadingProfile:false,Message:'Something went wrong, Please check your internet connection.'});
                        console.log('--- end error log ');
                    }
                )
            }
        GetAgentPaymentTransaction=(userId)=>{
        // alert('y');
                //this.props.navigation.navigate('StockScreen',{
                //    Title:"StockScreen"});
               
               
                bearerAuth = "Bearer " + this.state.bearerAuth;
                var form = JSON.stringify({
                    agent_id: userId //'e720854c-f05e-11ea-9e81-066c77ebe1b6'
                  });
                var url = "https://focusbeauty.zotefamily.com/v1/Agent/GetAgentPaymentTransaction?agent_id="+userId;
                console.log(url);
                fetch(url,{
                    method: 'GET',
                    headers: {
                        Accept: 'text/plain',
                        Authorization: bearerAuth,
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log('result log ');
                        var returnData = result;
                        var status = (returnData.code?returnData.code:returnData.status);
                        var message = (returnData.message?returnData.message:returnData.title);
                        this.setState({
                            isLoadingFinished:false
                        });
                        if(status==200){
                            
                            this.setState({finishedData:returnData.data});
        
                        }
                        else if(status==400){
                            this.setState({Message:message});
                        }
                        else{
                            this.setState({Message:message});
                            console.log('start error');
                            console.log(JSON.stringify(returnData));
                            console.log('end error');
                        }
                        
                        
                        console.log('end result log ');
                    },
                    (error) => {
                        this.setState({
                            isLoadingFinished:false
                        });
                        console.log('--- error log ');
                        //console.log(error);
                        console.log(JSON.stringify(error));
                        this.setState({Message:'Something went wrong, Please check your internet connection.'});
                        console.log('--- end error log ');
                    }
                )
            }
    
}