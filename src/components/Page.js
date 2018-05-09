import React from "react";
import PropTypes from "prop-types";

class Page extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <a href="#">Website Name</a> / {this.props.title}
                </header>

                {this.props.children}
            </div>
        );
    }
}

Page.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
};

export default Page;