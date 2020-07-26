class Car{
    public id : number;
    public name : string;
    public segment : string;
    public year : number;
    public price: number;
    public thumbnail : string;
    public photo : string;

    constructor(id: number, name: string, segment: string,year:number, price:number, thumbnail : string, photo: string){
        this.id = id;
        this.name = name;
        this.segment = segment;
        this.year = year;
        this.price = price;
        this.thumbnail = thumbnail;
        this.photo = photo;
    }
}

export default Car