package bouda.med.company.exception;

public class AuthenticationFailedException extends SecurityException {
    public AuthenticationFailedException() {
        super("Authentification échouée");
    }
}
