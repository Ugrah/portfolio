import { Component, OnInit } from '@angular/core';
import {SkillsService} from '../services/skills.service';
import {Skill} from '../models/skills.mapping';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private skillsServices: SkillsService) { }

  ngOnInit() {
    this.skills = this.skillsServices.skills;
  }

}
