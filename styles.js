import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingBottom: 0,
    paddingTop: 0,
    backgroundColor: "#fcfdff", 

  },

  containerWel: {
    flex: 1,
    paddingBottom: 0,
    paddingTop: 0,
    backgroundColor: '#8959dd',
    justifyContent: "center"

  },

  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  postExcerpt: {
    fontSize: 14,
    marginBottom: 16,
    color: "#999"
  },

  detailsTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 8,
    backgroundColor:"#56388a",
    width:"100%",
    padding:15,
    paddingTop: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    color: "white"
  },
  detailsBody: {
    fontSize: 15,
    marginBottom: 16,
    padding:15, 
    backgroundColor: "#fcfdff"
  },
  detailsUserId: {
    fontSize: 14,
    color: 'black',
    marginLeft: 10
  },
  userIdContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding:15,
    
    backgroundColor:"#d4cffe",
    position:'absolute',
    bottom:0,
    width:"100%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    
    elevation: 16,
  },

  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
  },

  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
    borderColor: "#8959dd",
    borderWidth: 1
  },

  postContainer: {
    borderWidth: 1,
    borderColor: "white",
    height: 160,
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "white",
  },

  bottomContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#d4cffe",
    padding: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderColor: "#d4cffe",
    borderWidth: 1,

  },

  userPost: {
    textAlignVertical: "center",
    marginLeft: 5,
  },

  buttonContainer: {
    backgroundColor: '#8959dd',
    borderRadius: 20,
    padding: 10,
    paddingRight: 15,
    paddingLeft: 15,
    marginLeft: 'auto', 
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  buttonText: {
    color: 'white',
    fontSize: 14,
    textAlignVertical: "center",
  },

  loader: {
    marginTop: 10,
    marginBottom: 20,
    alignSelf: "center", 
    justifyContent: "center"
  },

  loaderList: {
    alignSelf: "center",
  },

  viewMore: {
    alignSelf: "center",

  },

  viewMoreText: {
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: "underline",
    padding: 10, 
    color: "#8959dd"
  },

  shadowContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: 20,
    marginTop: 2,
    height: 233,
    padding: 0,
    borderRadius: 15,
    marginLeft: 20,
    marginRight: 20,
  },

  errorMessage: {
    padding: 20,
    paddingTop: 10,
    textAlign: "center", 
    color: "#999",
    fontSize: 14
  },

  errorMessage1: {
    padding: 10,
    paddingBottom: 0,
    textAlign: "center", 
    color: "#d4cffe",
    fontSize: 30,
    fontWeight: "bold",
  },

  errorImg: {
    width: 267,
    height: 165,
    marginTop: 10,
    alignSelf: "center", 
    padding: 10,
    marginTop: 200
    
  },

  notFoundImg: {
    width: 160,
    height: 160,
    marginTop: 10,
    alignSelf: "center", 
    padding: 10,
    marginTop: 30
    
  },

  welcomeImg: {
    width: 80,
    height:80,
    alignSelf: "center", 
    justifyContent: "center"
  },

  welcomeMessage: {
    padding: 10,
    paddingBottom: 0,
    textAlign: "center", 
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },

  reloadImg: {
    width: 32,
    height: 29,
    marginTop: 10
  },

  searchBar: {
    display: 'flex',
    flexDirection: "row",
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 25,
    margin: 20,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  searchIcon: {
    marginLeft: 'auto',
    marginRight: 10,
    alignSelf: "center",
  },

  searchInput: {
    marginLeft: 10,
    width: "100%"
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default styles;
