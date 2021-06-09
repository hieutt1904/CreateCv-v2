/* eslint-disable */ 
export class Skill {
    public competencies: string = '';
    public level: string = '';
    
    constructor(init?: Partial<Skill>) {
        Object.assign(this, init);
    } 
}