import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('id_token');

  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Token ${token.replace(/"/g, '')}`, // Ensure the format matches what the server expects
      },
    });

    return next(clonedRequest);
  }

  return next(req);
};
