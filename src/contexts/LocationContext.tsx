import React,{createContext} from 'react';
import useLocation from './hooks/useLocation';


interface Props {
    children: JSX.Element[] | JSX.Element
  }
interface Location {
    latitude: number;
    longitude: number;
}
  
const Context = createContext({latitude: 0, longitude:0});
export default function LocationContext ({children}: Props) {
    
    const {
        latitude, longitude
      }  = useLocation() as Location;
    

    return (
      <Context.Provider value={{ latitude, longitude }}>
        {children}
      </Context.Provider>
  
    )
} ;

export { Context, LocationContext };