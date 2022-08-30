export const catchAsyncErrors: any = () => {
  console.log("hi");

  // return (req:any, res:any, next:any) => {
  //     const routePromise = fn(req:any, res:any, next:any)
  //     if (routePromise.catch) {
  //         routePromise.catch(err => next(err))
  //     }
  // }
};
