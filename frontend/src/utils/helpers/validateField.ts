
export default (key: any, touched: any, errors: any) => {
    console.log(key, touched, errors)
    if (touched[key]) {
      if (errors[key]) {
        return "error";
      } else {
        return "success";
      }
    } else {
      return "";
    }
  };