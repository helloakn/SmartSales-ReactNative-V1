import React,{ Component } from 'react';
import {Dimensions,Animated} from 'react-native';
import { StackActions } from '@react-navigation/native';
const {height, width} = Dimensions.get('window'); 
export class ScreenController extends Component{
    constructor(props){
        super(props);
        //const { navigation } = this.props;
        const {route} =this.props;
		this.state={
            showProduct:false,
            getData: route.params?.data,
            bearerAuth: route.params?.token,
            monthNames:["","Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ],
            yearMonth:'2020 Feb',
            isShowYearMonth:false,
            ProductList:[],
            saleProductList:[],
            productQty:''
        };
        this.animatedWidth = new Animated.Value(0);
        this.animatedHeight = new Animated.Value(0);
        this.animatedWidthProduct = new Animated.Value(0);
        this.animatedHeightProduct = new Animated.Value(0);
        this.loadData();
    }
    animatedBoxHide = () => {
      Animated.timing(this.animatedWidth, {
         toValue: 0,
         duration: 200
      }).start()
      Animated.timing(this.animatedHeight, {
         toValue: 0,
         duration: 100
      }).start()
   }
   animatedBoxShow = () => {
      Animated.timing(this.animatedWidth, {
         toValue: width,
         duration: 200
      }).start()
      Animated.timing(this.animatedHeight, {
         toValue: height,
         duration: 100
      }).start()
   }
   animatedBoxHideProduct = () => {
      Animated.timing(this.animatedWidthProduct, {
         toValue: 0,
         duration: 200
      }).start()
      Animated.timing(this.animatedHeightProduct, {
         toValue: 0,
         duration: 100
      }).start()
   }
   animatedBoxShowProduct = () => {
      Animated.timing(this.animatedWidthProduct, {
         toValue: width,
         duration: 200
      }).start()
      Animated.timing(this.animatedHeightProduct, {
         toValue: height,
         duration: 100
      }).start()
   }
    numberFormat=(txt)=>{
        return txt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    onYearMonthClose=()=>{
        this.animatedBoxHide();
    }
    onOKYearMonthPress=(yearMonth)=>{
        
        this.setState({yearMonth:yearMonth});
        this.animatedBoxHide();
    }
    /* start date events */
    onShowYearMonthPicker=()=>{
       // this.setState({isShowYearMonth:true});
        this.animatedBoxShow();
       // alert('done');
    }
    
    /* end date events */
    
    onProductQtyChangeText=(txt)=>{
        this.setState({
            productQty:txt
        });
    }
    onChooseProductPress=()=>{
        this.setState({
            showProduct:true
        });
        this.animatedBoxShowProduct();
        
    }
    itemRemove=(index)=>{
       // alert(index);
        var saleProductList = this.state.saleProductList;
        //console.log(saleProductList.length);
        saleProductList.splice(index,1);
        //console.log(saleProductList);
        this.setState({
            saleProductList:saleProductList
        });
    }
    onClosePress=()=>{
        //alert('colose');
        this.animatedBoxHideProduct();
        this.setState({
            showProduct:false
        });

    }
    
    onOKPress=(product)=>{
        //alert('ok');
       // alert(productId);
       console.log(product);
       if(product!=null && this.state.productQty!=""){

            var saleProductList = this.state.saleProductList;
            saleProductList.push({
                productId:product.productId,
                productName:product.productName,
                quantity:parseInt(this.state.productQty),
                productPrice:product.productPrice
            });
            this.setState({
                showProduct:false,
                saleProductList:saleProductList
            });
            this.animatedBoxHideProduct();
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
    

    onCreatePress=()=>{
       // alert('y');
       if(this.state.saleProductList.length==0){
        this.setState({Message:'Please choose product to sell.'});
       }
       else{
           const {getData} = this.state;
console.log(getData);

        /*
        {
        "agentId": "12121",
        "effectiveDate": "2020 jan",
        "saleProducts": [
            {
            "productId": "12",
            "quantity": 0
            }
        ]
        }*/
        bearerAuth = "Bearer " + this.state.bearerAuth;
        var form = JSON.stringify({
            agentId: getData.userId,
            effectiveDate:this.state.yearMonth.toLowerCase(),
            saleProducts:this.state.saleProductList
          })
         
           console.log('ok go...');
           console.log(form);
         fetch("https://focusbeauty.zotefamily.com/v1/SalesOrder/Create",{
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
                 console.log('result log ');
                 console.log(result);
                 var returnData = result;
                 var status = (returnData.code?returnData.code:returnData.status);
                 var message = (returnData.message?returnData.message:returnData.title);
                 if(status==200){
                     console.log('no error');
                            this.setState({Message:message});
                            const popAction = StackActions.pop(2);
                             this.props.navigation.dispatch(popAction);
                            
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
                 console.log(JSON.stringify(error));
                 this.setState({Message:'Something went wrong, Please check your internet connection.'});
                 console.log('--- end error log ');
             }
         );//end ajax
         /*
        this.props.navigation.navigate('CreateProductScreen',{
            Title:"CreateProductScreen"});
            */
       }
        
    }
    
}