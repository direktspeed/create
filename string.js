exports.getIsFunc = function getIsFunc (ctor) {
  return function isString (v) {
    return typeof v == 'string'
      || Object.prototype.toString.call(v) == '[object String]'
  }
}

exports.newInstance = function newInstance (ctor, argc, argv) {
  if (argc === 0)
    return new ctor()
  else
    return new ctor(argv[0])
}
