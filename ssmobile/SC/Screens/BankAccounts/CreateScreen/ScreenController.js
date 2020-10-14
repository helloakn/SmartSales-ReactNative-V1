import React,{ Component } from 'react';



import { StackActions } from '@react-navigation/native';
import RNFetchBlob from 'rn-fetch-blob';

export class ScreenController extends Component{
    constructor(props){
        super(props);
        //const { navigation } = this.props;
        const {route} = this.props;
		this.state={
            ProductType:1,
            ProductName:'',
            ProductPrice:'',
            ProductDescription:'',
            ProductID:0,
            bearerAuth: route.params?.token,
            imageSource:require("../../../../assets/images/stockimg.png"),
            isSelectedImage:false,
            productImage:'',
            Message:'',
            data:[],
            bankID:0
        };
        this.loadData();
    }
    onItemClick=(item)=>{
        //alert(item.productName);
        this.setState({bankID:item.id});
    }
    loadData=()=>{
        
        console.log(this.state.bearerAuth);
       
        bearerAuth = "Bearer " + this.state.bearerAuth;
           console.log(bearerAuth);
        
       /* var form = new FormData();
        form.append('page', x);
        form.append('keyword', keyword);
        */
       
        fetch("https://focusbeauty.zotefamily.com/v1/BankAccount/GetAllBank",{
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
                console.log(result);
                var returnData = result;
                var status = (returnData.code?returnData.code:returnData.status);
                var message = (returnData.message?returnData.message:returnData.title);
                if(status==200){
                    console.log(returnData.data.data_list.length);
                    var data = this.state.data;
                    if(this.state.page!=1){
                        data = data.concat(returnData.data);
                    }
                    else{
                        data = returnData.data;
                    }
                    
                    this.setState({status:status,data:data});

                }
                else if(status==400){
                    this.setState({status:status,Message:message});
                }
                else{
                    this.setState({status:status,Message:message});
                    console.log('start error');
                    console.log(JSON.stringify(returnData));
                    console.log('end error');
                }
                
                
                console.log('end result log ');
            },
            (error) => {
                console.log('--- error log ');
                console.log(JSON.stringify(error));
                this.setState({Message:'Something went wrong, Please check your internet connection.'});
                console.log('--- end error log ');
            }
        )
    }
    
    onProductNameChangeText=(txt)=>{
        this.setState({
            ProductName:txt
        });
    }
    onProductPriceChangeText=(txt)=>{
        this.setState({
            ProductPrice:txt
        });
    }
    onProductDescriptionChangeText=(txt)=>{
        this.setState({
            ProductDescription:txt
        });
    }
    

    onCreatePress=()=>{
       // alert('y');
        //this.props.navigation.navigate('StockScreen',{
        //    Title:"StockScreen"});
       //console.log(this.state.bearerAuth);
       
        bearerAuth = "Bearer " + this.state.bearerAuth;
           //console.log(bearerAuth);
        /*
        var form = new FormData();
        form.append('ProductType', this.state.ProductType);
        form.append('ProductName', this.state.ProductName);
        form.append('ProductPrice', this.state.ProductPrice);
        form.append('ProductDescription', this.state.ProductDescription);
        */

       console.log(this.state.productImage);
       
        
          console.log('ok go...');
         // console.log(fileData);
          //console.log(form);
          console.log('ProductName');
          console.log(this.state.ProductName);
          console.log('Price');
          console.log(this.state.ProductPrice);
          console.log('ProductDescription');
          console.log(this.state.ProductDescription);
          console.log('end');

          RNFetchBlob.fetch('POST', 'https://focusbeauty.zotefamily.com/v1/Product/Create', {
            Authorization : bearerAuth,
            'Content-Type' : 'multipart/form-data',
          }, [
            { name : 'ProductType', data : String(this.state.ProductType)},
            { name : 'ProductName', data : this.state.ProductName},
            { name : 'ProductPrice', data : this.state.ProductPrice},
            { name : 'ProductDescription', data : this.state.ProductDescription}
          ]).then((resp) => {
            // ...
            console.log(resp);
            var returnData = resp;
            var status = (returnData.code?returnData.code:returnData.status);
            var message = (returnData.message?returnData.message:returnData.title);
            if(status==200){
               // console.log('no error');
                this.setState({isLoading:false,status:status,Message:message,agentCode:returnData.data.agentCode});
            }
            else if(status==400){
                this.setState({isLoading:false,status:status,Message:message});
            }
            else{
                this.setState({isLoading:false,status:status,Message:message});
                console.log('start error');
                console.log(JSON.stringify(returnData));
                console.log('end error');
            }
            const popAction = StackActions.pop(1);
            this.props.navigation.dispatch(popAction);
          }).catch((err) => {
            // ...
          });

          /*
        fetch("https://focusbeauty.zotefamily.com/v1/Product/Create",{
            method: 'POST',
            headers: {
                Accept: 'text/plain',
                Authorization: bearerAuth,
                'Content-Type': 'multipart/form-data'
            },
            body: form
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
                  
                           this.setState({isSelectedImage:false,Message:message});
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
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log('--- error log ');
                //console.log(error);
                console.log(JSON.stringify(error));
                this.setState({Message:'Something went wrong, Please check your internet connection.'});
                console.log('--- end error log ');
            }
        ) */
    }
    
}