import React,{ Component } from 'react';

export class ScreenController extends Component{
    constructor(props){
        super(props);
        //const { navigation } = this.props;
        const {route} = this.props;
		this.state={
            ProductId:'',
            PromotionName:route.params?.PromotionName,
            bearerAuth: route.params?.token,
            ProductList:[],
            ProductQty:0,
            Message:''
        };
        this.loadData();
    }
    
    
    onProductQtyChangeText=(txt)=>{
        this.setState({
            ProductQty:txt
        });
    }
    

    onNextPress=()=>{
        if(this.state.ProductId==""){
            this.setState({
                Message:'Please Choose Product'
            });
        }
        else if(this.state.ProductQty=="" || this.state.ProductQty=="0"){
            this.setState({
                Message:'Please Type Qty'
            });
        }
        else
        {
            this.props.navigation.navigate('CreatePromotion3Screen',{
                Title:"CreatePromotion3Screen",
                token:this.state.bearerAuth,
                ProductId:this.state.ProductId,
                ProductQty:this.state.ProductQty,
                PromotionName:this.state.PromotionName
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