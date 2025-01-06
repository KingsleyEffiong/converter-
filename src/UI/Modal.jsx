import Swal from 'sweetalert2'
function Modal() {
    Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong",
        draggable: true,
        footer: '<a href="#">Why do I have this issue?</a>'
    })
    return null

}

export default Modal