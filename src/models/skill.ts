/* eslint-disable */ 
export class Skill {
    public competencies: string = '';
    public level: number = 0;
    constructor(init?: Partial<Skill>) {
        Object.assign(this, init);
    } 
}