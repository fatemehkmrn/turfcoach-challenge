import React  from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { AddActicity, ToggleModal, SaveEdittedactivity , EditActivity} from '../../redux/actions';
import ActivityModal from './activityModal/activity-modal';
import ActivitiesList from './activitiesList/activities-list';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import { IActivity, IState } from '../../types/types';
import s from './activities.module.css';

const Activities=()=>{
    const {isModalOpen , selectedRow }=useSelector((state : {activities: IState})=>state.activities)
    const dispatch=useDispatch()

    const onSubmit=(activity: IActivity)=>{
        if(selectedRow as IActivity){
            dispatch(SaveEdittedactivity(activity, selectedRow?.id as number));
            dispatch(EditActivity(0))
        }else{
            dispatch(AddActicity(activity))
        }
        }
    
   return( <Box className={s.activities}>
         <div>Click to add a new activity</div>
         <ControlPointRoundedIcon onClick={()=>dispatch(ToggleModal(true))}/>
         <ActivitiesList/>
        <ActivityModal  isOpen={isModalOpen} handleClose={()=>dispatch(ToggleModal(false))} handleActivitySubmit={onSubmit}/>
    </Box>)
}

export default Activities