import { TransitionSpecs, HeaderStyleInterpolators,createStackNavigator } from '@react-navigation/stack';
const MyTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.FadeOutToBottomAndroidSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({ current, next, layouts }) => {
       
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
  
  const CardStyleShareElement = {
      defaultNavigationOptions:{
          cardStyleInterpolator:({current:{progress}})=>{
              return {
                  cardStyle:{opacity:progress}
              }
          },
          cardStyle: {
              backgroundColor:'transparent'
          }
      }
      
     
    }
    const forFade = ({ current, next }) => {
      const opacity = Animated.add(
        current.progress,
        next ? next.progress : 0
      ).interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
      });
    
      return {
        leftButtonStyle: { opacity },
        rightButtonStyle: { opacity },
        titleStyle: { opacity },
        backgroundStyle: { opacity },
      };
    };

    const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
      const progress = Animated.add(
        current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        }),
        next
          ? next.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            })
          : 0
      );
    
      return {
        cardStyle: {
          transform: [
            {
              translateX: Animated.multiply(
                progress.interpolate({
                  inputRange: [0, 1, 2],
                  outputRange: [
                    screen.width, // Focused, but offscreen in the beginning
                    0, // Fully focused
                    screen.width * -0.3, // Fully unfocused
                  ],
                  extrapolate: 'clamp',
                }),
                inverted
              ),
            },
          ],
        },
      };
    };
export {
    MyTransition,
    CardStyleShareElement,
    forFade,
    forSlide,
};