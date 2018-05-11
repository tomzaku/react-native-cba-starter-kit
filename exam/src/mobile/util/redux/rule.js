
const getRuleByGroup = (group) => {
  switch (group) {
    case 'FULL': {
      return [
        'UPDATE_ALL',
        'UPDATE_MORE',
        'UDPATE_SINGLE',
        'UPDATE_FETCHING',
        'UPDATE_RESPONSE_STATUS',
        'UPDATE_ALERT',
      ]
    }
    //TODO: Add more group to filter action
    default: return []
  }
}

export const getRule = (options) => {
  // Check if options is object
  if (typeof options === 'object') {
    const { group = 'FULL', rule } = options;
    if (Array.isArray(rule)) return rule
    return getRuleByGroup(group)
  }
  // if options is array will be rule
  if (Array.isArray(options)) return options
  
  // If string is will return a group
  if (typeof options === 'string') {
    return getRuleByGroup(options)
  }
}