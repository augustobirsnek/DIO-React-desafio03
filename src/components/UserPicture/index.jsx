import { 
    PictureUser
} from "./styles";


const UserPicture = ({src, variant}) => {
    return (
        <PictureUser variant={variant} src={src} />
    )
}

export { UserPicture };