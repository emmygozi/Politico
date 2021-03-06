class Validators {
  static hasWhiteSpace(myInput) {
    return !myInput || myInput.length === 0 || /^\s*$/.test(myInput);
  }

  static emailValidator(email) {
    // eslint-disable-next-line no-useless-escape
    const emailCheck = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailCheck.test(String(email).toLowerCase());
  }

  static validateInputLength(myInput, baseLength, maxLength) {
    if (myInput.length > maxLength) {
      return false;
    } if (myInput.length < baseLength) {
      return false;
    }
    return true;
  }
}

export default Validators;
