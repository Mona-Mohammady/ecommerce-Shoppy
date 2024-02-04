import { CanActivateFn, Router } from '@angular/router';


export const authgGuard: CanActivateFn = (route, state) => {
  


  if(localStorage.getItem('userToken') !== null){
    return true;
  } else {
    return false;}
};
