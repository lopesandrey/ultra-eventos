export class Evento {

  constructor(
    public id: number,
    public date: Date,
    public title: string,
    public description: string,
    public price: number,
    public place: string,
    public img: string,
    public qtdTicket: number
    ) {}


}
