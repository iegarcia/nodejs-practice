class Validator {
  validateNumber(number) {
    let valid = false;
    if (number > 0) {
      valid = true;
    }
    return valid;
  }
  validateDescription(desc) {
    let isNull = true;
    if (desc != null) {
      isNull = false;
    }
    return isNull;
  }
}

module.exports = new Validator();
