const emailValidation = (email) => {
  if (!email) return "メールアドレスを入力してください";

  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!regex.test(email)) return "正しい形式でメールアドレスを入力してください";

  return "";
};

const passwordValidation = (password) => {
  if (!password) return "パスワードを入力してください";
  if (password.length < 8) return "パスワードは8文字以上で入力してください";

  return "";
};

class Validation {
  static formValidate = (type, value) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case "email":
        return emailValidation(value);
      case "password":
        return passwordValidation(value);
    }
  };
}

export default Validation;
