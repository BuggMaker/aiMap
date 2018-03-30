/**
 * 异步请求
 * @param {String} url : 请求路径
 * @param {Obje} options : 请求配置信息,如下
 * method(请求方法):'GET' || 'POST'
 * hedaers(请求头): new Headers() || {key,val}
 * credentials(强制带Cookie):'omit' || 'include'
 * data(参数): {key,val} || [[key,val]]
 */
export function myFetch(url, options) {
  let init = {};
  init.method = options.method || "GET";
  init.headers = options.headers || {};
  init.credentials = options.credentials || "omit";

  // 跨域?
  // init.mode = options.mode || "cors";

  if (init.method.toUpperCase() === "GET" && options.data) {
    // 可以直接通过二维Array或者Object实例得到查询部分的URL
    // let paramsAry = Object.keys(options.data).map(key => {
    //   return [key, options.data[key]];
    // });
    url += `?${new URLSearchParams(options.data).toString()}`;
  } else if (init.method.toUpperCase() === "POST") {
    init.body = options.data || {};
  }
  // 请求的返回值类型
  const responseType = options.responseType || "";
  return fetch(url, init).then(res => {
    if (res.ok) {
      // 根据返回类型 返回不同的数据形式
      switch (responseType) {
        case "blob":
          return res.blob();
          break;
        case "json":
          return res.json();
          break;
        case "formData":
          return res.formData();
          break;
        case "arrayBuffer":
          return res.arrayBuffer();
        case "":
        case "text":
          return res.text();
      }
    }
  });
}
