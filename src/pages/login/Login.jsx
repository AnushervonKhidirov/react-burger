import Form from '../../components/common/form/Form'
import FormFooter from '../../components/common/form-footer/FormFooter'
import { loginUser } from '../../services/user/action'

import { inputs, footerData } from './constant'

export default function Login() {
    return (
        <>
            <Form headline='Вход' inputs={inputs} buttonText='Войти' submitFunc={loginUser} />
            <FormFooter data={footerData} />
        </>
    )
}
