
import { JOB_NAME_VALIDATION } from "../constants/Validations/validations";

export const validateJobName = (job) => {
    const isValid = JOB_NAME_VALIDATION.JOB_NAME_REGEX.test(job);

    if (!isValid) {
        return JOB_NAME_VALIDATION.JOB_NAME_ERROR_MSG;
    }

    return '';
};

export const validateJobNameLength = (value) => {

    if (value< JOB_NAME_VALIDATION.JOB_NAME_MIN_LENGTH || value > JOB_NAME_VALIDATION.JOB_NAME_MAX_LENGTH) {
        return JOB_NAME_VALIDATION.JOB_NAME__ERROR_MSG;
    }

    return '';
};