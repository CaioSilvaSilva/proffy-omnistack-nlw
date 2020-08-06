import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherList() {
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matérias</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/22553151?s=460&u=1951eb36ce52ece9ae96fdc6dea8dc443cc96cd8&v=4" alt="Caio Poli"/>
            <div>
              <strong>Caio Poli</strong>
              <span>Quimica</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química avançada;
            <br/><br/>
            Apaixonado por explodir coisas em labóratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram
            por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  )
}

export default TeacherList;