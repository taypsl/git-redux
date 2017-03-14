import React from 'react';

import Repository from './repository';

export default class RepositoryList extends React.Component {
    constructor(props) {
        super(props);
        this.addRepository = this.addRepository.bind(this);
    }

    addRepository() {
        const repositoryName = this.repositoryNameInput.value;
        // TODO: Add the repository to the state
        this.props.dispatch(actions.addRepository(repositoryName));
        //the store.dispach method is added as this.props.dispatch
    }

    render() {
        const repositories = this.props.repositories.map(repository => {
            return <Repository repository={repository} key={repository.name} />;
        });

        return (
            <div className="repository-list">
                {repositories}
                <input type="text" ref={ref => this.repositoryNameInput = ref} />
                <button type="button" onClick={this.addRepository}>
                    Add repository
                </button>
            </div>
        );
    }
}

// telling how the state should be inserted into the props of the component. 
// In this case, need the array of repositories, which is the state. 
const mapStateToProps = (state, props) => ({
    repositories: state     
});

// connect calls a factory function that returns a container component that wraps RepositoryList
export default connect(mapStateToProps)(RepositoryList);
