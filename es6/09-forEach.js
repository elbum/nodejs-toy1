var s = "?banana=10=30&apple=20&orange=30";
// console.log(qs.substr(-2));

function parse1(qs) {
  const str = qs.substr(1);
  const chunks = str.split("&");
  let result = {};
  chunks.forEach(chunk => {
    const parts = chunk.split("=");
    const key = parts[0];
    const val = parts[1];
    result[key] = val;
  });
  return result;
}

function parse2(qs) {
  const str = qs.substr(1);
  const chunks = str.split("&");
  let result = {};
  chunks.forEach(chunk => {
    const [key, val1, val2] = chunk.split("=");
    result[key] = val2;
  });
  return result;
}

function parse3(qs) {
  const str = qs.substr(1);
  const chunks = str.split("&");

  const result = chunks.map(chunk => {
    const [key, val] = chunk.split("=");
    return { key: key, value: val };
  });

  return result;
}

console.log(parse1(s));
console.log(parse2(s));
console.log(parse3(s));
