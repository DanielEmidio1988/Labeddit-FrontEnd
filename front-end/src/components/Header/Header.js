import logo from "../../assets/logo.svg"
import { StyleHeader } from "./styledHeader"
import { goToLoginPage } from "../../router/coordinator"
import { useNavigate, useLocation } from "react-router-dom"
import close from "../../assets/closemodal.svg"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

function Header() {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const location = useLocation()

    //Daniel: callback utilizado para fechar o modal de post.
    const closeModal = ()=>{
        context.setModal(false)
        context.setActionModal("")
    }

    //Daniel: callback utilizado para sair da conta do usuário e 'resetar' os modais
    const logOut = ()=>{
        context.setModal(false)
        context.setActionModal("")
        goToLoginPage(navigate)
    }

    return (
        <StyleHeader>
            <div>
                {context.modal && context.actionModal ==="post" ?
                <img src={close} alt="botão-fechar" onClick={()=>closeModal()}/>
                :
                ''}              
            </div>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                {location.pathname === "/signup"?
                <h2><a onClick={()=>goToLoginPage(navigate)}>Entrar</a></h2>
                :
                <h2><a onClick={()=>logOut()}>Logout</a></h2>
                }
                
            </div>
        </StyleHeader>
    )
}

export default Header