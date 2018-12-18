import {WIZARD_SELECT,CONTAINER_LINE,ROLE_STORE,STAKEHOLDER_LIST,STAKEHOLDER_VIEW,ITEM_LIST_ANCESTOR,ITEM_LIST_DESCENDANT,STORE_DETAIL,SECURITY_LEVEL,CUSTOM_FIELD} from '../../actions/types'

const initialState = {   
    wizardPage:'basic',
    containerLine: true,
    roleStore:[],
    stkhDetail:[],
    listAncestor:[],
    listDescendant:[],
    storeDetail:[],
    securityLevel:[],     
    customField:[]
}

export default (state = initialState, action) => {
  switch (action.type) {

    case WIZARD_SELECT:
    return { ...state,
        wizardPage:action.payload,
    } 
    case CONTAINER_LINE:
    return { ...state,
        containerLine:action.payload,
    } 
    case ROLE_STORE:
    return { ...state,
        roleStore:action.payload,
    }       
    case STAKEHOLDER_VIEW:
    return {
        ...state,
        stkhDetail:action.payload
    }
    case ITEM_LIST_ANCESTOR:
    return {
        ...state,
        listAncestor:action.payload
    }
    case ITEM_LIST_DESCENDANT:
    return {
        ...state,
        listDescendant:action.payload
    }
    case STORE_DETAIL:
    return {
        ...state,
        storeDetail:action.payload
    }
    case SECURITY_LEVEL:
    return {
        ...state,
        securityLevel:action.payload
    }    
    case CUSTOM_FIELD:
    return {
        ...state,
        customField:action.payload
    }    
    default:
    return state
  }
}
