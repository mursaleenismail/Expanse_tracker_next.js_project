
// import { Provider } from "react-redux";
// import { store } from "./store/store"
// import userSlice from "./slices/userSlice";


// export function Providers ({children} :{children:React.ReactNode}) {
//     return <Provider store={store} value={{transactions:state.transactions}}>
//          {children}</Provider>
// }
'use client'
import { Provider } from "react-redux";
import store from "./store/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
