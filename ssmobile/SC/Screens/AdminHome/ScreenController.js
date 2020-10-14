import React,{ Component } from 'react';

export class ScreenController extends Component{
    constructor(props){
        super(props);
        //const { navigation } = this.props;
        const {route} = this.props;
		this.state={
            FullName:'',
            UserName:'',
            bearerAuth: route.params?.token,
        };
    }
    
    
    onFullNameChangeText=(txt)=>{
        this.setState({
            FullName:txt
        });
    }
    

    onAgentsPress=()=>{
       //alert('y');
        //var screenName = "AgentPortfolioScreen";
        var screenName =  "AgentsListingScreens";
        this.props.navigation.navigate(screenName,{
            Title:"AgentsListingScreens",
            token:this.state.bearerAuth
        });
       
    }
    onSalesPress=()=>{
        //alert('y');
         this.props.navigation.navigate('SalesListingScreen',{
             Title:"SalesListingScreen",
             token:this.state.bearerAuth});
     }
     onPaymentsPress=()=>{
        //alert('y');
         this.props.navigation.navigate('PaymentsScreen',{
             Title:"PaymentsScreen",
             token:this.state.bearerAuth});
     }


    onStockPress=()=>{
        //alert('y');
        this.props.navigation.navigate('StockScreen',{
            Title:"StockScreen",
            token:this.state.bearerAuth});
    }

    onProductPress=()=>{
        //alert('y');
        this.props.navigation.navigate('ProductsListingScreen',{
            Title:"ProductsListingScreen",
            token:this.state.bearerAuth});
    }

    onPromotionPress=()=>{
        //alert('y');
        this.props.navigation.navigate('PromotionsListingScreen',{
             Title:"PromotionsListingScreen",
             token:this.state.bearerAuth});
    }
    onPurchasePress=()=>{
        //alert('y');
        this.props.navigation.navigate('PurchaseListingScreen',{
             Title:"PurchaseListingScreen",
             token:this.state.bearerAuth});
    }
    onDiscountPress=()=>{
        //alert('y');
        this.props.navigation.navigate('DiscountsListingScreen',{
             Title:"DiscountsListingScreen",
             token:this.state.bearerAuth});
    }
    onAccountPress=()=>{
        //alert('y');
        this.props.navigation.navigate('BankAccountsListingScreen',{
             Title:"BankAccountsListingScreen",
             token:this.state.bearerAuth});
    }
    
}