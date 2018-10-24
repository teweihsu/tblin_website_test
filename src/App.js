import React, { Component } from 'react';
import './App.css';

import Dropdown from './Dropdown/Dropdown';

import Profile from './Profile/Profile';
import Publications from './Publications/Publications';
import Projects from './Projects/Projects';
import Team from './Team/Team';
import Services from './Services/Services';

let profile_intro_test = [];

class App extends Component {

  state = {
    Profile: false, 
    Publications: false,
    Projects: false,
    Team: false,
    Services: false,
    
    profile_content: {},
    publications_content: {},
    projects_content: {},
    team_content: {},
    services_content: {}
  }

  componentDidMount () {
    var gsjson = require('google-spreadsheet-to-json');
 
       gsjson({
        spreadsheetId: '10RbLqqMM_hU9wsB4ROexwjlbxytBj_bgqsJ7ZlpgGYY',
        worksheet: ['profile', 'publications', 'projects', 'team', 'services']
        // other options...
      })
      .then( (contents) => {

        document.getElementById('Profile').classList.add('navbar-click');
      //profile
        const profile_content = contents[0];

        let profile = {};
        for (let i = 0 ; i < profile_content.length ; i ++) {
        let to_append = {
          category: profile_content[i].category,
          description: profile_content[i].description,
          first: profile_content[i].first,
          second: profile_content[i].second,
          third: profile_content[i].third
        }
        if (profile[profile_content[i].category] == null) {
          profile[profile_content[i].category] = [to_append];
        }
        else profile[profile_content[i].category].push(to_append);
      }
      this.setState({profile_content: profile});
      this.setState({Profile: true});




      //publications
        const publications_content = contents[1];

        let publications = {};
        for (let i = 0 ; i < publications_content.length ; i ++) {
        let to_append = {
          category: publications_content[i].category,
          description: publications_content[i].description,
          title: publications_content[i].title,
          index: publications_content[i].index,
          file_name: publications_content[i].file_name
        }
        if (publications[publications_content[i].category] == null) {
          publications[publications_content[i].category] = [to_append];
        }
        else publications[publications_content[i].category].push(to_append);
      }
      this.setState({publications_content: publications});


      //projects
        const projects_content = contents[2];

        let projects = {};
        for (let i = 0 ; i < projects_content.length ; i ++) {
        let to_append = {
          category: projects_content[i].category,
          description: projects_content[i].description,
          department: projects_content[i].department,
          title: projects_content[i].title
        }
        if (projects[projects_content[i].category] == null) {
          projects[projects_content[i].category] = [to_append];
        }
        else projects[projects_content[i].category].push(to_append);
      }
      this.setState({projects_content: projects});

      //team
        const team_content = contents[3];

        let team = {};
        for (let i = 0 ; i < team_content.length ; i ++) {
        let to_append = {
          category: team_content[i].category,
          description: team_content[i].description,
          name: team_content[i].name
        }
        if (team[team_content[i].category] == null) {
          team[team_content[i].category] = [to_append];
        }
        else team[team_content[i].category].push(to_append);
      }
      this.setState({team_content: team});

      //services
        const services_content = contents[4];

        let services = {};
        for (let i = 0 ; i < services_content.length ; i ++) {
        let to_append = {
          category: services_content[i].category,
          description: services_content[i].description,
          location: services_content[i].location,
          service: services_content[i].service
        }
        if (services[services_content[i].category] == null) {
          services[services_content[i].category] = [to_append];
        }
        else services[services_content[i].category].push(to_append);
      }
      this.setState({services_content: services});





     
    })

    .catch(function(err) {
        console.log(err.message);
        console.log(err.stack);
    });
  }
  

  

  falseState = () => {
    this.setState({
      Profile: false, Publications: false, Projects: false, Team: false, Services: false
    })
    document.getElementById('Profile').classList.remove('navbar-click');
    document.getElementById('Publications').classList.remove('navbar-click');
    document.getElementById('Projects').classList.remove('navbar-click');
    document.getElementById('Team').classList.remove('navbar-click');
    document.getElementById('Services').classList.remove('navbar-click');
  }

  changePage = (e) => {
    const clicked = e.target.parentElement.id;
    this.falseState();
    document.getElementById(clicked).classList.add('navbar-click');
    switch (clicked) {
      case 'Profile':
        this.setState({Profile: true});
        break;
      case 'Publications':
        this.setState({Publications: true});
        break;
      case 'Projects':
        this.setState({Projects: true});
        break;
      case 'Team':
        this.setState({Team: true});
        break;
      case 'Services':
        this.setState({Services: true});
        break;
      default:
        this.setState({Profile: true});
        break;
    }
  }


  render() {

    
    return (
      <div className="App">
        <header className="App-header">
           <h1 className = 'title'>Dr. Tzu-Bin Lin's Website</h1>
          <Dropdown id = 'dropdown' changePage = {this.changePage}/>
          <center><hr width = '80%'/></center>
        </header>
       

        <div className = 'content'>
          {this.state.Profile ? <Profile contents = {this.state.profile_content}/> : null}
          {this.state.Publications ? <Publications contents = {this.state.publications_content}/> : null}

          {this.state.Projects ? <Projects contents = {this.state.projects_content} /> : null}
          {this.state.Team ? <Team contents = {this.state.team_content} /> : null}
          {this.state.Services ? <Services contents = {this.state.services_content} /> : null}
          
        </div> 

        <div className = 'footer'></div>
      </div>
    );
  }
}

export default App;
export {profile_intro_test};
