import { NavigationAction } from "@react-navigation/routers";


let navigator


export const setNavigator = nav =>{
    navigator = nav
}


export const navigate = (routName,params) =>{
navigator.dispatch(
NavigationAction.navigate({routName,params})


)

}