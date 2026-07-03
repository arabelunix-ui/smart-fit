package bouda.med.company.exception;

public class RequiredFieldException extends ValidationException {
    public RequiredFieldException(String fieldName) {
        super("Le champ " + fieldName + " est obligatoire");
    }
}
