import { Injectable } from '@angular/core';
import {Skill, SkillMock} from '../models/skills.mapping';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = SkillMock;
  constructor() { }
}
