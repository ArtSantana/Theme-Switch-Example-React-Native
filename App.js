import React from "react";
import Routes from "./src/routes";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./src/store";


//  Configure your redux and redux-persist in order to use this setup

// export default function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <Routes />
//       </PersistGate>
//     </Provider>
//   );
// } 


export default function App() {
  return (
    <Routes />
  )
}
