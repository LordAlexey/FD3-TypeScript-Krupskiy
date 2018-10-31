
class Scale {

    private product:Array<Product>=[];


    add(_product:Product):void {
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


abstract class Product {
    abstract getScale():number;
    abstract getName():string;
}

class Apple extends Product {

    private _scale:number;
    private _name:string='Apple';

    getScale():number {
        return this._scale;
    }

    getName():string {
        return this._name;
    }

    set scale(scale:number) {
        if(scale>0) {
            this._scale = scale;
        }
    }

    set name(name:string) {
            this._name = name;
    }

}

class Tomato extends Product {

    private _scale:number;
    private _name:string='Tomato';

    getScale():number {
        return this._scale;
    }

    getName():string {
        return this._name;
    }

    set scale(scale:number) {
        if(scale>0) {
            this._scale = scale;
        }
    }

    set name(name:string) {
        this._name = name;
    }

}

    let Apple1: Apple = new Apple();
    let Apple2: Apple = new Apple();
    let Apple3: Apple = new Apple();

    Apple1.scale = 5;
    Apple1.name = 'Apple1';

    Apple2.scale = 7;
    Apple2.name = 'Apple2';

    Apple3.scale = 10;
    Apple3.name = 'Apple3';

    let Tomato1: Tomato = new Tomato();
    let Tomato2: Tomato = new Tomato();


    Tomato1.scale = 2;
    Tomato1.name = 'Tomato1';

    Tomato2.scale = 4;
    Tomato2.name = 'Tomato2';

let Scale1:Scale = new Scale();

Scale1.add(Apple1);
Scale1.add(Apple2);
Scale1.add(Tomato2);

console.log('Sum weight=' + Scale1.getSumScale());
console.log('On scale:\n' + Scale1.getNameList());



//console.log('Scale = ' + Apple1.getScale());





// let car1:Car=new Car("2870-ОГО");
// car1.show();
