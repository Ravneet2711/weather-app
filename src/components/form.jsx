import React from 'react';

class Form extends React.Component{
    state = {
        term: ''
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render(){
        return(
            <div className="inputSearch">
                <div className="input-group mb-3" >
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="City,Country" 
                        id="search"
                        onChange={(e)=> this.setState({term:e.target.value})}
                    />
                    <div className="input-group-append">
                        <button 
                            style={{marginLeft:"5px"}}
                            className="input-group-text"
                            onClick={this.onFormSubmit}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
                
        )
    }
}
export default Form;

