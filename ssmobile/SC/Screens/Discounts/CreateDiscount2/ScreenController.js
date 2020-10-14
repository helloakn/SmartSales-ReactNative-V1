import React,{ Component } from 'react';

export class ScreenController extends Component{
    constructor(props){
        super(props);
        const {route} = this.props;
		this.state={
            discountRuleCode:route.params?.discountRuleCode,
            bearerAuth: route.params?.token,
            Message:'',
            discountRuleCode:route.params?.discountRuleCode,
            ProductList:[],
            productId:'',
            productQty:'',
        };
        this.loadData();
    }
    
    
    onProductQtyChangeText=(txt)=>{
        this.setState({
            productQty:txt
        });
    }
    

    onNextPress=()=>{
        //alert('y');
        if(this.state.productId==''){
            this.setState({
                Message:'Please Choose Product.'
            });
        }
        else if(this.state.productQty=='' || this.state.productQty=="0"){
            this.setState({
                Message:'Please Define Quantity.'
            });
        }
        else{
            this.props.navigation.navigate('CreateDiscount3Screen',{
                Title:"CreateDiscount3Screen",
                token:this.state.bearerAuth,
                discountRuleCode:this.state.discountRuleCode,
                productId:this.state.productId,
                productQty:this.state.productQty

            });
        }
         
     }
    
    loadData=()=>{
        bearerAuth = "Bearer " + this.state.bearerAuth;
           
        fetch("https://focusbeauty.zotefamily.com/v1/Product/GetAll",{
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
                this.setState({isLoading:false});
                console.log('result log ');
                console.log(result);
                var returnData = result;
                //var status = (returnData.code?returnData.code:returnData.status);
                //var message = (returnData.message?returnData.message:returnData.title);
                var status = (returnData.code?returnData.code:returnData.status);
                var message = (returnData.message?returnData.message:returnData.title);
                //console.log(returnData.status);
                //console.log(status);
                if(status==200){
                    console.log('no error');
                    
                    
                    this.setState({ProductList:returnData.data});

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
                console.log('--- error log ');
                //console.log(error);
                console.log(JSON.stringify(error));
                this.setState({Message:'Something went wrong, Please check your internet connection.'});
                console.log('--- end error log ');
            }
        )//end ajax
    }
}