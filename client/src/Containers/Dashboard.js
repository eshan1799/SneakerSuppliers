import React from "react";
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    render() {
        return (
            <>
            <h1>Dashboard</h1>
            </>
        )
    }
}

const mSTP = state => ({
    dashboard: state.portfolio,
    equity: state.equity
})

export default connect(mSTP)(Dashboard)