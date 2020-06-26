import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        <strong>{props.quizResult}</strong>
      </div>
      {props.quizResult === 'Procure o setor de Medicina de sua unidade' ? (
        <div>
          <p>
            De acordo com os itens que assinalou existem algumas chances de que
            seja uma infecção por COVID-19. É recomendado que ligue para a linha
            "Disque Saúde" através do número 136 ou informe o hospital da sua
            região, seguindo as orientações dos profissionais. Caso seja
            indicado ir ao hospital para fazer exames e confirmar o diagnóstico,
            é importante ter alguns cuidados para evitar passar o vírus para
            outras pessoas como:
          </p>
          <ul>
            <li>Usar máscara;</li>
            <li>
              Cobrir a boca e o nariz com lenço de papel sempre que precisar
              tossir ou espirrar;
            </li>
            <li>Evitar o contato direto com outras pessoas;</li>
            <li>
              Lavar as mãos antes de sair de casa e assim que chegar ao
              hospital;
            </li>
            <li> Evitar usar transporte público;</li>
            <li> Evitar estar em ambientes fechados com outras pessoas.</li>
          </ul>
          <p>
            {' '}
            Além disso, é importante avisar as pessoas que estiveram em contato
            próximo nos últimos 14 dias, como familiares e amigos, sobre a
            suspeita, para que essas pessoas também possam ficar atentas ao
            surgimento de sintomas. Ainda assim, os seus sintomas também podem
            indicar outros problemas como Gripe, Resfriado, Asma, Tuberculose,
            Sinusite ou Alergia respiratória e outras infecções do sistema
            respiratório.
          </p>
        </div>
      ) : (
        <div>
          <p>
            Como nenhuma das perguntas descreve a sua situação, as chances de
            que seja uma infecção por COVID-19 são muito baixas. Ainda assim, se
            sente algum tipo de desconforto, recomendamos que ligue para o
            número do "Disque Saúde" - 136 - para receber orientações de
            profissionais de saúde gratuitamente.
          </p>
        </div>
      )}
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
