import {ToastOptions, toast} from 'react-toastify';

export class ToastService{
    defaultToastOptions : ToastOptions= {
        theme: 'dark',
        position : 'bottom-right'
    }

    showSuccessMessage(message : string, options : ToastOptions = this.defaultToastOptions ) {
        toast.success(message, options);
    }

    showErrorMessage(message : string, options : ToastOptions = this.defaultToastOptions ) {
        toast.error(message, options);
    }
}