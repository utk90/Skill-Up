import React from "react";

const Processor = (WrappedComponent, entity) => {
    // based on entity do the API call
    // create user search input and filter results
    // return filtered results
    // render children

    return class extends React.Component {
        state = {
            data: [],
            filtered: [],
            search: ''
        };
        url = `https://jsonplaceholder.typicode.com/${entity}`;

        fetchData = (url, options = null) => {
            fetch(url, options)
                .then(raw => raw.json())
                .then(json => {
                    const first10Results = json.slice(0, 10);
                    this.setState((prev) => {
                        return {
                            ...prev,
                            data: first10Results,
                            filtered: first10Results
                        }
                    })
                });
        }

        searchHandler = (searchText) => {
            const filteredRes = this.state.data.filter((item) => entity === 'users' ? item['name'].includes(searchText) : item['title'].includes(searchText));
            this.setState((prev) => {
                return {
                    ...prev,
                    filtered: filteredRes
                }
            })
        }

        componentDidMount() {
            if (!this.state.data.length) {
                this.fetchData(this.url);
                console.log('data', this.state.data)
            }
        }

        componentDidUpdate(prevProps, prevState) {
            if (prevState.search !== this.state.search) {
                if (this.state.data.length) {
                    this.searchHandler(this.state.search);
                }
            }
        };

        render() {
            return (
                <>
                    <h1>{entity}'s List</h1>
                    <input type="text" placeholder="search text" onChange={(e) => this.setState((prev) => {
                        return {
                            ...prev,
                            search: e.target.value
                        }
                    })} />
                    <WrappedComponent data={this.state.filtered} />
                </>
            )
        }
    }
}

export default Processor