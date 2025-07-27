import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
      card: {
          height: 175, // Slightly increased for better padding
          width: 160,  // Adjusted size to align with height
          backgroundColor: 'white', // Softer background colorf9f9f9
          borderColor: '#ddd', // Light grey border for subtle look
          borderWidth: 1, // Add slight border for structure
          borderRadius: 12, // More rounded corners for a modern look
          shadowColor: '#000', // Adding shadow for a slight elevation
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2, // Android shadow
          margin: 10, // Add margin to give some spacing between cards
      },
      text: { // Softer red color for readability
          fontSize: 18, // Slightly smaller for a cleaner look
          fontWeight: '600',
      },
        nav_container: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingVertical: 12,
          paddingHorizontal: 16,
          backgroundColor: '#f8f9fa',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
        },
      cardView: {
          flex: 1,
          flexDirection: 'row',
          flexWrap:'wrap',
          //justifyContent: 'space-between', // Space cards evenly
          padding: 15, // Reduce padding for less empty space
          marginBottom: 20,
          margin:10
      },
      LongCard: {
          borderColor: '#ff3333', // Matching the red text color
          backgroundColor: '#e0e0e0', // Lighter grey for contrast
          borderWidth: 1,
          borderRadius: 12, 
          padding: 15, // Add padding for text inside LongCard
          marginVertical: 10, // Spacing above and below LongCard
      },
        bottomView: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end', // Align elements at the bottom
            paddingBottom: 20, // Padding at the bottom for spacing
      },
      container: {
        justifyContent: 'center',
        alignSelf:"center",
        alignItems: 'center',
        marginBottom:15,
        width:75,
      },
      button: {
        backgroundColor: '#4CAF50',
        borderRadius: 50,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        borderColor:'red',
      },
      pageTitle:{
        fontSize:30,
        fontWeight:'2000',
        textAlign:'center',
        color:'red',
      },
      title:{
        fontSize:25,
        fontWeight:"1500",
      },
      subtitle:
      {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 12,
        marginBottom: 4,
      },
      img:{
        height:250,
        width:450,
        margin:10,
      },
      main:{
        flex:1,
        marginBottom:10,
      },
      cardimg:{
        height:100,
        width:100,
        alignSelf:'center',
        paddingBottom:10,
        backgroundColor:'white',
      },
      nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
      },
      btn: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
      },
      btnText: {
        color: 'red',
        fontSize: 16,
      },
      savetext:{
        fontSize:50,
      },
        cameraButton: {
          backgroundColor: '#4A90E2',
          padding: 15,
          borderRadius: 10,
          alignItems: 'center',
        },
        buttonText: {
          color: 'white',
          fontWeight: 'bold',
        },
      woundCard: {
        position: "absolute",
        top: "10%", // Moves the card higher
        left: "50%",
        transform: [{ translateX: -150 }, { translateY: -50 }], // Adjusted offset
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 5,
        padding: 15,
        alignItems: "center",
      },
      woundImage: {
        width: 250, // Match the card width
        height: 200,
        borderRadius: 10,
      },
      woundInfo: {
        marginTop: 10,
        alignItems: "center", // Ensure text is centered
      },
      woundTitle: {
        fontSize: 20, // Slightly larger title
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 8,
      },
      woundText: {
        fontSize: 16,
        marginBottom: 4,
        textAlign: "center", // Center text
      },
      woundLabel: {
        fontWeight: "bold",
      }
});


export default styles;