
import React, { Component } from 'react';
import './ContentVoting.css';

class ContentVoting extends Component {
  constructor() {
    super();
    this.state = {
      upvotes: 0,
      downvotes: 0,
      totalvotes: 0,
    handleUpVote:() => {
      this.setState((prevState) => ({
          upvotes: prevState.upvotes + 1,
          totalvotes: prevState.totalvotes + 1
        }));
    },
    handleDownVote:() => {
      this.setState((prevState) => ({
          downvotes: prevState.downvotes + 1,
          totalvotes: prevState.totalvotes + 1
        }));
    }
    };
  }
  render() {
    return (
     <>
     <h1>Content Voting</h1>
     <div className='content-voting'>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
			 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
			 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
			 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
			 mollit anim id est laborum.</p>
             <div className='rating-buttons'>
             <button className="upvote-button" onClick={this.state.handleUpVote}>
                 Up Vote ({this.state.upvotes})
               </button>
               <button className="downvote-button" onClick={this.state.handleDownVote}>
                 Down Vote ({this.state.downvotes})
               </button>
             </div>
             <p>Total Votes: {this.state.totalvotes}</p>
          </div>

     </>
    );
  }
}

export default ContentVoting;
