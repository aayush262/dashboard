
import { toast } from 'react-toastify';

const showErr = msg => toast.error(msg);

export const notify = {
    showSuccess: (msg)=>{
        toast.success(msg);
    },
    showWarning: msg => toast.warn(msg),
    showInfo: msg=> toast.info(msg),
    handleErr: error=>{

       let defaultMsg = 'something went wrong';
        //error parse
        if(error&&error.response){
            defaultMsg = error.response.data.msg;
        }
        showErr(defaultMsg);
        
    }
}