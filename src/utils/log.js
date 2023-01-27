export class Logger {
  constructor(prefix = '') {
    this.prefix = `[${prefix}]`;
  }

  log(...args) {
    console.log(this.prefix, ...args);
  }

  info(...args) {
    console.info(this.prefix, ...args);
  }

  error(...args) {
    console.error(this.prefix, ...args)
  }

  warn(...args) {
    console.warn(this.prefix, ...args)
  }

}


