import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';

@Injectable()
export class ErrorHandler {
    handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            alert(`Client Side Error ${errorResponse.error.message}`);
        } else {
            alert(`Server Side Error ${errorResponse}`);
        }

        return throwError(errorResponse);
    }
}
