//这样命名的方式是不用为每个请求都去写这个参数
export const commonParams={
    g_tk:5381,
    inCharset:'utf-8',
    outCharset:'utf-8',
    notice:0,
    format:'jsonp'
}
export const options={
    param:'jsonpCallback'
}
//为了语义化更强，在这里配置一个常量
export const ERR_OK=0