import { IDataGridActivity  } from "../types/types";

export const pitchTimingController=(activitiesList : IDataGridActivity [], activity: IDataGridActivity ,isNew: boolean)=>{
    const checkList= isNew ? activitiesList : activitiesList?.filter((item)=>item.id!==activity.id)
    for (let i=0; i<checkList?.length; i++){
        if(checkList[i].pitch===activity.pitch && checkList[i].date.toISOString().slice(0, 10)===activity.date.toISOString().slice(0, 10) 
        && checkList[i].time===activity.time){
            return true;
        }
    }
    return false;
}