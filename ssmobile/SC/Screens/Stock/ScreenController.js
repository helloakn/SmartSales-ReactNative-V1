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
            productId:0,
            status:400,
            bearerAuth: route.params?.token,
            yearMonth:'2020 Feb',
            data:[],
            isLoading:true,
            isShowYearMonth:false
        };
        this.animatedWidth = new Animated.Value(0);
        this.animatedHeight = new Animated.Value(0);
        this.animatedOpacity = new Animated.Value(0);
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
      Animated.timing(this.animatedHeight, {
         toValue: 0,
         duration: 100
      }).start()
      Animated.timing(this.animatedOpacity, {
        toValue: 0,
        duration: 10
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
      Animated.timing(this.animatedOpacity, {
        toValue: 1,
        duration: 10
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
        
       /* var form = new FormData();
        form.append('page', x);
        form.append('keyword', keyword);
        */
        var form = JSON.stringify({
            page: page,
            keyword: this.state.keyword
          });
        fetch("https://focusbeauty.zotefamily.com/v1/Product/GetList",{
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
                    console.log(returnData.data.data_list.length);
                    var data = this.state.data;
                    if(this.state.page!=1){
                        data = data.concat(returnData.data.data_list);
                    }
                    else{
                        data = returnData.data.data_list;
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
        )
    }
    onItemClick=(item)=>{
        //alert(item.productName);
        this.setState({productId:item.productId,totalQty:item.totalQuantity});
    }
    onPurchaseQtyChangeText=(txt)=>{
        this.setState({
            purchaseQty:txt
        });
    }
    
    onSavePress=()=>{
      
       if(this.state.productId!=0){
            if(this.state.purchaseQty!=0){
                //alert(this.state.purchaseQty);
                this.setState({isLoading:true});
                bearerAuth = "Bearer " + this.state.bearerAuth;
           console.log(bearerAuth);
        
       /* var form = new FormData();
        form.append('page', x);
        form.append('keyword', keyword);
        */
        var form = JSON.stringify({
            effectiveDate: this.state.yearMonth.toLowerCase(), //'2020-jun',
            purchaseProducts:[
                {
                    productId: this.state.productId,
                    quantity: parseInt(this.state.purchaseQty)
                }
            ]
          });
          console.log(form);
            fetch("https://focusbeauty.zotefamily.com/v1/PurchaseOrder/Create",{
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
       }
       // this.props.navigation.navigate('CreateSaleScreen',{
       //     Title:"CreateSaleScreen"});
    }
    
    
}