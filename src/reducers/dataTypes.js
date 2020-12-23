import { DataTypes } from '../actions'

const dataTypes = (state = DataTypes.TOTAL_CONFIRMED, action) => {
  switch (action.type) {
    case 'TOTAL_CONFIRMED':
        return action.typeData
    case 'TOTAL_DEATH':
        return action.typeData
    case 'TOTAL_RECOVERED':
        return action.typeData
    case 'NEW_CONFIRMED':
        return action.typeData
    case 'NEW_DEATH':
        return action.typeData
    case 'NEW_RECOVERED':
        return action.typeData
    case 'TOTAL_POPULATION_COUNFIRM':
        return action.typeData
    case 'TOTAL_POPULATION_DEATH':
        return action.typeData
    case 'TOTAL_POPULATION_RECOVERED':
        return action.typeData
    case 'NEW_POPULATION_CONFIRMED':
        return action.typeData
    case 'NEW_POPULATION_DEATH':
        return action.typeData
    case 'NEW_POPULATION_RECOVERED':
        return action.typeData
    default:
      return state
  }
}

export default dataTypes;