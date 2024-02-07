import error404 from '../../assets/error404.png'
import Button from 'react-bootstrap/Button';

const Error404 = () => {
    return (
        <section>
        <div className='text-center'>
           <img src={error404} alt="imagen error 404" className='w-50'/> 
        </div>
        <div className='d-flex justify-content-center mb-5'>
        <Button variant="primary">Volver al inicio</Button>
        </div>
        </section>
    );
};

export default Error404;