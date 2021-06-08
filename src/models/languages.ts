/* eslint-disable */ 
export class Language {
    public language: string = '';
    public level: number = 1;
    public note: string = '';
    get  noteLevel(): string {
        switch(this.level) {
            case 1: 
                return 'Beginner';
            case 2: 
                return 'Intermediate';
            case 3: 
                return 'Advanced';
            case 4:
                return 'Native';
            default:
                return '';
        }
    }
    constructor(init?: Partial<Language>) {
        Object.assign(this, init);
    } 
}