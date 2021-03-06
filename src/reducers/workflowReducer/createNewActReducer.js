import{WIZARD_PAGE_ADD, SET_CONTAINER_LINE_ADD, LIST_WORKFLOWBY_SUBJECT, LIST_EMAIL_ADD, LIST_ADD_TASK_NEW, ADD_NEW_ACTIVITY, RES_DETAILS} from '../../actions/types'

const initialState={
    wizardPage:'newActivityWizard',
    containerLine: true,
    listWorflowbySub: [],
    listEmailObj:[],
    addTask:[],
    newActObj:[],
    resAct:[],
   
}

export default function(state = initialState, action){
    switch(action.type){ 
        case WIZARD_PAGE_ADD:
        return {
            ...state,
            wizardPage:action.payload,
        }

        case SET_CONTAINER_LINE_ADD:
        return { 
            ...state,
            containerLine:action.payload,
        }         

        case LIST_WORKFLOWBY_SUBJECT:
        return {
            ...state,
            listWorflowbySub:action.payload
        } 
        case LIST_EMAIL_ADD:
        return {
            ...state,
            listEmailObj:action.payload
        }
        case LIST_ADD_TASK_NEW:
        return {
            ...state,
            addTask:action.payload
        }
        case ADD_NEW_ACTIVITY:
        return {
            ...state,
            newActObj:action.payload
        }

        case RES_DETAILS:
        return {
            ...state,
            resAct:action.payload
        }
        default:
        return state
    }
}
