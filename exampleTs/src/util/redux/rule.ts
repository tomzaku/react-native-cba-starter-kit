const getRuleByGroup = (group = 'FULL') => {
  switch (group) {
	case 'FULL': {
		return [
		'GET_ALL',
		'GET_MORE',
		'UDPATE_SINGLE',
		'UPDATE_FETCHING',
		'UPDATE_RESPONSE_STATUS',
		'UPDATE_ALERT',
		'ADD_MORE',
		'ADD_MORE_LOCAL',
		'ADD_MORE_SERVER',
		'REMOVE_MORE',
		'REMOVE_MORE_LOCAL',
		'REMOVE_MORE_SERVER',
		'UPDATE_PAGE',
		'UPDATE_SINGLE',
		'SEARCH',
		]
	}
	// TODO: Add more group to filter action
	default: return []
  }
}


export const getRule = (actionType?: string[], group?: string) => {
  if (actionType) {
	return actionType
  }
  return getRuleByGroup(group)
}
