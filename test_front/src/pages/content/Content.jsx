// import './content.css';
// import useData from '../../hooks/useData';
// import { Link } from 'react-router-dom';

// function Content() {

//   const data = useData("users");

//    console.log(data);
//   return (
//     <div className='Content'>
//     {
//       data?.map((user, index) => {
//         return (
//         <Link to={'/user/:id'} key={index}>
//           <h2>{user}</h2>
//         </Link>
//         )
//       })
//     }

//     </div>
//   )
// }

// export default Content

import './content.css';
import useData from '../../hooks/useData';
import { Link } from 'react-router-dom';

function Content() {
  const data = useData("users");

  return (
    <div className='Content'>
      {
        data?.map((item, index) => (
          <Link to={`/user/`} key={index}>
            <h2>{item.firstName}</h2>
          </Link>
        ))
      }
    </div>
  )
}

export default Content;
