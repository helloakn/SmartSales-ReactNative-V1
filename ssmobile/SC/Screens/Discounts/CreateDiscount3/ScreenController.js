import React,{ Component } from 'react';


import { StackActions } from '@react-navigation/native';

export class ScreenController extends Component{
    constructor(props){
        super(props);
        //const { navigation } = this.props;
        const {route} = this.props;
		this.state={
            discountRuleCode:route.params?.discountRuleCode,
            bearerAuth: route.params?.token,
            Message:'',
            productId:route.params?.productId,
            productQty:route.params?.productQty,
            discountPercentage:''
        };
    }
    
    
    onDiscountPercentageChangeText=(txt)=>{
        this.setState({
            discountPercentage:txt
        });
    }
    

    onSavePress=()=>{
       //alert('y');

        //this.props.navigation.navigate('CreateSaleScreen',{
        //    Title:"CreateSaleScreen"});
        if(this.state.discountPercentage==''){
            this.setState({
                Message:'Please Define Discount Percentage.'
            });
        }
        else{
           
        bearerAuth = "Bearer " + this.state.bearerAuth;
       // console.log(bearerAuth);
    
        var form = JSON.stringify({
            discountRuleCode:this.state.discountRuleCode,
            productId:this.state.productId,
            productQty:parseInt(this.state.productQty),
            discountPercentage:parseInt(this.state.discountPercentage)
        })
    /
            fetch("https://focusbeauty.zotefamily.com/v1/DiscountRule/Create",{
                method: 'POST',
                headers: {
                    Accept: 'text/plain',
                    Authorization: bearerAuth,
                    'Content-Type': 'application/json'
                },
                body: form
            })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({isLoading:false});
                    console.log('result log -> ');
                    console.log(result);
                    var returnData = result;
                    var status = (returnData.code?returnData.code:returnData.status);
                    var message = (returnData.message?returnData.message:returnData.title);
                    if(status==200){
                        console.log('no error');
                            this.setState({Message:message});
                    
                            
                             const popAction = StackActions.pop(3);
                             this.props.navigation.dispatch(popAction);
                    }
                    else if(status==400){
                        this.setState({Message:message});
                    }
                    else{
                        this.setState({Message:message});
                    }
                    
                    
                    console.log(' <-end result log ');
                },
                (error) => {
                    console.log('--- error log ');
                    console.log(JSON.stringify(error));
                    this.setState({Message:'Something went wrong, Please check your internet connection.'});
                    console.log('--- end error log ');
                }
            );//end ajax  
        }
    }
    
}