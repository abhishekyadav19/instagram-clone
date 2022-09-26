export const validation = (values) => {
    let errors = {};
    let pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is envalid"
    }
    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 8) {
        errors.password = "Password must be more then five charcter"
    }
    if (!values.fullname) {
        errors.fullname = "Name is required"
    } else if (values.fullname.length < 4) {
        errors.fullname = "fullname must be more then five charcter"
    }
    return errors
}




