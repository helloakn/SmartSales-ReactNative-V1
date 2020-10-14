import React,{ Component } from 'react';

export class ScreenController extends Component{
    constructor(props){
        super(props);
        //const { navigation } = this.props;
        const {route} = this.props;
		this.state={
            PromotionName:'',
            bearerAuth: route.params?.token,
            Message:''
        };
    }
    
    
    onPromotionNameChangeText=(txt)=>{
        this.setState({
            PromotionName:txt,
            Message:''
        });
    }
    

    onNextPress=()=>{
       //alert('y');
       if(this.state.PromotionName!=""){
        this.setState({
            Message:''
        });
            this.props.navigation.navigate('CreatePromotion2Screen',{
                Title:"CreatePromotion2Screen",
                PromotionName:this.state.PromotionName,
                token:this.state.bearerAuth
            });
       }
       else{
        this.setState({
            Message:'Please Type Promotion Name.'
        });
       }
        
    }
    
}