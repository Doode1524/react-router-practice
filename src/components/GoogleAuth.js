import React, { Component } from 'react'

export class GoogleAuth extends Component {
    state = { isSignedIn: null }
    
    componentDidMount() {
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: '477853956911-j8d3b4ucs2aabmb7v6k7us105q2u76gu.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get()})
    } 
    
    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
            return(
               <button onClick={this.onSignOutClick}className="ui red google button">
                   <i className="google icon" />
                       Sign Out
               </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick}className="ui red google button">
                    <i className="google icon" />
                        Sign In
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth
