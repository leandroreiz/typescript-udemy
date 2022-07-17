namespace App {
  // User data validation
  export interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }

  export function validate(validatableInput: Validatable) {
    let isValid = true;

    // Is required?
    if (validatableInput.required) {
      isValid =
        isValid && validatableInput.value.toString().trim().length !== 0;
    }

    // Check for min length
    if (
      validatableInput.minLength != null &&
      typeof validatableInput.value === 'string'
    ) {
      isValid =
        isValid && validatableInput.value.length >= validatableInput.minLength;
    }

    // Check for max length
    if (
      validatableInput.maxLength != null &&
      typeof validatableInput.value === 'string'
    ) {
      isValid =
        isValid && validatableInput.value.length <= validatableInput.maxLength;
    }

    // Check for min value
    if (
      validatableInput.min != null &&
      typeof validatableInput.min === 'number'
    ) {
      isValid = isValid && validatableInput.value >= validatableInput.min;
    }

    // Check for max value
    if (
      validatableInput.max != null &&
      typeof validatableInput.max === 'number'
    ) {
      isValid = isValid && validatableInput.value <= validatableInput.max;
    }

    return isValid;
  }
}
