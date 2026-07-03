package bouda.med.company.exception;

public class InvalidTokenException extends SecurityException {
    public InvalidTokenException() {
        super("Token invalide ou expiré");
    }
}
