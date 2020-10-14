import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionSpecs, HeaderStyleInterpolators,createStackNavigator } from '@react-navigation/stack';

import {
    GetStartedScreen,
    LogInScreen,
    StockScreen,

    PromotionsListingScreen,
    CreatePromotion1Screen,
    CreatePromotion2Screen,
    CreatePromotion3Screen,
    CreatePromotion4Screen,

    DiscountsListingScreen,
    CreateDiscount1Screen,
    CreateDiscount2Screen,
    CreateDiscount3Screen,

    AdminHomeScreen,
    AgentsListingScreens,
    CreateAgentScreen,
    AgentPortfolioScreen,
    ChooseAgentsScreens,

    PaymentsScreen,
    CreatePaymentScreen,

    SalesListingScreen,
    CreateSaleScreen,

    ProductsListingScreen,
    CreateProductScreen,

    CreatePurchaseScreen,
    PurchaseListingScreen,

    BankAccountsListingScreen,
    CreateBankAccountScreen,

    AnimationScreen
} 
from '../Screens';


const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.FadeOutToBottomAndroidSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => {
      console.log('ths is current');
      console.log(current);
      console.log('this is next');
      console.log(next);
      console.log('this is layouts');
      console.log(layouts);
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
}


const Stack = createStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            
            <Stack.Screen name="Home" title="Home" component={GetStartedScreen}
                options={{
                    headerShown: false,
                    cardOverlayEnabled: true,
                    headerTitle:'',

                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    }
                }} 
            />
            <Stack.Screen name="AnimationScreen" title="AnimationScreen" component={AnimationScreen}
                options={{
                    headerShown: true,
                    cardOverlayEnabled: true,
                    headerTitle:'',

                    headerStyle:{
                        backgroundColor:'black'
                    }
                }} 
            />
            <Stack.Screen name="LogInScreen" title="Smart Sales" component={LogInScreen}
                options={{
                    headerShown: false,
                    headerTitle:'',
                    
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition
                }} 
            />
            <Stack.Screen name="AdminHomeScreen" title="Smart Sales" component={AdminHomeScreen}
                options={{
                    headerShown: true,
                    headerTitle:'Smart Sales',
                    headerLeft: null,
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    }
                    ,
                    ...MyTransition
                }} 
            />
            
            <Stack.Screen name="BankAccountsListingScreen" title="Bank Account" component={BankAccountsListingScreen}
                options={{
                    headerShown: true,
                    headerTitle:'Bank Account',
                    
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition

                }} 
            />
            <Stack.Screen name="CreateBankAccountScreen" title="Create Bank Account" component={CreateBankAccountScreen}
                options={{
                    headerShown: true,
                    headerTitle:'Create Bank Account',
                    
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition

                }} 
            />

            <Stack.Screen name="CreateProductScreen" title="Create Product" component={CreateProductScreen}
                options={{
                    headerShown: true,
                    headerTitle:'Create Product',
                    
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition

                }} 
            />
            <Stack.Screen name="ProductsListingScreen" title="Products Listing" component={ProductsListingScreen}
                options={{
                    headerShown: true,
                    headerTitle:'Products Listing',
                    
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition
                }} 
            />
            <Stack.Screen name="StockScreen" title="Stock" component={StockScreen}
                options={{
                    headerShown: true,
                    headerTitle:'Stock',
                    
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition
                }} 
            />
            <Stack.Screen name="PromotionsListingScreen" title="Promotions" component={PromotionsListingScreen}
                options={{
                    headerShown: true,
                    headerTitle:'Promotions',
                    
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition
                }} 
            />
            <Stack.Screen name="CreatePromotion1Screen" title="Create Promotion" component={CreatePromotion1Screen}
                options={{
                    headerShown: true,
                    headerTitle:'Create Promotion',
                    
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition
                }} 
            />
            <Stack.Screen name="CreatePromotion2Screen" title="Create Promotion" component={CreatePromotion2Screen}
                options={{
                    headerShown: true,
                    headerTitle:'Create Promotion',
                    
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition
                }} 
            />
            <Stack.Screen name="CreatePromotion3Screen" title="Create Promotion" component={CreatePromotion3Screen}
                options={{
                    headerShown: true,
                    headerTitle:'Create Promotion',
                    
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition
                }} 
            />
            <Stack.Screen name="CreatePromotion4Screen" title="Create Promotion" component={CreatePromotion4Screen}
                options={{
                    headerShown: true,
                    headerTitle:'Create Promotion',
                    
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition
                }} 
            />
            
            <Stack.Screen name="DiscountsListingScreen" title="Discounts" component={DiscountsListingScreen}
                options={{
                    headerShown: true,
                    headerTitle:'Discounts',
                   
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition
                }} 
            />
            <Stack.Screen name="CreateDiscount1Screen" title="Create Discount" component={CreateDiscount1Screen}
                options={{
                    headerShown: true,
                    headerTitle:'Create Discount',
                   
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition
                }} 
            />
            <Stack.Screen name="CreateDiscount2Screen" title="Create Discount" component={CreateDiscount2Screen}
                options={{
                    headerShown: true,
                    headerTitle:'Create Discount',
                   
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition
                }} 
            />
            <Stack.Screen name="CreateDiscount3Screen" title="Create Discount" component={CreateDiscount3Screen}
                options={{
                    headerShown: true,
                    headerTitle:'Create Discount',
                    
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition
                }} 
            />
            
            
            
            
            <Stack.Screen name="AgentsListingScreens" title="Agents" component={AgentsListingScreens}
                options={{
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    headerTitle:'Agents',
                    headerTintColor:'#3E566B',
                    ...MyTransition
                }}
            />
            <Stack.Screen name="CreateAgentScreen" title="Create Agent" component={CreateAgentScreen}
                options={{
                    headerShown: true,
                    headerTitle:'Create Agent',
                    
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition
                }} 
            />
            <Stack.Screen name="AgentPortfolioScreen" title="Agent Portfolio" component={AgentPortfolioScreen}
                options={{
                    headerShown: true,
                    headerTitle:'Agent Portfolio',
                    
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    ...MyTransition
                }} 
            />
            <Stack.Screen name="ChooseAgentsScreens" title="Choose Agent" component={ChooseAgentsScreens}
                options={{
                    headerShown: true,
                    headerTitle:'Chooe Agent',
                    
                    headerBackTitle:'Back',
                    headerTintColor:'#3E566B',
                    headerStyle:{
                        backgroundColor:'#D5DCE6',
                    },
                    ...MyTransition
                }} 
            />

            <Stack.Screen name="PaymentsScreen" title="Payments" component={PaymentsScreen}
                options={{
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    headerTitle:'Payments',
                    headerTintColor:'#3E566B',
                    ...MyTransition
                }}
            />
            <Stack.Screen name="CreatePaymentScreen" title="Create Payment" component={CreatePaymentScreen}
                options={{
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    headerTitle:'Create Payment',
                    headerTintColor:'#3E566B',
                    ...MyTransition
                }}
            />
            <Stack.Screen name="SalesListingScreen" title="Sales" component={SalesListingScreen}
                options={{
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    headerTitle:'Sales',
                    headerTintColor:'#3E566B',
                    ...MyTransition
                }}
            />
            
            <Stack.Screen name="CreateSaleScreen" title="Create Sale" component={CreateSaleScreen}
                options={{
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    headerTitle:'Create Sale',
                    headerTintColor:'#3E566B',
                    ...MyTransition
                }}
            />
            <Stack.Screen name="CreatePurchaseScreen" title="Purchase Order Transaction" component={CreatePurchaseScreen}
                options={{
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    headerTitle:'Create Purchase Order',
                    headerTintColor:'#3E566B',
                    ...MyTransition
                }}
            />
            <Stack.Screen name="PurchaseListingScreen" title="Create Purchase Order Transaction" component={PurchaseListingScreen}
                options={{
                    headerStyle:{
                        backgroundColor:'#D5DCE6'
                    },
                    headerTitle:'Purchase Order',
                    headerTintColor:'#3E566B',
                    ...MyTransition
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  
  );
}