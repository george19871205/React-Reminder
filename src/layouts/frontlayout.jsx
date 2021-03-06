import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/header/front_header.jsx';
import Footer from '../components/footer/front_footer.jsx';
import ThemeRoutes from '../routes/routing.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Frontlayout extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			width: window.innerWidth
		};
	}


	render() {
        let show_footer = true;
        if(this.props.history.location.pathname==='/login' || this.props.history.location.pathname==='/register'){
            show_footer = false;
        }
		return (
            <React.Fragment>
                <link rel="stylesheet" href="../assets/css/landing.css" />
                <link rel="stylesheet" href="./assets/css/purpose.css" id="stylesheet" />

                <div className="container-fluid container-application">

                    <div className="main-content position-relative">
                        <Header data={this.state} />
                        <div className="page-content">
                            <Switch>
                                {ThemeRoutes.map((prop, key) => {
                                    if (prop.redirect) {
                                        return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
                                    }
                                    else {
                                        return (
                                            <Route path={prop.path} component={prop.component} key={key} />
                                        );
                                    }
                                })}
                            </Switch>
                        </div>{
                            show_footer ?  <Footer /> : null
                        }
                        <ToastContainer/>
                    </div>
                </div>
            </React.Fragment>

		);
	}
}
export default Frontlayout;
