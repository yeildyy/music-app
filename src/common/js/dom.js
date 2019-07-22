//先去判断是否有class，这个方法可能被外部调用，所以也需要export出去
export function hasClass(el, className) {
  //如何判断是否已经有了样式，使用正则
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  //如果已经有了className就直接返回回去
  if (hasClass(el, className)) {
    return
  }
//先用split把className拆开
  let newClass = el.className.split(' ')
  newClass.push(className)
  //先把一个数组拆开出来然后在push进去，最后在用join添加进去
  el.className = newClass.join(' ')
}

export function getData(el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}

let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
