package bouda.med.company.exception;

public class InvalidFormatException extends ValidationException {
    public InvalidFormatException(String fieldName, String format) {
        super("Le champ " + fieldName + " doit être au format " + format);
    }
}
