const splice = (input, start, deleteCount = input.length - start, ...items) =>
  input.slice(0, start).concat(...items, input.slice(start + deleteCount));

export default splice;
