export class ShowLoading{
    public static readonly type ='[App] ShowLoading';
    constructor(public loading:boolean){}
}
export class ShowEmail{
    public static readonly type ='[App] ShowEmail';
    constructor(public email:string){}
}