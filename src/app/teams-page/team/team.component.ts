import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Team, TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team: Team

  constructor(private route: ActivatedRoute, private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params) => {
      this.team = this.teamsService.getTeamById(params['id']) as Team
    })
  }

}
