import React,{ Component } from 'react';

export class ScreenController extends Component{
    constructor(props){
        super(props);
        //const { navigation } = this.props;
        
		const {route} = this.props;
		this.state={
            bearerAuth: route.params?.token,
            Message:'',
            discountRuleCode:''
        };
    }
    
    
    ondiscountRuleCodeChangeText=(txt)=>{
        this.setState({
            discountRuleCode:txt
        });
    }
    

    onNextPress=()=>{
       //alert('y');
       if(this.state.discountRuleCode==''){
            this.setState(
                {
                    Message:'Please Type Discount Name.'
                }
            );                
       }
       else{
            this.props.navigation.navigate('CreateDiscount2Screen',{
            Title:"CreateDiscount2Screen",
            token:this.state.bearerAuth,
            discountRuleCode:this.state.discountRuleCode
            });
       }
        
    }
    
}