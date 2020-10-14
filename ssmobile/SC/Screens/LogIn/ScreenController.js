import React,{ Component } from 'react';
import base64 from 'react-native-base64'
//const base64 = require('base-64');
export class ScreenController extends Component{
    constructor(props){
        super(props);
        //const { navigation } = this.props;
        
		this.state={
            UserName:'admin',
            Password:'api@2020',
            isRemember:false,
            isError:false,
            isLoading:false,
            Message:''
        };
    }
    onPasswordChangeText=(txt)=>{
        this.setState({
            Password:txt
        });
    }
    
    onUserNameChangeText=(txt)=>{
        this.setState({
            UserName:txt
        });
    }
    
    setSelection=(v)=>{
        //  alert(v);
          this.setState({
              isRemember:v
          });
     }

    onLogInPress=()=>{
    this.setState({
        isLoading:true
    });
    var baseAuth = base64.encode("apiuser:api2020");
    console.log(baseAuth);
    //headers.append("Authorization", "Basic " + baseAuth);
    baseAuth = "Basic " + baseAuth;
    fetch("https://focusbeauty.zotefamily.com/v1/Authentication/Login",{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Authorization': baseAuth,
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            username: this.state.UserName,
            password: this.state.Password
          })
      })
      .then(res => res.json())
      .then(
        (result) => {
            console.log('result log ');
            console.log(JSON.stringify(result));
            var returnData = result;
            var status = (returnData.code?returnData.code:returnData.status);
            var message = (returnData.message?returnData.message:returnData.title);
            console.log(returnData.status);
            console.log(status);
            if(status==200){
                console.log('no error');
                //var screen = "CreateSaleScreen";
                //var screen = "StockScreen";
                //var screen = "CreateProductScreen";
                //var screen = "CreateAgentScreen";
                var screen = "AdminHomeScreen";
                this.props.navigation.navigate(screen,{
                        Title:screen,
                        token:returnData.data.token});
            }
            else if(status==400){
                this.setState({isLoading:false,Message:message});
            }
            else{
                this.setState({isLoading:false,Message:message});
            }
            
            
            console.log('end result log ');
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            console.log('error log ');
            console.log(JSON.stringify(error));
            this.setState({Message:'Something went wrong, Please check your internet connection.'});
            console.log('end error log ');
        }
      )
        //this.props.navigation.navigate('CreateAgentScreen',{
        //    Title:"CreateAgentScreen"});
    }
    
}