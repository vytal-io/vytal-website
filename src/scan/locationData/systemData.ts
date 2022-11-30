const checkDatePrototype = () => {
  if (!Date.prototype.setDate.toString().includes('[native code]')) {
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
      .includes('[native code]')
  ) {
    return true
  }
  return false
}

const checkNavigatorProperties = (key: PropertyKey) => {
  if (Object.getOwnPropertyDescriptor(navigator, key) !== undefined) {
    return true
  }
  return false
}

const checkNavigatorValue = (key: PropertyKey) => {
  if (
    typeof Navigator !== 'undefined' &&
    Object.getOwnPropertyDescriptor(Navigator.prototype, key)?.value !==
      undefined
  ) {
    return true
  }
  return false
}

const checkNavigatorPrototype = (key: any) => {
  try {
    // @ts-ignore
    const check = Navigator.prototype[key]
    return true
  } catch (err) {
    return false
  }
}

const getNavigatorValue = (type: string) =>
  !!(
    checkNavigatorProperties(type) ||
    checkNavigatorValue(type) ||
    checkNavigatorPrototype(type)
  )

const systemData: any = {
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
