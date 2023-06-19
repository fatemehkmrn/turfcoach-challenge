import { IState, IAction } from '../../types/types';
import {
	ADD_ACTIVITY,
	DELETE_ACTIVITY,
	TOGGLE_MODAL,
	EDIT_ACTIVITY,
	SAVE_EDITTED_ACTIVITY
} from '../actions/action-types';

const initialState: IState = {
	isModalOpen: false,
	counter: 0,
	list: [],
	selectedRow: null
};

const activities = (state = initialState, action: IAction) => {
	switch (action.type) {
		case TOGGLE_MODAL:
			return {
				...state,
				isModalOpen: action.open
			};
		case ADD_ACTIVITY:
			return {
				...state,
				counter: state.counter + 1,
				list: state.list.concat({ ...action.activity, ...{ id: state.counter + 1 } })
			};
		case DELETE_ACTIVITY:
			return {
				...state,
				list: state.list.filter((item) => item.id !== action.id)
			};

		case EDIT_ACTIVITY:
			return {
				...state,
				selectedRow: state.list.filter((item) => item.id === action.id)[0],
				isModalOpen: action.open
			};
		case SAVE_EDITTED_ACTIVITY:
			return {
				...state,
				list: state.list
					.filter((item) => item.id !== action.id)
					.concat({ ...action.activity, ...{ id: action.id } })
					.sort((a, b) => a.id - b.id)
			};
		default:
			return state;
	}
};

export default activities;
