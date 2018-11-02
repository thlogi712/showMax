import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Filter"/>
                <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i>
                </button>
            </div>
        );
    }
}

const Header = (props) => (
    <nav className="header navbar navbar-dark bg-dark">
        <div className="container">
            <div className="row m-auto">
                <i className="fa fa-film fa-2x text-white my-auto">i</i>
                <div className="h3 ml-3 my-auto text-light" href="/">{props.title}</div>
            </div>
            <Filter/>
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;