import './UserPage.css';
import { useParams } from 'react-router-dom';
import useData from '../../hooks/useData';

function UserPage() {

    const { id } = useParams();
    const data = useData(`user/${id}`)
    console.log(data);
  return (
    <div className='UserPage'>
        
            <h1>{data?.firstName}</h1>
            <h2>{data.email}</h2>
            <h2>{data.year}</h2>
        
    </div>
  )
}

export default UserPage