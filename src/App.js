import React from "react";

import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";

// Here you define routable pages
const pages = [
    {
        name: "home",
        component: <HomePage />
    },
    {
        name: "second",
        component: <SecondPage />
    }
];

class App extends React.Component {
    constructor() {
        super();

        // this way'll have access to App from everywhere
        window.appRef = this;

        // This is the default route
        this.defaultMatch = ["home"];

        this.state = {
            match: null,
            history: []
        };

        window.addEventListener("hashchange", event => {
            this.initMatch();
        });
    }

    componentWillMount() {
        this.initMatch();
    }

    initMatch() {
        let newMatch;

        if (location.hash && location.hash != "") {
            newMatch = decodeURIComponent(location.hash.replace("#", "")).split("/").filter(n => n != "");
        }
        else {
            newMatch = this.defaultMatch;
        }

        if (!(this.state.history.indexOf(newMatch[0]) > -1)) {
            this.state.history.push(newMatch[0]);
        }

        this.setState({ match: newMatch, history: this.state.history });
    }

    render() {
        return (
            <div>
                {pages.map(page =>
                    this.state.history.indexOf(page.name) > -1 &&
                    <div
                        key={page.name}
                        className={"page " + (this.state.match[0] == page.name ? "active" : "")}
                    >
                        {page.component}
                    </div>
                )}
            </div>
        );
    }
}

export default App;