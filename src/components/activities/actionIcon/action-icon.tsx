import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteActivity, EditActivity, ToggleModal } from '../../../redux/actions';
import { IActionIconProps } from '../../../types/types';
import { FormControlLabel, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ActionIcon = ({ actionType, index }: IActionIconProps) => {
	const dispatch = useDispatch();
	const handleClick = () => {
		if (actionType === 'delete') {
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
				<IconButton color="secondary" aria-label="add an alarm" onClick={handleClick}>
					{actionType === 'edit' ? <EditIcon /> : <DeleteIcon />}
				</IconButton>
			}
		/>
	);
};

export default ActionIcon;
