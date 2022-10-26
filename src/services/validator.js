export class ValidatorService {
  static min(inputValue, min) {
    if (inputValue?.length < min) {
      return `Has to be be at least ${min} characters long`;
    }
  }
  static max(inputValue, max) {
    if (inputValue?.length > max) {
      return `Can't exceed ${max} characters`;
    }
  }
}
