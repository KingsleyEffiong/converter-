import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { useProvider } from '../component/PostProvider';
import { CONVERTERS } from '../component/ListOfConverters';

function Modal() {
    const { dispatch, errorMessage, successMessage, convertFormat } = useProvider();

    useEffect(() => {
        if (successMessage !== null) {
            Swal.fire({
                title: "Successfully",
                icon: "success",
                text: successMessage,
                draggable: true,
            }).then(() => dispatch({ type: 'successMessage', success: null }));
        }
    }, [successMessage, dispatch]);

    useEffect(() => {
        if (errorMessage !== null) {
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: errorMessage,
                draggable: true,
            }).then(() => dispatch({ type: 'errorMessage', error: null }));
        }
    }, [errorMessage, dispatch]);
}


export default Modal;
