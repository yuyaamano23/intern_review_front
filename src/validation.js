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

const countValidation = (text, MaxLength) => {
  if (!text) return "入力してください";
  if(text.length >= MaxLength) return MaxLength + "文字以内で入力してください" ;

  return "";
}

class Validation {
  static formValidate = (type, value, MaxLength) => {
    // eslint-disable-next-line default-case

    console.log(type,value,MaxLength);
    switch (type) {
      case "email":
        return emailValidation(value);
      case "password":
        return passwordValidation(value);
      case "companyName":
      case "jobContent":
      case "Impressions":
        return countValidation(value, MaxLength);
      default:
        break;
    }
  };
}

export default Validation;
