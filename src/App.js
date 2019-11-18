import React, { Component } from 'react';
import "./App.css"
import photo_Jean from "./img/1.jpg"
import photo_Julie from "./img/2.jpg"
import photo_Pierre from "./img/3.jpg"


export default class App extends Component{

    render(){
        return(
            <div className="container">
                <div>
                    <Contenu />
                </div>
            </div>
        );
    }
}

class Contenu extends React.Component {
    constructor(){
        super();
        this.state ={
            color: "white",
            Nom :'Charles',
            Prenom :'Jean',
            Date : '01/11/1988',
            photo : photo_Jean,
            description :'Bonjour, je m appelle Jean et je suis heureux dans ma vie',
            compteurJean: 0,
            compteurJulie: 0,
            compteurPierre:0 ,
           	variable:0,

        }
    }

    Jean =() => {
      this.setState({
          Nom :'Charles',
          Prenom :'Jean',
          Date : '01/11/1988',
          photo : photo_Jean,
          description :'Bonjour, je m appelle Jean et je suis heureux dans ma vie' ,
          variable : this.state.compteurJean,
      });
    }

    Julie =() => {
        this.setState({
            Nom : 'Lavie',
            Prenom : 'Julie',
            Date : '08/03/1999',
            photo : photo_Julie,
            description: 'Bonjour, je m appelle Julie et je suis nouvelle',
            variable : this.state.compteurPierre,
        });
    }

    Pierre =() => {
        this.setState({
            Nom : 'Dujardin',
            Prenom : 'Pierre',
            Date : '10/10/2001',
            photo : photo_Pierre,
            description: 'Bonjour, je m appelle Pierre et je suis ingénieur',
            variable : this.state.compteurJulie,
          });
    }


    super(){
      if(this.state.Prenom ==='Jean'){
        this.setState({
          compteurJean : this.state.compteurJean + 1,
          variable: this.state.compteurJean,
        });
      }
      else if(this.state.Prenom ==='Pierre'){
        this.setState({
          compteurJulie : this.state.compteurJulie + 1,
          variable: this.state.compteurJulie,
        });
      }
      else if(this.state.Prenom ==='Julie'){
        this.setState({
          compteurPierre : this.state.compteurPierre + 1,
          variable: this.state.compteurPierre,
        });
      }
  }

    ColorBg = () => {
      if(this.state.color === "white"){
        this.setState({
          color: '#F56660' 
        });
      }
      else if(this.state.color === '#F56660' ){
      	this.setState({
          color: '#989138' 
        });
      }
      else if(this.state.color === '#989138' ){
        this.setState({
          color: '#AAA354'
        });
      } 
      else if(this.state.color === '#AAA354' ){
        this.setState({
          color: '#098DD2'
        });
      }
      else if(this.state.color === '#098DD2' ){
        this.setState({
          color: "white"
        });
      }
  }

    render() { 
        return ( 
            <div>
              <div className="nav">
                  <button className="button-profil" onClick={this.Jean}>Jean</button>
                  <button className="button-profil" onClick={this.Julie}>Julie</button>
                  <button className="button-profil" onClick={this.Pierre}>Pierre</button>
              </div>
              <div id="profil-container" style={{backgroundColor: this.state.color}}>
                  <div className="profil">
                    <div className="photo"><img src={this.state.photo} alt="img" /></div>
                   <div className="info">
                    <div className="nom">{this.state.Nom}</div>
                    <div className="prenom">{this.state.Prenom}</div>
                    <div className="date">{this.state.Date}</div>
                    </div>
                  </div>
                 <div className="button-color">
                  <button className="color" onClick={this.ColorBg}>Changer de couleurs</button>
              	 </div>
              </div>

              <div className="contenu">
                <p className="texte">
                  {this.state.description}
                </p>
                <div className="like-button">
                  <button className="button-like" onClick={ ()=> this.super() }>C'est super !</button>
                  <p>Nombre de likes : {this.state.variable}</p>
                </div>
              </div>
            </div>
         );
    }
  }
