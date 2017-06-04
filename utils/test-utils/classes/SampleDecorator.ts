export function SampleDecorator():Function {
  return function(target:any):Function {
    return target;
  }
}