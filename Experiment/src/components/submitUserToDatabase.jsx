import React from 'react';

var SubmitUserToDatabase = React.createClass ({

    buttonClicked: function(newUsername) {
        var database = firebase.database();
        var ref = database.ref('users');

        var data = {
            name: this.refs.usernameInput.value
        }

        ref.push(data);
    },

    render: function() {
        return (
            <div>
                <input 
                    ref = "usernameInput"
                    type = "text"/>
                <button onClick={this.buttonClicked}>Ready</button>
            </div>
        );
    }
});

export default SubmitUserToDatabase;
