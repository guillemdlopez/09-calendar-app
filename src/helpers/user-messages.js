import Swal from "sweetalert2"

export const errorMessage = (title, message, icon) => {
    return Swal.fire({
        title: title,
        text: message,
        icon: "error"
    })
}