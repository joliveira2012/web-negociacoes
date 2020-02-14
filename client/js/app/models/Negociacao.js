class Negociacao {
    
    constructor(data, quantidade, valor) {
        
        this._data = new Date(data);
        this._quantidade = quantidade;
        this._valor = valor;
        //Para não alterar diretamente
        Object.freeze(this);
    }

    //metódos 
    
    //Quando usa o get ele sabe que estou chamando a função e não a variável
    get volume() {
        
        return this._quantidade * this._valor;
    }
    
    get data() {
        
        return new Date(this._data.getTime());
    }
    
    get quantidade() {
        
        return this._quantidade;
    }
    
    get valor() {
        
        return this._valor;
    }
}