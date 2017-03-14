import React from 'react';

var showUser = React.createClass({
    render: function() {
        var letterStyle = {
            padding: 10,
            margin: 10,
            backgroundColor: this.props.bgcolor,
            color: "#333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: 32,
            textAlign: "center"
        };

        return (
            <div style={letterStyle}>
                {this.props.children}
            </div>
        );
    }
});