package bouda.med.company.exception;

public class AccessDeniedException extends SecurityException {
    public AccessDeniedException() {
        super("Accès refusé");
    }
    
    public AccessDeniedException(String message) {
        super(message);
    }
}
