function loop(value, test, update, body) {
  while (test(value)) {
    body(value)
    value = update(value)
  }
}

loop(0, x => x < 10, x => ++x, console.log);
