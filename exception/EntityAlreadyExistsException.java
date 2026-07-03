package bouda.med.company.exception;

public class EntityAlreadyExistsException extends BusinessException {
    public EntityAlreadyExistsException(String message) {
        super(message);
    }
}
