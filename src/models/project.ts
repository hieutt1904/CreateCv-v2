import moment from "moment";

/* eslint-disable */ 
export class Project {
    public projectName: string ='';
    public start: string = '';
    public end: string = ''; 
    public projectDesc: string = '';
    public teamSize: number = 0;
    public role: string = '';
    public responsibilities: string = '';
    public programmingLanguage: string = '';
    public database: string = '';
    public tools: string ='';
    public technologies: string = '';
    get executionTime(): string {
        return moment(this.start).format('MM/YYYY') + '-' + moment(this.end).format('MM/YYYY');
    }
    constructor(init?: Partial<Project>) {
        Object.assign(this, init);
    } 
}