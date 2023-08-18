import React, { Component } from 'react';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      passeMouseSobre: false,
      mobile: false,
      numeros: '',
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.quebraBiscoito2 = this.quebraBiscoito2.bind(this);
    this.mouseEntrar = this.mouseEntrar.bind(this);
    this.deixarMouse = this.deixarMouse.bind(this);
    this.clicarImagem = this.clicarImagem.bind(this);

    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A vida trará coisas boas se tiveres paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Gente todo dia arruma os cabelos, por que não o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
      'Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.',
      'Siga os bons e aprenda com eles.',
      'Não importa o tamanho da montanha, ela não pode tapar o sol.',
      'O bom-senso vale mais do que muito conhecimento.',
      'Quem quer colher rosas deve suportar os espinhos.',
      'São os nossos amigos que nos ensinam as mais valiosas lições de vida.',
      'Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade.',
      'Aquele que se importa com o sentimento dos outros, não é um tolo.',
      'A adversidade é um espelho que reflete o verdadeiro eu.',
      'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
      'Uma bela flor é incompleta sem suas folhas.',
      'Sem o fogo do entusiasmo, não há o calor da vitória.',
      'Não há melhor negócio que a vida. A gente há obtém a troco de nada.',
      'O riso é a menor distância entre duas pessoas.',
      'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.',
      'É mais fácil conseguir o perdão do que a permissão.',
      'Os defeitos são mais fortes quando o amor é fraco.',
      'Amizade e Amor são coisas que podem virar uma só num piscar de olhos.',
      'Surpreender e ser surpreendido é o segredo do amor.',
      'Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.',
      'Todo mundo é capaz de denominar uma dor, exceto quem a sente.',
      'A paciência na adversidade é o sinal de um coração sensível.',
      'A sorte favorece a mente bem preparada.',
      'Sua visão se tornará clara apenas quando você olhar para dentro do seu coração.',
      'Quem olha para fora sonha; quem olha para dentro acorda.',
      'As pessoas se esquecerão do que você disse e do que você fez... mas nunca se esquecerão de como você as fez sentir.',
      'Espere pelo mais sábio dos conselhos: o tempo.',
      'Todas as coisas são difíceis antes de se tornarem fáceis.',
      'Você pode encontrar a si mesmo fazendo ou dizendo coisas que você nunca imaginou possíveis.',
      'Se você se sente só é porque construiu muros ao invés de pontes.',
      'Vencer é 90 por cento suor e 40 por cento técnica.',
      'O amor está mais próximo do que você imagina.',
      'A vida coloca em nossa frente opções.',
      'Você é do tamanho do seu sonho.',
      'Pare de procurar eternamente; a felicidade está bem ao seu lado.',
      'Conhecimento é a única virtude e ignorância é o único vício.',
      'O nosso primeiro e último amor é... o amor-próprio.',
      'Deixe de lado as preocupações e seja feliz.',
      'A vontade das pessoas é a melhor das leis.',
      'Nós somos o que pensamos.',
      'A maior barreira para o sucesso é o medo do fracasso.',
      'O pessimista vê a dificuldade em cada oportunidade; o otimista vê a oportunidade em cada dificuldade.',
      'Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram trabalhando.',
      'O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.',
      'O futuro pertence àqueles que acreditam na beleza de seus sonhos.',
      'Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.',
      'O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.',
      'Você precisa fazer aquilo que pensa que não é capaz de fazer.',
      'Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.',
      'A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.',
      'Motivação não é sinônimo de transformação, mas um passo em sua direção.',
      'O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.',
      'Inspiração vem dos outros. Motivação vem de dentro de nós.',
      'Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais.',
      'A nossa vida tem 4 sentidos: amar, sofrer, lutar e vencer. Ame muito, sofra pouco, lute bastante e vença sempre!',
      'Nada é por acaso... Acredite em seus sonhos e nos seus potenciais.... Na vida tudo se supera.',
      'Acredite em milagres, mas não dependa deles.',
      'Você sempre será a sua melhor companhia!',
      'Realize o óbvio, pense no improvável e conquiste o impossível!',
      'A motivação é como um combustível, necessário para realizar qualquer tarefa.',
      'Se você quer ser bem-sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si mesmo.',
      'Se você quer vencer seus medos, você tem que se tornar mais forte do que qualquer coisa que te assuste.',
      'Pensamentos positivos atraem coisas positivas.',
      'Quando você quer alguma coisa, todo o universo conspira para que você realize seu desejo.',
      'O mundo está cheio de oportunidades, basta ter coragem para persegui-las.',
      'Nunca é tarde demais para ser o que você poderia ter sido.',
      'Acredite em si mesmo e todo o resto se encaixa. Acredite em si mesmo e tudo é possível.',
      'O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.',
      'O mundo é como um espelho que devolve a cada pessoa o reflexo de seus próprios pensamentos.',
      'Quanto maior o obstáculo, mais glorioso é superá-lo.',
      'A vida é o que acontece enquanto você está ocupado fazendo outros planos.',
      'A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.',
      'A única maneira de fazer um ótimo trabalho é amar o que você faz.',
      'O sucesso é a soma de pequenos esforços repetidos diariamente.',
      'Lute como se você estivesse no terceiro round, mesmo que você esteja no décimo segundo.',
      'A felicidade está na lista de coisas simples da vida.',
      'Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão resultados.',
      'Aja como se o que você faz fizesse diferença. Isso faz.',
      'A vida é 10% o que acontece comigo e 90% como eu reajo a isso.',
      'A melhor maneira de prever o futuro é criá-lo.',
      'Não deixe que o ruído das opiniões dos outros impeça que você escute a sua voz interior.',
      'A coisa mais importante é nunca desistir, nunca desistir de seus sonhos.',
      'Você é o único responsável por suas escolhas e ações.',
      'Não tenha medo de desistir do bom para perseguir o ótimo.',
      'Não espere por oportunidades. Crie você mesmo.',
      'Seja a mudança que você deseja ver no mundo.',
      'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
      'Se você quer algo que nunca teve, então você precisa fazer algo que nunca fez.',
      'O primeiro passo rumo ao sucesso é acreditar que você pode.',
      'Se você não está disposto a arriscar, esteja disposto a uma vida comum.',
      'Você tem que encontrar algo que você ame o suficiente para ser capaz de tomar riscos, saltar sobre os obstáculos e quebrar as barreiras.',
      'O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso. Se você ama o que faz, você será bem-sucedido.',
      'Você nunca é velho demais para definir outro objetivo ou sonhar um novo sonho.',
      'Acredite em seus sonhos e eles podem se tornar realidade. Acredite em si mesmo e eles se tornarão realidade.',
      'Faça o que você pode, com o que você tem, onde você está.',
      'Não importa o quão devagar você vá, desde que você não pare.',
      'Você é mais forte do que pensa. Acredite em si mesmo e seja invencível.',
      'Para ter sucesso, seu desejo de sucesso deve ser maior do que seu medo do fracasso.',
      'O caminho para o sucesso é fazer o que você ama.',
      'Acredite em si mesmo, todos os dias, a toda hora.',
      'Sucesso é a soma de pequenos esforços repetidos dia após dia.',
      'Pessoas bem-sucedidas não têm um caminho fácil, elas têm determinação.',
      'Não importa o quão ocupado você esteja, sempre arrume tempo para fazer algo que ame.',
      'Grandes realizações nunca vêm de sair da zona de conforto.',
      'As pessoas que são loucas o suficiente para pensar que podem mudar o mundo são as que o fazem.',
      'Comece onde você está. Use o que você tem. Faça o que você pode.',
      'Nada é impossível. A palavra em si diz: "Eu sou possível!"',
      'Acredite em você e tudo será possível.',
      'Não importa o que aconteceu no passado, você sempre tem a oportunidade de fazer diferente no futuro.',
      'Quando você quer algo, todo o universo conspira a seu favor.',
      'Você nunca falha até parar de tentar.',
      'A jornada de mil milhas começa com um único passo.',
      'Não tenha medo de falhar. Tenha medo de não tentar.',
      'Você não precisa ser perfeito para começar, mas precisa começar para ser perfeito.',
      'Pense grande e seus resultados serão grandes.',
      'Mantenha seus olhos nas estrelas e seus pés no chão.',
      'Seu tempo é limitado, então não o desperdice vivendo a vida de outra pessoa.',
      'Você pode ter tudo o que quiser se você estiver disposto a trabalhar duro por isso.',
      'Acredite em seu potencial ilimitado para aprender, crescer e alcançar sucesso.',
      'Não importa o quão difícil pareça, continue avançando. Você irá superar.',
      'A maior barreira para o sucesso é o medo do fracasso.'];

    this.gerarNumeros = [...Array(100)].map((_, i) => i);
  }

  componentDidMount() {
    this.verificarMobile();
    document.title = "Biscoito Da Sorte Online";
  }

  verificarMobile() {
    const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    this.setState({ mobile });
  }

  quebraBiscoito() {
    let state = this.state;
    let numerosAleatorios = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numerosAleatorios] + ' "'
    this.setState(state);
  }

  quebraBiscoito2() {
    let state = this.state;
    let obternumero = [];

    for (let i = 0; i < 6; i++) {
      let numeroAleatorio = Math.floor(Math.random() * this.gerarNumeros.length);
      obternumero.push(String(this.gerarNumeros[numeroAleatorio]));
    }

    state.numeros = 'Seus números da sorte: ' + obternumero.join(' - ')+ "."  ;
    this.setState(state);
}

  mouseEntrar() {
    this.setState({ passeMouseSobre: true });
  }

  deixarMouse() {
    this.setState({ passeMouseSobre: false });
  }

  clicarImagem() {
    this.quebraBiscoito();
    this.quebraBiscoito2();
    const { textoFrase } = this.state;
    const {numeros} = this.state;


    if (window.innerWidth <= 768) {
      let mensagem = textoFrase + "\n " +  numeros;
      alert(mensagem);    
    }
  }

  render() {
    const { textoFrase, passeMouseSobre, numeros } = this.state;
    const imgClass = passeMouseSobre ? 'img img-hover' : 'img';

    return (
      <div>
        <nav className="navbar">Biscoito da Sorte</nav>

        <div className="container">
          <h1> <strong> Biscoito Da Sorte Online: Clique Em 1 Biscoito E Veja A Sua Frase!</strong></h1>
          
          <h4>
            Os biscoitos da sorte são conhecidos por suas mensagens inspiradoras e enigmáticas.
            Originários da cultura chinesa, se tornaram populares globalmente.
            Ao abri-los, encontramos mensagens de sabedoria, encorajamento e humor.
            Esses biscoitos simbolizam boa sorte, positividade e otimismo, nos lembrando
            de que coisas boas estão por vir e nos encorajando a acreditar em nós mesmos e perseguir nossos sonhos.
          </h4>

          <img src={require('./assets/biscoito.png')} className="img"
            mouseEntrar={this.mouseEntrar}
            deixarMouse={this.deixarMouse}
            onClick={this.clicarImagem}
            onTouchStart={this.clicarImagem}
          />

          <img src={require('./assets/biscoito.png')} className="img"
            mouseEntrar={this.mouseEntrar}
            deixarMouse={this.deixarMouse}
            onClick={this.clicarImagem}
            onTouchStart={this.clicarImagem}
          />

          <img src={require('./assets/biscoito.png')} className="img"
            mouseEntrar={this.mouseEntrar}
            deixarMouse={this.deixarMouse}
            onClick={this.clicarImagem}
            onTouchStart={this.clicarImagem}
          />

          {!this.state.mobile && (
            <div className="textoFrase-container">
              <h3 className="textoFrase"> {this.state.textoFrase} </h3>
              <h3 className="textoFrase"> {this.state.numeros} </h3>
            </div>
          )}

          <h4>
            Os 3 biscoitos acima possuem mensagens diferentes para a sua vida.
            É uma única frase sobre a sua vida e o seu futuro.
            Antes de escolher 1, tenha muita fé e acredite sempre que vai obter as respostas que procura para a sua vida.
          </h4>

        </div>

        <footer className="rodapé" >
          Biscoito Da Sorte &copy; 2023 | &reg; Todos os direitos reservados.
        </footer>

      </div>
      

    );
  }
}



export default App;
