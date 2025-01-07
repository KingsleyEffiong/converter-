import Swal from 'sweetalert2'
import { useProvider } from '../component/PostProvider';
function Modal() {
    const { dispatch, errorMessage, successMessage } = useProvider();
    if (errorMessage !== null) {
        Swal.fire({
            icon: "error",
            title: "Oops!",
            text: errorMessage,
            draggable: true,
        }).then(() => dispatch({ type: 'errorMessage', error: null }))
    }
    if (successMessage !== null) {
        Swal.fire({
            title: "Drag me!",
            icon: "success",
            text: successMessage,
            draggable: true
        })
    }

    return null

}

export default Modal