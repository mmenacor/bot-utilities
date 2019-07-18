
import {App} from '../src/index';


test("sumar 1 + 1 y retornar 2", ()=>{
    
    //arrange
    let app : App = new App();
    //Act
    
    let c = app.sumar(1,1);
    
    //assert
    expect(c).toEqual(2);

})