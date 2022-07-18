import ReactDOM from 'react-dom';
import { EstadoProveedor } from "./context/EstadoGeneral";
import { createBrowserHistory } from 'history'
import { Router } from "react-router-dom";
import Routes from "./Routes";

const browserHistory = createBrowserHistory();

function Root() {
    return (
        <EstadoProveedor>
            <Router history={ browserHistory }>
                <Routes />
            </Router>
        </EstadoProveedor>
    );
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('viaje'));
