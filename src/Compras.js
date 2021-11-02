import React from 'react';
import './Compras.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

export default function Compras() {
    return (
        <div className="principal">
            <section className="titulo">
                <h1><i><b><u>Faça sua compra !</u></b></i></h1>
            </section>
            <div id="secundaria">
                <section className="form0">
                    <table className="tabela" border="1">
                        <tr>
                            <td>
                                <i><b>Produto</b></i>
                            </td>
                            <td>
                                <i><b>Quantidade</b></i>
                            </td>
                            <td>
                                <i><b>Total</b></i>
                            </td>
                        </tr>
                    </table>
                    <select className="prod">
                        <option value="">Selecione seu Produto</option>
                        <option value="rimel">Rimel</option>
                        <option value="delineador">Delineador</option>
                        <option value="colecao">Coleção de Pincéis</option>
                        <option value="corretivo">Corretivo</option>
                        <option value="base">Base</option>
                        <option value="batom">Batom</option>
                        <option value="po">Pó Compacto</option>
                        <option value="iluminador">Iluminador</option>
                        <option value="maleta">Maleta de Sombras</option>
                    </select>
                    <div className="numero">
                        <input type="number" className="quant" nome="quant" min="1" />
                    </div>
                    <div className="valor1">
                        <input type="text" className="valor" nome="valor" />
                    </div>
                    <img src="https://media.discordapp.net/attachments/870417386245861396/901292860450693151/redondo-emPNG.png" />
                    <form>
                        <div className="form">
                            <section className="parte1">
                                <form action="Compras.js" method="POST">
                                    <fieldset>
                                        <label for="nome"><i><b>Nome Completo  </b></i></label>
                                        <input type="text" className="form1" nome="nome" />
                                        <br /><br />
                                        <label for="cartao"><i><b>Telefone  </b></i></label>
                                        <input type="text" className="form2" nome="cartao" maxLength="16" />
                                        <br /><br />
                                        <label for="cvv"><i><b>CPF  </b></i></label>
                                        <input type="text" className="form3" nome="cvv" maxLength="14" min="14" />
                                    </fieldset>
                                </form>
                            </section>
                            <br /><br />
                            <section className="parte2">
                                <form action="Compras.js" method="POST">
                                    <fieldset>
                                        <label for="validade"><i><b>E-mail</b></i></label>
                                        <input type="text" className="form4" nome="validade" />
                                        <br /><br />
                                        <label for="end"><i><b>Endereço  </b></i></label>
                                        <input type="text" className="form6" nome="end" />
                                        <br /><br />
                                        <label for="cep"><i><b>CEP  </b></i></label>
                                        <input type="text" className="form7" nome="cep" maxLength="9" />
                                    </fieldset>
                                </form>
                            </section>
                        </div>
                        <section className="botao">
                            <Button color="success" className="ok">Gerar Boleto</Button>
                            <Button color="danger" className="cancelar">Cancelar</Button>
                        </section>
                    </form>
                </section>
            </div>
            <section className="rodape">
                <img className="face" src="https://media.discordapp.net/attachments/852547785244803112/894009280255107102/facebook.png" />
                <p className="faceuser">
                    <b>
                        lojatomakeup
                    </b>
                </p>
                <img className="insta" src="https://media.discordapp.net/attachments/852547785244803112/894009284948541500/instagrameditado.png" />
                <p className="instauser">
                    <b>
                        @lojatomakeup
                    </b>
                </p>
                <img className="email" src="https://media.discordapp.net/attachments/852547785244803112/894009293177774080/mensagem.png?width=424&height=424" />
                <p className="gmail">
                    <b>
                        lojatomakeup@gmail.com
                    </b>
                </p>
                <img className="fone" src="https://media.discordapp.net/attachments/852547785244803112/894009298525507674/telefone.png?width=424&height=424" />
                <p className="telefone">
                    <b>
                        (81) 3092-1660
                    </b>
                </p>
                <p className="aviso">
                    <b>
                        <u>
                            Atendimento de Segunda à Sexta: 9h às 17h - Exceto feriados.
                        </u>
                    </b>
                </p>
                <footer>
                    <center>
                        <i>
                            © Criado em 2021 Victor A. Ferraz, Mariane B. Caldeira, Kayo Victor e Elimar Santos.
                        </i>
                    </center>
                </footer>
            </section>
        </div>
    );
};