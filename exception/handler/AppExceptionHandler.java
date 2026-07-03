package bouda.med.company.exception.handler;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import bouda.med.company.exception.*;
import bouda.med.company.exception.SecurityException;
import bouda.med.company.shared.ErrorMessage;

@RestControllerAdvice
public class AppExceptionHandler {

    @ExceptionHandler(value = {EntityNotFoundException.class})
    public ResponseEntity<ErrorMessage> entityNotFoundException(EntityNotFoundException exception) {
        return buildErrorResponse(exception.getMessage(), HttpStatus.NOT_FOUND, 404);
    }

     @ExceptionHandler(value = {UnauthorizedOperationException.class})
    public ResponseEntity<ErrorMessage> unauthorizedOperationException(UnauthorizedOperationException exception) {
        return buildErrorResponse(exception.getMessage(), HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS, 401);
    }


    @ExceptionHandler(value = {EntityAlreadyExistsException.class})
    public ResponseEntity<ErrorMessage> entityAlreadyExistsException(EntityAlreadyExistsException ex) {
        return buildErrorResponse(ex.getMessage(), HttpStatus.CONFLICT, 409);
    }

    @ExceptionHandler(value = {TechnicalException.class, InternalServerError.class})
    public ResponseEntity<ErrorMessage> technicalException(RuntimeException ex) {
        return buildErrorResponse(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, 500);
    }

    @ExceptionHandler(value = {ValidationException.class})
    public ResponseEntity<ErrorMessage> validationException(ValidationException ex) {
        return buildErrorResponse(ex.getMessage(), HttpStatus.BAD_REQUEST, 400);
    }

    @ExceptionHandler(value = {SecurityException.class, AccessDeniedException.class})
    public ResponseEntity<ErrorMessage> securityException(SecurityException ex) {
        return buildErrorResponse(ex.getMessage(), HttpStatus.FORBIDDEN, 403);
    }

    @ExceptionHandler(value = {AuthenticationFailedException.class})
    public ResponseEntity<ErrorMessage> authenticationFailedException(AuthenticationFailedException ex) {
        return buildErrorResponse(ex.getMessage(), HttpStatus.UNAUTHORIZED, 401);
    }

    private ResponseEntity<ErrorMessage> buildErrorResponse(String message, HttpStatus status, int code) {
        ErrorMessage errorMessage = ErrorMessage.builder()
                .message(message)
                .timestamp(new Date())
                .code(code)
                .build();
        return new ResponseEntity<>(errorMessage, status);
    }
}
