import Form from '../../components/common/form/Form'
import FormFooter from '../../components/common/form-footer/FormFooter'
import { sendForgetPassword } from '../../store/authSlice'

export default function ForgotPassword() {
    const inputs = [
        {
            type: 'email',
            name: 'email',
            placeholder: 'E-mail',
        },
    ]

    const footerData = [
        {
            text: 'Вспомнили пароль?',
            link: {
                title: 'Войти',
                href: '/login',
            },
        },
    ]

    return (
        <>
            <Form headline='Восстановление пароля' inputs={inputs} buttonText='Восстановить' submitFunc={sendForgetPassword} />
            <FormFooter data={footerData} />
        </>
    )
}