class DispositoEletronico {
    constructor(nome) {
      this.nome = nome;
      this.ligado = false;
    }
  
    ligar() {
      if(this.ligado) {
        console.log(this.nome + ' já ligado');
        return;
      }
  
      this.ligado = true;
    }

    f() {
        console.log('Press F to respect');
    }
  
    desligar() {
      if(!this.ligado) {
        console.log(this.nome + ' já desligado');
        return;
      }
  
      this.ligado = false;
    }
  }
  
  class Smartphone extends DispositoEletronico {
    constructor(nome, cor, modelo) {
      super(nome);
  
      this.cor = cor;
      this.modelo = modelo;
    }
  }
  
  class Tablet extends DispositoEletronico {
    constructor(nome, temWifi) {
      super(nome);
      this.temWifi = temWifi;
    }
  
    ligar2() {
      super.f();
    }
  
    falaOi() {
      console.log('Oi');
    }
  
  }
  
  const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
  
  
  const t1 = new Tablet('Ipad', true)


function teste () {
    console.log(this);
}


(function (){
    
        teste()
})();

