const capWords = function () {
  const context = this;
  const argumentType = typeof context;
  if(argumentType !== 'string') {
    throw new Error('capWords 参数类型要求字符串!')
  }else {
    const head = context[0].toUpperCase();
    const body = context.slice(1)
    return head + body
  }
}

export default capWords;