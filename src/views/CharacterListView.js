import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchPeopleData } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchPeopleData();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    return  <p>currently fetching data, please wait...</p>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
const mapStateToProps = state => {
 return {
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching
 }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */fetchPeopleData
  }
)(CharacterListView);
