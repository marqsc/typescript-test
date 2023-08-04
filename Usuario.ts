import { deco01, deco02, deco03, deco04, deco05, deco06 } from './decorators';

//deco06
//@deco05
//@deco03({ a: 'Teste', b: 15 })
//@deco02
@deco01
export class Usuario {
  private nome: string;

  public constructor(nome: string) {
    this.nome = nome;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string) {
    this.nome = nome;
  }
}
