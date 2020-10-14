import React,{ Component } from 'react';
import {Dimensions,Animated} from 'react-native';
const {height, width} = Dimensions.get('window');
export class ScreenController extends Component{
    constructor(props){
        super(props);
        //const { navigation } = this.props;
        const {route} = this.props;
		this.state={
            PromotionName:route.params?.PromotionName,
            ProductId:route.params?.ProductId,
            ProductQty:route.params?.ProductQty,
            bearerAuth: route.params?.token,
            PromotionProductId:route.params?.PromotionProductId,
            PromotionProductQty:route.params?.PromotionProductQty,
            Message:'',
            yearMonthFrom:'2020 Feb',
            yearMonthTo:'2020 Feb',
        };
        this.animatedWidthFrom = new Animated.Value(0);
        this.animatedHeightFrom = new Animated.Value(0);
        this.animatedOpacityFrom = new Animated.Value(0);
        this.animatedWidthTo = new Animated.Value(0);
        this.animatedHeightTo = new Animated.Value(0);
        this.animatedOpacityTo = new Animated.Value(0);
    }
    /* start date events From */
    animatedBoxHideFrom = () => {
      Animated.timing(this.animatedWidthFrom, {
         toValue: 0,
         duration: 200
      }).start();
      Animated.timing(this.animatedHeightFrom, {
         toValue: 0,
         duration: 100
      }).start();
      Animated.timing(this.animatedOpacityFrom, {
         toValue: 0,
         duration: 100
      }).start()
   }
   animatedBoxShowFrom = () => {
      Animated.timing(this.animatedWidthFrom, {
         toValue: width,
         duration: 200
      }).start()
      Animated.timing(this.animatedHeightFrom, {
         toValue: height,
         duration: 100
      }).start();
      Animated.timing(this.animatedOpacityFrom, {
         toValue: 1,
         duration: 100
      }).start()
   }
    onYearMonthCloseFrom=()=>{
        this.animatedBoxHideFrom();
    }
    onOKYearMonthPressFrom=(yearMonth)=>{
        
        this.setState({yearMonthFrom:yearMonth});
        this.animatedBoxHideFrom();
    }
    /* end date events */

    /* start date events To */
    animatedBoxHideTo = () => {
      Animated.timing(this.animatedWidthTo, {
         toValue: 0,
         duration: 200
      }).start()
      Animated.timing(this.animatedHeightTo, {
         toValue: 0,
         duration: 100
      }).start()
      Animated.timing(this.animatedHeightTo, {
         toValue: 0,
         duration: 100
      }).start()
   }
   animatedBoxShowTo = () => {
      Animated.timing(this.animatedWidthTo, {
         toValue: width,
         duration: 200
      }).start()
      Animated.timing(this.animatedHeightTo, {
         toValue: height,
         duration: 100
      }).start()
      Animated.timing(this.animatedOpacityTo, {
         toValue: 1,
         duration: 100
      }).start()
   }
    onYearMonthCloseTo=()=>{
        this.animatedBoxHideTo();
    }
    onOKYearMonthPressTo=(yearMonth)=>{
        
        this.setState({yearMonthTo:yearMonth});
        this.animatedBoxHideTo();
    }
    /* end date events */
    onPromotionProductQtyChangeText=(txt)=>{
        this.setState({
            PromotionProductQty:txt
        });
    }
    
    onShowYearMonthPicker=()=>{
        this.setState({isShowYearMonth:true});
    }
    onSavePress=()=>{
      

       bearerAuth = "Bearer " + this.state.bearerAuth;
       console.log(bearerAuth);
    
    var form = JSON.stringify({
        promotionRuleCode:this.state.PromotionName,
        productId:this.state.ProductId,
        productQty:parseInt(this.state.ProductQty),
        promotionProductId:this.state.PromotionProductId,
        promotionProductQty:parseInt(this.state.PromotionProductQty),
        startDate: this.state.yearMonthFrom.toLowerCase(), //"2019-09-18T15:58:04.602Z",
        endDate:this.state.yearMonthTo.toLowerCase()
     })
  
    
        console.log('ok go...');
        console.log(form);
        /*
        curl -X POST "https://focusbeauty.zotefamily.com/v1/PromotionRule/Create" -H "accept: text/plain" 
        -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI3ZTdiYjlhZS1kM2RjLTExZWEtOWU4MS0wNjZjNzdlYmUxYjYiLCJSb2xlIjoiQWRtaW4iLCJOYW1lIjoiYWRtaW4iLCJleHAiOjE2MzE3MTA5MTMsImlzcyI6Imh0dHBzOi8vd3d3LnN1cGVyY29uZmlndXJlLmNvbSIsImF1ZCI6Imh0dHBzOi8vd3d3LnN1cGVyY29uZmlndXJlLmNvbSJ9.r8gk99F9Htq3_w4gKpOIhn0UfCSPWMLh-CqlvKNl4Lc" 
        -H "Content-Type: application/json" 
        -d "{\"promotionRuleCode\":\"string\",\"productId\":\"string\",\"productQty\":0,\"promotionProductId\":\"string\",\"promotionProductQty\":0,\"startDate\":\"2020-09-17T09:53:23.488Z\",\"endDate\":\"2020-09-17T09:53:23.488Z\"}"
        */
        fetch("https://focusbeauty.zotefamily.com/v1/PromotionRule/Create",{
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