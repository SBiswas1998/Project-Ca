import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

iziToast.settings({
    timeout: 2000,
    icon: "material-icons",
    transitionIn: "flipInX",
    transitionOut: "flipOutX"
});

const toast = {
    error: (message, title = "Error") => {
        if (!message || typeof message !== 'string') {
            console.error('Invalid message passed to toast.error:', message);
            message = 'An error occurred';
        }

        if (!title || typeof title !== 'string') {
            console.error('Invalid title passed to toast.error:', title);
            title = 'Error';
        }

        return iziToast.error({
            title: title,
            message: message,
            position: "topRight",
        });
    },
    success: (message, title = "Success") => {
        if (!message || typeof message !== 'string') {
            console.error('Invalid message passed to toast.success:', message);
            message = 'Operation was successful';
        }

        if (!title || typeof title !== 'string') {
            console.error('Invalid title passed to toast.success:', title);
            title = 'Success';
        }

        return iziToast.success({
            title: title,
            message: message,
            position: "topRight"
        });
    }
};

export default toast;
