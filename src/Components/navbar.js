import { Link } from 'react-router-dom';
import uesImage from '../Assets/UES.png';
const Navbar = () =>{
    return(
        <div className='flex w-[100%] h-[50px] bg-white shadow-2xl z-20 fixed'>
            <Link to="/"><img src={uesImage} className='h-[100%] pl-[5%]'></img></Link>
            <Link to="/items" className='text-black text-10px mr-[10%] my-auto'>Items</Link>
        </div>
    )
}
export default Navbar;