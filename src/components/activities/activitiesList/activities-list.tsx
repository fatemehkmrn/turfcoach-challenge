import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import ActionIcon from '../actionIcon/action-icon';
import { IDataGridActivity, IState } from '../../../types/types';

const columns = [
	{ field: 'type', headerName: 'Activity Type', width: 100 },
	{ field: 'assignee', headerName: 'Assignee', width: 100 },
	{
		field: 'pitch',
		headerName: 'Pitch',
		width: 100
	},
	{ field: 'date', headerName: 'Date', width: 200 },
	{ field: 'time', headerName: 'Time', width: 100 },
	{
		field: 'edit',
		headerName: 'Edit',
		sortable: false,
		width: 100,
		disableClickEventBubbling: true,
		renderCell: (params: { row: IDataGridActivity }) => {
			return (
				<div className="d-flex justify-content-between align-items-center">
					<ActionIcon index={params.row.id} actionType="edit" />
				</div>
			);
		}
	},
	{
		field: 'delete',
		headerName: 'Delete',
		sortable: false,
		width: 100,
		disableClickEventBubbling: true,
		renderCell: (params: { row: IDataGridActivity }) => {
			return (
				<div className="d-flex justify-content-between align-items-center">
					<ActionIcon index={params.row.id} actionType="delete" />
				</div>
			);
		}
	}
];
const ActivitiesList = () => {
	const activities = useSelector<{ activities: IState }, IDataGridActivity[]>((state) => state.activities.list);

	return <DataGrid rows={activities} columns={columns} />;
};

export default ActivitiesList;
