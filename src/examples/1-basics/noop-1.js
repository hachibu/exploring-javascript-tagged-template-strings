function noop(strings, ...values) {
  console.log({ strings, values });
}

noop`Hello ${'World'}!`
