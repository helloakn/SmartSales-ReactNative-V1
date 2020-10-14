import React,{ Component } from 'react';
import {Dimensions,Animated} from 'react-native';
const {height, width} = Dimensions.get('window'); 
export class ScreenController extends Component{
    constructor(props){
        super(props);
        //const { navigation } = this.props;
        const {route} = this.props;
		this.state={
            page:1,
            keyword:'',
            totalQty:0,
            purchaseQty:0,
            accountId:0,
            status:400,
            bearerAuth: route.params?.token,
            yearMonth:'2020 Feb',
            data:[],
            isLoading:true,
            Description:'',
            MMKAmount:'',
            USDAmount:'',
            USDTOMMK:'',
        };
        this.animatedWidth = new Animated.Value(0);
        this.animatedHeight = new Animated.Value(0);
        this.animatedOpocity = new Animated.Value(0);
        this.loadData();
    }
    onSetup=()=>{
        this.props.navigation.navigate('CreateProductScreen',{
            Title:"CreateProductScreen"});
    }
    /* start date events */
    animatedBoxHide = () => {
      Animated.timing(this.animatedWidth, {
         toValue: 0,
         duration: 200
      }).start()
      Animated.timing(this.animatedOpocity, {
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
      Animated.timing(this.animatedOpocity, {
         toValue: 1,
         duration: 200
      }).start()
      Animated.timing(this.animatedHeight, {
         toValue: height,
         duration: 100
      }).start()
   }
    onYearMonthClose=()=>{
        this.animatedBoxHide();
    }
    onOKYearMonthPress=(yearMonth)=>{
        
        this.setState({yearMonth:yearMonth});
        this.animatedBoxHide();
    }
    /* end date events */

    onScrollEnd=(nativeEvent)=>{
        //alert('ok');
        if (this.isCloseToBottom(nativeEvent)) {
            console.warn("Reached end of page");
            var page = this.state.page+1;
            this.setState({page:page});
            this.loadData(page);
          }
    }
    isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 1;
      };
    loadData=(page=0)=>{
// alert('y');
        //this.props.navigation.navigate('StockScreen',{
        //    Title:"StockScreen"});
        page = page==0?this.state.page:page;
        console.log(this.state.bearerAuth);
       
        bearerAuth = "Bearer " + this.state.bearerAuth;
           console.log(bearerAuth);
        
        fetch("https://focusbeauty.zotefamily.com/v1/BankAccount/GetAll",{
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
                    
                    
                    this.setState({status:status,data:returnData.data});

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
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log('--- error log ');
                //console.log(error);
                console.log(JSON.stringify(error));
                this.setState({Message:'Somethasding went wrong, Please check your internet connection.'});
                console.log('--- end error log ');
            }
        )
    }
    onItemClick=(item)=>{
        //alert(item.productName);
       // alert(item.accountId);
        this.setState({accountId:item.accountId,totalQty:item.totalQuantity});
    }
    onUSDTOMMKChangeText=(txt)=>{
        this.setState({
            USDTOMMK:txt
        });
    }
    onUSDAmountChangeText=(txt)=>{
        this.setState({
            USDAmount:txt
        });
    }
    onMMKAmountChangeText=(txt)=>{
        this.setState({
            MMKAmount:txt
        });
    }
    onDescriptionChangeText=(txt)=>{
        this.setState({
            Description:txt
        });
    }
    
    onSavePress=()=>{
      
       if(this.state.accountId!=0){
                //alert(this.state.purchaseQty);
                this.setState({isLoading:true});
                bearerAuth = "Bearer " + this.state.bearerAuth;
        
       /* var form = new FormData();
        form.append('page', x);
        form.append('keyword', keyword);
        */
        var form = JSON.stringify({
            "accountId": this.state.accountId,
            "effectiveDate": this.state.yearMonth.toLowerCase(),
            "exchangeRate": parseInt(this.state.USDTOMMK),
            "usdPrice": parseInt(this.state.USDAmount),
            "mmkPrice": parseInt(this.state.MMKAmount),
            "description": this.state.Description
        });
          console.log(form);
            fetch("https://focusbeauty.zotefamily.com/v1/PurchaseOrder/CreatePurchaseTransaction",{
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
                    //var status = (returnData.code?returnData.code:returnData.status);
                    //var message = (returnData.message?returnData.message:returnData.title);
                    var status = (returnData.code?returnData.code:returnData.status);
                    var message = (returnData.message?returnData.message:returnData.title);
                    //console.log(returnData.status);
                    //console.log(status);
                    if(status==200){
                        console.log('no error');
                        
                        this.setState({totalQty:0,status:status,Message:message,purchaseQty:0});
                        this.loadData(1);

                    }
                    else if(status==400){
                        this.setState({status:status,Message:message});
                    }
                    else{
                        this.setState({vMessage:message});
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
            )//end ajax
       }
       // this.props.navigation.navigate('CreateSaleScreen',{
       //     Title:"CreateSaleScreen"});
    }
    
    
}