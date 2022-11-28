import { FlexBox } from "../../styles/globals";
import Text from "../text";
import { ImgPlaceholder } from "../../styles/globals";

export default function MyMessage({
    text="default message",
    image="",
    type="",
}){

    if (type==="messageImage") {
        return(
            <FlexBox width="100%" justifyContent="flex-end" padding="0 15px 0 15px">
            <FlexBox dir="column" maxWidth="80%" minHeight="45px" padding="10px 10px 10px 10px" bgColor="#4F4DB0" borderRadius="16px 16px 0px 16px" margin="5px">
                <ImgPlaceholder bgImage={image} width="100%" height="150px" borderRadius="5px"></ImgPlaceholder>
            </FlexBox>
            </FlexBox>
        )    
    } else {       
        return(
            <FlexBox width="100%" justifyContent="flex-end" padding="0 15px 0 15px">
            <FlexBox dir="column" alignItems="flex-end">
        <FlexBox dir="column" maxWidth="80%" minHeight="45px" padding="5px" bgColor="#4F4DB0" borderRadius="16px 16px 0px 16px" margin="5px">
            <Text txt={text} color="white"></Text>
        </FlexBox>
             <Text txt="time" color="#868585" size="14px"></Text>
             </FlexBox>
        </FlexBox>
    )
}
}