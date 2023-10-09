import './notFound.scss';
import IMG from "../../assets/img/error.png"
import { Button } from '@tremor/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="containers">
            <div className="container">
                <div className="img-center">
                    <img className="error" alt="image 404" src={IMG}/>
                    <Button><Link to='/dashboard'>Retour à l&apos;accueil </Link></Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

