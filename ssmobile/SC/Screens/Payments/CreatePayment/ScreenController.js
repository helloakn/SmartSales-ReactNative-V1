import React,{ Component } from 'react';
import {Dimensions,Animated} from 'react-native';
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
            yearMonth:'2020 Feb',
            data:[],
            Description:'',
            Amount:'',
            accountId:'',
            
        };
        this.animatedWidth = new Animated.Value(0);
        this.animatedHeight = new Animated.Value(0);
        this.loadData(1);
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
    onYearMonthClose=()=>{
        this.animatedBoxHide();
    }
    onOKYearMonthPress=(yearMonth)=>{
        
        this.setState({yearMonth:yearMonth});
        this.animatedBoxHide();
    }
    /* end date events */
    loadData=(page=0)=>{
       // page = page==0?this.state.page:page;
        console.log(this.state.bearerAuth);
       
        bearerAuth = "Bearer " + this.state.bearerAuth;
           
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
                    console.log('bank list pal so par soe');
                    
                    this.setState({data:returnData.data});

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
        )
    }
    onItemClick=(item)=>{
        //alert(item);
        //console.log(item);
        this.setState({
            accountId:item.accountId
        });
    }
    onDescriptionChangeText=(txt)=>{
        this.setState({
            Description:txt
        });
    }
    onAmountChangeText=(txt)=>{
        this.setState({
            Amount:txt
        });
    }
    

    onCreatePress=()=>{
        // alert('y');
        //this.props.navigation.navigate('CreateProductScreen',{
        //    Title:"CreateProductScreen"});
        const {getData} = this.state;
        agentId = getData.userId;
       // console.log(getData);
/*
ma pee tay par
*/

        bearerAuth = "Bearer " + this.state.bearerAuth;
       // console.log(bearerAuth);
     
    if(this.state.accountId ==""){
        this.setState(
            {
                Message:'Please Choose Bank Account!'
            }
        );
    }
    else if(this.state.Amount ==""){
        this.setState(
            {
                Message:'Please Type Amount!'
            }
        );
    }
    else if(this.state.Description ==""){
        this.setState(
            {
                Message:'Please Type Description!'
            }
        );
    }
    else{
        this.setState(
            {
                Message:''
            }
        );
        var form = JSON.stringify({
            agentId: agentId,
            accountId: this.state.accountId,
            effectiveDate:this.state.yearMonth.toLowerCase(),
            price:parseInt(this.state.Amount),
            description:this.state.Description
          })
         
           console.log('ok go...');
           console.log(form);
         fetch("https://focusbeauty.zotefamily.com/v1/SalesOrder/CreateSalsTransaction",{
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
    }


    
 
    }
    
}