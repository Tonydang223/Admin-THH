import PropTypes from 'prop-types';
import {useSelector} from 'react-redux'
import Loading from '../Loading/Loading'
import { userApi } from '../Profile/profile.service'

export default function AuthMiddleware(props) {
    const {token} = useSelector(state => state.user);
    

    // console.log(!token)
    const { isLoading } = userApi.endpoints.getMe.useQuery(null, {
        skip: !token
    });



    
    // const loading = isLoading;


    if(isLoading) {
        return (
            <Loading />
        )
    }
    
    

    return props.children
}


AuthMiddleware.propTypes = {
    children: PropTypes.node.isRequired,
  };
  