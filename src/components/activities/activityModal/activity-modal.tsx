import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Modal, Box, Typography } from '@mui/material';
import DatePicker from 'react-datepicker';
import { EditActivity } from '../../../redux/actions';
import { pitchTimingController } from '../../../utilities/pitchTimingController';
import { ACTIVITY_TYPES, TIMES, TASK_ASSIGNEES, PITCHES } from '../../../constants/form-options';
import Select from '../select/select';
import 'react-datepicker/dist/react-datepicker.css';
import s from './activity-modal.module.css';
import { IActivity, IActivityModalProps, IState, IDataGridActivity, ISelectProps } from '../../../types/types';

const ActivityModal = ({ isOpen, handleClose, handleActivitySubmit }: IActivityModalProps) => {
	const dispatch = useDispatch();
	const [ date, setDate ] = useState<Date>();
	const [ isPitchOccupied, setIsPitchOccupied ] = useState(false);
	const { register, handleSubmit, control, setValue, reset, formState: { errors } } = useForm();
	const { selectedRow, list } = useSelector<{ activities: IState }, IState>((state) => state.activities);

	useEffect(
		() => {
			if (selectedRow) {
				setValue('assignee', selectedRow.assignee);
				setValue('type', selectedRow.type);
				setValue('time', selectedRow.time);
				setValue('pitch', selectedRow.pitch);
				setDate(selectedRow.date);
				setValue('date', selectedRow.date);
			}
		},
		[ selectedRow, setValue ]
	);

	const onSubmitData = (data: IDataGridActivity): void => {
    console.log('data',data)
		const info: IDataGridActivity = selectedRow ? { ...selectedRow, ...data } : data;
		const isSelectedPitchOccupied = pitchTimingController(list, info, Boolean(!selectedRow));
		setIsPitchOccupied(isSelectedPitchOccupied);
		if (!isSelectedPitchOccupied) {
			handleActivitySubmit(data);
			reset();
			handleClose();
			setDate(undefined);
		}
	};

	const handleCancel = () => {
		if (!selectedRow) {
			reset();
			setDate(undefined);
		}
		dispatch(EditActivity(0));
		handleClose();
	};

	const handleChange = (dateChange: Date) => {
		setValue('date', dateChange, {
			shouldDirty: true
		});
		setDate(dateChange);
	};
  // const Select = React.forwardRef(({ onChange, name, label, options } : ISelectProps, ref) => (
  //   <div className={s.select}>
  //     <label>{label}</label>
  //     <select name={name} ref={ref} onChange={onChange} className={s['select-box']}>
  //     <option value="">Select your option</option>
  //       {options?.map(item=><option value={item} key={item}>{item}</option>)}
  //     </select>
  //   </div>
  // ));

  // Select.displayName = 'Select'

console.log(errors)
	return (
		<Modal open={isOpen} aria-labelledby="modal-modal-title">
			<Box className={s.modal}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Fill the fields to add a new activity!
				</Typography>
				<form onSubmit={handleSubmit(onSubmitData as SubmitHandler<FieldValues>)}>
					<Select
						options={ACTIVITY_TYPES}
						label="Type"
						{...register('type', {
							required: 'All fields are required.'
						})}
					/>
					<Select options={TASK_ASSIGNEES} label="Assignee" {...register('assignee', { required: true })} />
					<Select options={PITCHES} label="Pitch" {...register('pitch', { required: true })} />
					<Select options={TIMES} label="Time" {...register('time', { required: true })} />
					<label className={s.label}>Date</label>
					<Controller
						rules={{ required: true }}
						name="date"
						control={control}
						render={() => (
							<DatePicker
								selected={date}
								placeholderText="Select date"
								onChange={handleChange}
								minDate={new Date()}
							/>
						)}
					/>
					{!!Object.keys(errors).length && <div className={s.error}>All fields are required!</div>}
					{isPitchOccupied && (
						<div className={s.error}>
							This pitch is under activity at your selected time. please change the time.
						</div>
					)}
					<button className={s['submit-btn']} type="submit">
						Save!
					</button>
					<button className={s['cancel-btn']} onClick={handleCancel}>
						Cancel!
					</button>
				</form>
			</Box>
		</Modal>
	);
};

export default ActivityModal;
