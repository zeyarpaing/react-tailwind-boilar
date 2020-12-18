const once = fn => {
  let isCalled = false;
  return function(){
    return isCalled ? void 0: (isCalled = true, fn.apply(this, arguments))
  }
}

let payFun = once(() => 'paidsuccess')
console.log(payFun())
console.log(payFun())
console.log(payFun())
console.log(payFun())
console.log(payFun())

