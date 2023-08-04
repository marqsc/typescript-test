export function deco01(target) {
  console.log('decoretor deco01');
  console.log(target);
}

export function deco02(construtor: Function) {
  console.log('decorator deco02 ');
  console.log(construtor);
}

export function deco03(obj: { a: string; b?: number }) {
  console.log('decorator deco03 ');
  return function (_: Function): void {
    console.log(obj.a + ' ' + obj.b);
  };
}

export function deco04<T extends { new (...args: any[]): {} }>(constructor: T) {
  console.log('decorator deco04 ');
  return class extends constructor {
    novaPropriedade = 'nova_propriedade_';
    ola = 'sobrepor';

    public getOla(): string {
      return this.ola;
    }
  };
}

type Construtor = { new (...args: any[]): {} };

export function deco05(construtor: Construtor) {
  console.log('decorator deco05 ');
  return class extends construtor {
    constructor(...args: any[]) {
      console.log('Antes...');
      super(...args);
      console.log('Depois...');
    }
  };
}

export function deco06(construtor: Function) {
  console.log('decorator deco06 ');

  construtor.prototype.imprimir = function () {
    console.log(this);
  };
}
