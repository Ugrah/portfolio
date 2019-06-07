import { Injectable } from '@angular/core';
import {Skill, SkillMock} from '../models/skills.mapping';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills: Skill[] = SkillMock;
  constructor() { }

  getSkills(){
    return this.skills;
  }
}
