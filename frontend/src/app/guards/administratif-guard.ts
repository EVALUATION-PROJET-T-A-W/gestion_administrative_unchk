import { CanActivateFn } from '@angular/router';

export const administratifGuard: CanActivateFn = (route, state) => {
  return true;
};
