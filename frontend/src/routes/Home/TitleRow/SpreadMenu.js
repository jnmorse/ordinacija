import React from 'react';
import Link from '@material-ui/core/Link';


class SpreadMenu extends React.Component {

    servicesClickHandler = () => {
        window.scrollTo(0, window);
        this.props.servicesClickHandler();
    }

    contactClickHandler = () => {
        window.scrollTo(0, window);
        this.props.contactClickHandler();
    }

    render() {
        const {currentRoute} = this.props;

        return (
            <>  
                <Link 
                    onClick={this.contactClickHandler}
                    style={{marginLeft: '2rem', fontSize: '1.2rem', cursor: currentRoute === '/' ? 'default' : 'pointer', color: 'white', fontWeight: currentRoute === '/' && 'bold',}}
                    underline='none'
                >
                    O nama
                </Link>
            
                <Link 
                    onClick={this.servicesClickHandler}
                    style={{marginLeft: '2rem', fontSize: '1.2rem', cursor: currentRoute === '/services' ? 'default' : 'pointer', color: 'white', fontWeight: currentRoute === '/services' && 'bold',}}
                    underline='none'
                >
                    Usluge
                </Link>
            </>
        );
    }
}

export default (SpreadMenu);

