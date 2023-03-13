import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';
import { Player, Team } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public team: Team
  public subject: Team | Player

  constructor(private route: ActivatedRoute, private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params) => {
      this.team = this.teamsService.getTeamById(params['id']) as Team
      this.subject = this.team
    })
  }

  public showExtra(event: Event, subject: Player | Team): void {
    const elem = (<HTMLElement>event.target)

    this.removeActive();
    if (elem.tagName.toLowerCase() == 'p') {
      elem.parentElement!.classList.add('active')
    } else {
      elem.classList.add('active')
    }
    
    this.subject = subject
  }

  private removeActive(): void {
    const activeElem = document.querySelector('.squad .active')

    activeElem?.classList.remove('active')
  }

}
