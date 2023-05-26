import { useState } from 'react'
import AppHeader from './components/app-header/AppHeader'
import ContentWrapper from './components/common/content-wrapper/ContentWrapper'
import Constructor from './components/pages/constructor/Constructor'
import Modal from './components/common/modal/Modal'

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalChildren, setModalChildren] = useState(null)

    function modalHandler(children) {
        setIsModalOpen(!isModalOpen)
        setModalChildren(children ? children : null)
    }

    document.onkeydown = e => {
        if (e.key === 'Escape' && isModalOpen === true) modalHandler()
    }

    return (
        <>
            <AppHeader />
            <main>
                <ContentWrapper>
                    <Constructor modalHandler={modalHandler} />
                </ContentWrapper>
            </main>

            <Modal modalHandler={modalHandler} isActive={isModalOpen}>
                {modalChildren}
            </Modal>
        </>
    )
}

export default App