import React,{ Component } from 'react';

export class ScreenController extends Component{
    constructor(props){
        super(props);
        //const { navigation } = this.props;
        const {route} = this.props;
		this.state={
            page:1,
            keyword:'',
            bearerAuth: route.params?.token,
            isLoading:true,
            data:[]
        };
        this.loadData(1);
    }
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
 //alert('y');
        //this.props.navigation.navigate('StockScreen',{
        //    Title:"StockScreen"});
        this.setState(
            {
                isLoading:true
            }
        );
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
        fetch("https://focusbeauty.zotefamily.com/v1/SalesOrder/GetList",{
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
                this.setState(
                    {
                        isLoading:false
                    }
                );
                var returnData = result;
                var status = (returnData.code?returnData.code:returnData.status);
                var message = (returnData.message?returnData.message:returnData.title);
                if(status==200){
                    console.log('no error');
                    var data = this.state.data;
                    if(this.state.page!=1){
                        data = data.concat(returnData.data.data_list);
                    }
                    else{
                        data = returnData.data.data_list;
                    }
                    
                    this.setState({data:data});

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
                this.setState(
                    {
                        isLoading:false
                    }
                );
                console.log('--- error log ');
                //console.log(error);
                console.log(JSON.stringify(error));
                this.setState({Message:'Something went wrong, Please check your internet connection.'});
                console.log('--- end error log ');
            }
        )
    }
    onFullNameChangeText=(txt)=>{
        this.setState({
            FullName:txt
        });
    }
    onChangeText=(txt)=>{
        this.setState(
            {
                page:1,
                keyword:txt
            }
        );
        //alert(txt);
        console.log('ok ok ok ok ok ok kokkkkkkk.....');
        this.loadData();
        //this.forceUpdate();
        console.log('end ok ok ok ok ok kokkkkkkk.....');
    }
    onCreateSale=()=>{
        this.props.navigation.navigate('ChooseAgentsScreens',{
            Title:"ChooseAgentsScreens",
            token:this.state.bearerAuth,
            action:'forSales'
        });
    }
    onItemPress=()=>{
        alert('ok');
    }
    
    
}