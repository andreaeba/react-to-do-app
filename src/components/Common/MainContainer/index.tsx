import { ReactNode } from "react"

type Props = {
    children?: any,
    className?: any
}

const ContainerWrapper: FC<Props> = ({children, className}) => {

    return(
        <>
        <div className="wrapper-container">
            {children}
        </div>
        </>
    )

}

const MainContainer = ({children}) => {

    return(
        <div className="main-container">
            {children}

        </div>
    )
}

export { ContainerWrapper, MainContainer }