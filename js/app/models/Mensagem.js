class Mensagem {
    
    //Se não receber nada inicializa com string vazia
    constructor(texto='') {
        
        this._texto = texto;
    }
    
    get texto() {
        
        return this._texto;
    }
    
    set texto(texto) {
        
        this._texto = texto;
    }
}