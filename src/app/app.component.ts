import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Teams Generator';
  newName: string = ""
  names: string[] = []
  errorMessage: string = ""
  numberOfTeams: number | "" = ""
  teams: string[][] = []

  updateNewName(name:string){
    this.newName = name
  }

  addNewName(){
    if(!this.newName){
      this.errorMessage = 'Name cannot be empty.'
    } else {
      this.names.push(this.newName)
      this.errorMessage = ''
      this.newName = ''
    }
  }

  updateTeams(teams: string) {
    this.numberOfTeams = Number(teams)
  }

  generateTeams(){
    this.teams = []
    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMessage = "Invalid number of Teams"
      return
    }

    if(this.names.length < this.numberOfTeams){
      this.errorMessage = "More teams than names"
      return
    }

    this.errorMessage = ""
    const allNames = [...this.names]

    while(allNames.length > 0){
      for(let i = 0; i < this.numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allNames.length)
        const selectedName = allNames.splice(randomIndex, 1)[0]
        if(!selectedName) break
  
        if(this.teams[i]){
          this.teams[i].push(selectedName)
        } else {
          this.teams[i] = [selectedName]
        }
      }
    }
    this.names = []
    this.numberOfTeams = ""
  }
}
