package bouda.med.company.exception;

public class OutOfRangeException extends ValidationException {
    public OutOfRangeException(String fieldName, String min, String max) {
        super("Le champ " + fieldName + " doit être entre " + min + " et " + max);
    }
}
