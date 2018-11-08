
class Scale {

    private product:Array<IScalable>=[];


    add(_product:IScalable):void {
        this.product.push(_product);
    }

    getSumScale():number {

        var totalScale:number = 0;

        for(var i:number=0;i<this.product.length;i++){
            totalScale+=this.product[i].getScale();
        }
         return totalScale;
    }

    getNameList():Array<string> {

        var list:Array<string>=[];

        for(var i:number=0;i<this.product.length;i++){
            list[i]=this.product[i].getName();
        }

        return list;

    }
}


interface IScalable{
    getScale():number;
    getName():string;
}

class Apple implements IScalable{

    private _scale:number;
    private _name:string='Apple';

    getScale():number {
        return this._scale;
    }

    getName():string {
        return this._name;
    }

    setScale(scale:number) {
        if(scale>0) {
            this._scale = scale;
        }
    }

    setName(name:string) {
            this._name = name;
    }

}

class Tomato implements IScalable {

    private _scale:number;
    private _name:string='Tomato';

    getScale():number {
        return this._scale;
    }

    getName():string {
        return this._name;
    }

    setScale(scale:number) {
        if(scale>0) {
            this._scale = scale;
        }
    }

    setName(name:string) {
        this._name = name;
    }

}

    let Apple1: Apple = new Apple();
    let Apple2: Apple = new Apple();
    let Apple3: Apple = new Apple();

    Apple1.setScale(5);
    Apple1.setName('Apple1');

    Apple2.setScale(7);
    Apple2.setName('Apple2');

    Apple3.setScale(10);
    Apple3.setName('Apple3');

    let Tomato1: Tomato = new Tomato();
    let Tomato2: Tomato = new Tomato();


    Tomato1.setScale(2);
    Tomato1.setName('Tomato1');

    Tomato2.setScale(4);
    Tomato2.setName('Tomato2');

let Scale1:Scale = new Scale();

Scale1.add(Apple1);
Scale1.add(Apple2);
Scale1.add(Tomato2);

console.log('Sum weight=' + Scale1.getSumScale());
console.log('On scale:\n' + Scale1.getNameList());



//console.log('Scale = ' + Apple1.getScale());





// let car1:Car=new Car("2870-ОГО");
// car1.show();
