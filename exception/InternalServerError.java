package bouda.med.company.exception;

public class InternalServerError extends TechnicalException {
    public InternalServerError(String message) {
        super(message);
    }
}
