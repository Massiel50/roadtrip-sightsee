import React, { Component} from "react";
import API from "../API/map";

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedPlaces: [],
      show: false,
      userName: "",
      newPassword: "",
      password: "",
      isDeleted: false,
      isLoggedIn: false,
      // loginMsg: ""
    };
  }

   // calls db for all Places tagged with logged in user
   loadUserPlaces = () => {
    API.findSaved()
      .then(res => {
        // console.log(res.data);
        if (res.status === 200) {
          let usersArray = [];
          for (let j = 0; j < res.data.length; j++) {
            const place = res.data[j];
            if (place.userName === this.state.userName) {
              usersArray.push(place);
            }
          }
          this.setState({ savedPlaces: usersArray });
          console.log("check point");
        } else {
          console.log("failed check point.");
        }
      })
      .catch(err => console.log(err));
  };
  
    // event handler for delete button located on each saved feature
  // finds that CardSaved data object in db "places" collection
  // and deletes feature object from db places collection, which is tagged with user's email
  handleDeletePlace = pKey => {
    console.log("delete clicked");

    // get all currently displayed feature objects data, which are in placesArray
    let savedPlacesArray = this.state.savedPlaces;

    // loop through all current features in this.state.placesArray
    for (let i = 0; i < savedPlacesArray.length; i++) {
      // variable for each feature object looped
      const deleteObject = savedPlacesArray[i];

      // if a feature object's placeKey matches the placeKey passed by the save button,
      if (deleteObject.placeKey === pKey) {
        console.log(deleteObject.placeKey);

        let query = { placeKey: deleteObject.placeKey };
        console.log(query);

        API.deletePlace(query)
          .then(res => {
            if (res.status === 200) {
              this.loadUserPlaces();
            } else {
              console.log("failed to delete this place.");
            }
          })
          .catch(err => console.log(err));
      }
    }
  };

  componentDidMount() {
    console.log(this.state);
    // get the current value of the Wanderlist_authkey and userEmail tokens in local storage
    let readToken = window.localStorage.getItem("RoadTrip_authkey");
    let readuserName = window.localStorage.getItem("RoadTrip_userName");
    let query = {
      token: readToken
    };
    API.checkAuth(query)
      .then(res => {
        if (res.data.success) {
          // set this.state.userName based on the useruserName token in local storage
          this.setState({ userName: readuserName });
          this.setState({ isLoggedIn: true });
        } else {
          this.setState({ isLoggedIn: false });
        }
       
        this.loadUserPlaces();
      })
      .catch(err => console.log(err));

  }
// render everything
  render() {
    return (
      <>
        {/* SAVED LOCATIONS */}
        <CardSavedContainer >
          {this.state.savedPlaces.length ? (
            <List>
              {/* and .map the savedPlaces, with each element referred to as "place" */}
              {this.state.savedPlaces.map(place => (
                // create a <div> for each "place" and set it's unique key
                <div key={place.placeKey}>
                  {/* then build a <CardSaved> for it, passing all the props */}
                  <CardSaved
                    loginStatus={this.state.isLoggedIn}
                    handleDeleteButton={this.handleDeletePlace}
                    // handleDisabledSaveButton={place.pleaseLogin}
                    placeKey={place.placeKey}
                    placeName={place.placeName}
                    placeLatitude={place.placeLatitude}
                    placeLongitude={place.placeLongitude}/>
                </div>
              ))}
            </List>
          ) : (
            // but if there are no items in this.state.savedPlaces array, display this message
            <h5 className="default-display-type">
              You haven't saved any locations yet. Click SEARCH and get your wander on!
            </h5>
          )}
        </CardSavedContainer>
      </>
    );
  }
}

export default Saved;