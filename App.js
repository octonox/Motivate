import logo from './logo.svg';
import './App.css';

class rootElement extends React.Component {
  render () {
      return (
          <LetterArea title="Essai" contenu="abcdefghijqlmnopqrstuvwxyz"></LetterArea>
      );
  }
}

// Titre de la lettre
class TitleArea extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
          LabelShowed: true,
          title: this.props.title
      };

      /* S'il n'y a pas encore de titre, on l'affiche le textedit pour que l'utilisateur l'écrive, 
      et un bouton pour submit, sinon le titre est simplement affiché */
      if (this.props.title == "") {
          this.setState({LabelShowed: false})
      } 
  }
  
  changeTitle(event) {
      this.setState({title: event.target.value});
  }

  showInput() {
      this.setState({LabelShowed: false});
  }

  hideInput() {
      this.setState({LabelShowed: true});
  }
  
  render () {
      // Si on doit afficher le titre
      if (this.state.LabelShowed == true) {
          return ( // Le titre est affiché, avec à ses côtés un bouton qui permet de le changer
              <div>  
                  <h3>{this.state.title}</h3>
                  <button onClick={this.showInput}>Changer le titre</button>
              </div>
          );
      } else { // Sinon on affiche un input et un bouton pour changer le titre
          // Quand le texte est changé dans l'input, changeTitle est appelé qui change le titre
          // Quand le formulaire est envoyé, hideInput est appelé qui met LabelShowed a true de façon à ce que le titre soit affiché
          return (
              <div>
                  <form action={this.hideInput}>
                      <label for="titleInput">Titre</label>
                      <input type="text" id="titleInput" name="titleInput" onChange={this.changeTitle}>Ecrivez ici le titre de votre lettre</input>
                      <input type="submit" value="Envoyer"></input>
                  </form>
              </div>
          )
      }
  }
}


// Contenu de la lettre
class ContenuArea extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
          contenu: this.props.contenu
      };
  }

  changeContenu(event) {
      this.setState({contenu: event.target.value})
  }

  render () {
      return (
          <textarea onChange={this.changeContenu}></textarea> // When the text in the textarea changes, it changes this.state.contenu
      );
  }
}

// Regroupe le titre et le contenu de la lettre
class LetterArea extends React.Component {
  constructor (props) {
      super(props);
      this.state = { 
          contenu: this.props.contenu // Contenu de la lettre
      };
  }

  render () { 
      <div>
          <TitleArea title={this.props.title} ></TitleArea>
          <ContenuArea contenu={this.state.contenu}></ContenuArea>
      </div> 
  }
}

export default rootElement

ReactDOM.render(rootElement, document.getElementById('root'));
