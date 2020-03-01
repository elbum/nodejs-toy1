class Promise {
  constructor(fn) {
    const resolve = (...args) => {
      if (typeof this.onDone === "function") {
        this.onDone(...args);
      }
      if (typeof this.onComplete === "function") {
        this.onComplete();
      }
    };
    const reject = (...args) => {
      if (typeof this.onError === "function") {
        this.onError(...args);
      }
      if (typeof this.onComplete === "function") {
        this.onComplete();
      }
    };
    fn(resolve, reject);
  }

  then(onDone, onError) {
    this.onDone = onDone;
    this.onError = onError;
    return this;
  }
  catch(onError) {
    this.onError = onError;
    return this;
  }
  finally(onComplete) {
    this.onComplete = onComplete;
    return this;
  }
}

const work1 = () =>
  new Promise(resolve => {
    setTimeout(() => resolve("작업1완료!"), 100);
  });
const work2 = () =>
  new Promise(resolve => {
    setTimeout(() => resolve("작업2완료!"), 200);
  });
const work3 = () =>
  new Promise(resolve => {
    setTimeout(() => resolve("작업3완료!"), 300);
  });
function urgentWork() {
  console.log("긴급작업!!!");
}
const nextWorkOnDone = msg1 => {
  console.log("done after 100ms:" + msg1);
  return work2();
};

work1()
  .then(nextWorkOnDone)
  .then(msg2 => {
    console.log("done after 200ms:" + msg2);
    return work3();
  })
  .then(msg3 => {
    console.log("done after 600ms" + msg3);
  });
urgentWork();
