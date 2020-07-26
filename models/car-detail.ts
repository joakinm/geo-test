import Car from './car';

export class CarDetail extends Car{
    public model_features: {name: string, description:string, photo: string};
    public model_highlights: {title:string, content:string, image:string };

    constructor(id: number, name: string, segment: string,year:number, price:number, thumbnail : string, photo: string,
        modelname:string, modeldesc:string,modelphoto:string,
        modeltitle:string, modelcont:string,modelImg:string){
        super(id,name,segment,year,price,thumbnail,photo);
        this.model_features = {
            name:modelname,
            description: modeldesc,
            photo:modelphoto};
        this.model_highlights={
            title: modeltitle, 
            content:modelcont,
            image:modelImg
        }
    }
}