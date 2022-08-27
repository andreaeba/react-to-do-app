import { FC, ReactNode } from "react"
import { Menu } from "../Menu"
import { MainContainer, ContainerWrapper } from "../MainContainer"

type Props = {
    children: ReactNode
}

const Layout: FC<Props> = ({children}) => {

    return(
        <>
            <header>
                <Menu />
            </header>
            <main>
                {/* <ContainerWrapper> */}
                    <MainContainer>
                    {children}
                    </MainContainer>
                {/* </ContainerWrapper> */}
                
            </main>
        </>
    )


}

export { Layout }