import { useState } from 'react';
import { Component } from 'react';
import { lazy } from 'react';
import './App.css';

const Main = lazy(() => import(`./components/Main/Main.js`));



class App extends Component {
    data = {};
    state = {
        page: 'main',
    };

    getPage(namePage) {
        switch (namePage) {
            case 'main': return Main;
        }
    }

    changePage(page, props={}) {
        this.data = props;
        this.setState(page);
    }

    render() {
        let Page = this.getPage(this.state.page);

        return (
            <Page data = {this.data} />
        );
    }
}

export default App;
