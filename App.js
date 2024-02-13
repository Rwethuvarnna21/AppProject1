
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Productapi from './src/components/Productapi'
// import MyApp from './src/App'
// import CarouselApi from './src/screens/CarouselApi'

// import VideoPlayer from './src/screens/VideoPlayer'
// import Nav from './src/Navigation/Nav'
// import Device from './src/screens/Device'


// const App = () => {
//   return (
//     // <Productapi/>
//     // <Nav/>
//     <Device/>
//     // <CarouselApi/>
//     // <VideoPlayer/>
//   )
// }

// export default App

// const styles = StyleSheet.create({})


// // import React from 'react';
// // import { Provider } from 'react-redux';
// // import LoginStore from './src/Redux/LoginStore';
// // import LoginDisplay from './src/Redux/LoginDisplay';
// // // import AddTodo from './src/Redux/AddTodo';

// // const App = () => {
// //   return (
// //     <Provider store={LoginStore}>
// //       <LoginDisplay />
// //       {/* <AddTodo /> */}
// //     </Provider>
// //   );
// // };

// export default App;

// 



// import {ProductProvider} from './src/ContextApi/ProductContext';
// import ScreenContext from './src/ContextApi/ScreenContext';
// import React from 'react';
// import { LoginProvider } from './src/ContextApi/LoginContext';
// import LoginScreen from './src/ContextApi/LoginScreen';



// const App =()=>{
//   return(
//     <LoginProvider>
//       <LoginScreen/>
//     </LoginProvider>
//   )
// }
// export default App

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { ProductProvider } from './src/ContextApi/BothContext'
// import ScreenContext from './src/ContextApi/ScreenContext'

// const App = () => {
//   return (
//    <ProductProvider>
//     <ScreenContext/>
//    </ProductProvider>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

// import React from 'react';
// import { ProductProvider } from './src/ContextApi/BothContext';
// import { CartProvider } from './src/screens/CartProvider';
// import ProductList from './src/screens/ProductList';

// export default function App() {
//   return (
//     <ProductProvider>
//       <CartProvider>
//         <ProductList />
//       </CartProvider>
//     </ProductProvider>
//   );
// }
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PayLogin from './src/SRC/Screen/PayLogin'
import { Navi } from './src/SRC/Navigation/Navi'
import {Navg} from './src/Tsrc/Navigation/Navg'
import Otp from './src/SRC/Screen/Otp'
import Main from './src/SRC/Screen/Main'
import BottomNav from './src/SRC/Navigation/BottomNav'
import Home from './src/Tsrc/Scrn/Home'
const App = () => {
  return (
    
      // <PayLogin/>
      //  <Navi/> 
      <Navg/>
      // <Home/>
      // <Otp/>
      // <Main/>
      // <BottomNav/>

  
  )
}

export default App

const styles = StyleSheet.create({})