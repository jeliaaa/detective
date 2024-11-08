import { Toaster } from 'react-hot-toast'

function ToasterContext() {
    return (
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
    )
}

export default ToasterContext