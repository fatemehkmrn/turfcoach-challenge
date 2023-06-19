import { ADD_ACTIVITY, DELETE_ACTIVITY, TOGGLE_MODAL, EDIT_ACTIVITY, SAVE_EDITTED_ACTIVITY } from './action-types';

export const AddActicity = (activity: any) => {
	return {
		type: ADD_ACTIVITY,
		activity
	};
};

export const DeleteActivity = (id: number) => {
	return {
		type: DELETE_ACTIVITY,
		id
	};
};

export const ToggleModal = (open: boolean) => {
	return {
		type: TOGGLE_MODAL,
		open
	};
};

export const EditActivity = (id: number) => {
	return {
		type: EDIT_ACTIVITY,
		id
	};
};

export const SaveEdittedactivity = (activity: any, id: number) => {
	return {
		type: SAVE_EDITTED_ACTIVITY,
		activity,
		id
	};
};
