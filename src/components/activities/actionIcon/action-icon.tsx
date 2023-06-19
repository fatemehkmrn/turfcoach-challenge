import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteActivity, EditActivity, ToggleModal } from '../../../redux/actions';
import { IActionIconProps } from '../../../types/types';
import { FormControlLabel, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ACTION_TYPES } from '../../../constants/form-options';

const ActionIcon = ({ actionType, index }: IActionIconProps) => {
	const dispatch = useDispatch();
	const handleClick = () => {
		if (actionType === ACTION_TYPES.delete) {
			dispatch(DeleteActivity(index));
		} else {
			dispatch(EditActivity(index));
			dispatch(ToggleModal(true));
		}
	};

	return (
		<FormControlLabel
			label=""
			control={
				<IconButton color="secondary" onClick={handleClick}>
					{actionType === ACTION_TYPES.edit ? <EditIcon /> : <DeleteIcon />}
				</IconButton>
			}
		/>
	);
};

export default ActionIcon;
