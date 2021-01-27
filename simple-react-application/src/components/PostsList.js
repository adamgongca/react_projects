import React from "react";

class PostsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        // setTimeout just in order to show "Loading..."
        setTimeout(function () {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            items: result,
                        });
                    },

                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }.bind(this), 1000);
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {items
                        ?
                        <section className="cards">
                            {items.map(item => (
                                <article className="card" key={item.id}>
                                    <p className="cardtitle">{item.title}</p>
                                    <hr className="cardsplit" />
                                    <p className="cardbody">{item.body}</p>
                                </article>
                            ))}
                        </section>
                        : "Loading..."}
                </div>
            );
        }
    }

}

export default PostsList;