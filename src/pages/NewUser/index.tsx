import { SimpleForm, SimpleFormBootstrap } from "../../components/Forms/SimpleForm"
import { Container } from "react-bootstrap"
import { MainContainer } from "../../components/Common/MainContainer"


const NewUser = () => {

    return(
        <>
        <MainContainer>
            <SimpleForm labelName="Enter a name"/>
        </MainContainer>
            
      
        </>
        
    )

}

export { NewUser }