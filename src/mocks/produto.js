import Logo from '../../assets/SK99.png';
import truck from '../../assets/truck.png';
import shapeElement from '../../assets/shape.png';
import rodinhas from '../../assets/rodinhas_element.png';

const produto = {
    detalhes: {
        nome: "Kit Element",
        logo: Logo,
        descricao: "Kit de peças e acessórios pro seu skateboard.",
        preco: "R$ 400,00",
        botao: "Adicione a Lista de Desejos",
    },
    itens: {
        titulo: "Produtos do pacote:",
        lista: [
            {
                nome: "Truck Element",
                imagem: truck,
            },
            {
                nome: "Shape Element",
                imagem: shapeElement,
            },
            {
                nome: "Rodinhas Element",
                imagem: rodinhas,
            },
        ]
    }
}

export default produto;
