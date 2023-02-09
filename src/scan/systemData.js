const checkDatePrototype = () => {
  if (
    !Date.prototype.setDate
      .toString()
      .includes('function setDate() { [native code] }') &&
    !Date.prototype.setDate
      .toString()
      .includes('function setDate() {\n    [native code]\n}')
  ) {
    return true
  }
  return false
}

const checkIntlConstructor = () => {
  if (
    !Object.getPrototypeOf(Intl.DateTimeFormat.prototype)
      .constructor.toString()
      .includes('Object')
  ) {
    return true
  }
  return false
}

const checkIntlPrototype = () => {
  if (
    !Intl.DateTimeFormat.prototype.resolvedOptions
      .toString()
      .includes('function resolvedOptions() { [native code] }') &&
    !Intl.DateTimeFormat.prototype.resolvedOptions
      .toString()
      .includes('function resolvedOptions() {\n    [native code]\n}')
  ) {
    return true
  }
  return false
}

const checkNavigatorProperties = (key) => {
  if (Object.getOwnPropertyDescriptor(navigator, key) !== undefined) {
    return true
  }
  return false
}

const checkNavigatorValue = (key) => {
  if (
    typeof Navigator !== 'undefined' &&
    Object.getOwnPropertyDescriptor(Navigator.prototype, key).value !==
      undefined
  ) {
    return true
  }
  return false
}

const checkNavigatorPrototype = (key) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const check = Navigator.prototype[key]
    return true
  } catch (err) {
    return false
  }
}

const getNavigatorValue = (type) =>
  !!(
    checkNavigatorProperties(type) ||
    checkNavigatorValue(type) ||
    checkNavigatorPrototype(type)
  )

const systemData = {
  dateLocale: {
    value: new Date().toLocaleString(),
    tampered: checkDatePrototype(),
  },
  dateString: {
    value: new Date().toString(),
    tampered: checkDatePrototype(),
  },
  // language: {
  //   title: '',
  //   code: '',
  //   value: navigator.language,
  //   tampered: getNavigatorValue('language'),
  // },
  // languages: {
  //   title: '',
  //   code: '',
  //   value: navigator.languages,
  //   tampered: getNavigatorValue('languages'),
  // },
  locale: {
    value: Intl.DateTimeFormat().resolvedOptions().locale,
    tampered: !!(checkIntlPrototype() || checkIntlConstructor()),
  },
  timezone: {
    value: Intl.DateTimeFormat().resolvedOptions().timeZone,
    tampered: !!(checkIntlPrototype() || checkIntlConstructor()),
  },
  timezoneOffset: {
    value: new Date().getTimezoneOffset(),
    tampered: checkDatePrototype(),
  },
  userAgent: {
    value: navigator.userAgent,
    tampered: getNavigatorValue('userAgent'),
  },
  platform: {
    value: navigator.platform,
    tampered: getNavigatorValue('platform'),
  },
  appVersion: {
    value: navigator.appVersion,
    tampered: getNavigatorValue('appVersion'),
  },
}

export default systemData
