import React from "react";

import Pill from "../widgets/Pill";
import Card from "../widgets/Card";
import Anchor from "../widgets/Anchor";

import addBoard from "../../media/images/kanban/add-board.jpg";
import addList from "../../media/images/kanban/add-list.jpg";
import editBoard from "../../media/images/kanban/edit-board.jpg";
import editList from "../../media/images/kanban/edit-list.jpg";
import editCard from "../../media/images/kanban/edit-card.jpg";
import addCard from "../../media/images/kanban/add-card.jpg";
import drawerOpen from "../../media/images/kanban/drawer-open.jpg";
import drawerPinned from "../../media/images/kanban/drawer-pinned.jpg";
import app from "../../media/images/kanban/app.jpg";

const Kanban = () => {
  return (
    <div>
      <div className="case__header">
        <div className="case__header__background case__header__background--kanban" />
        <h1>Ultimate-Kanban!</h1>
        <div className="case__header__info">
          <div className="case__header__info__pills">
            <Pill type="react" />
            <Pill type="redux" />
            <Pill type="js" />
          </div>
          <div className="case__header__info__links">
            <Anchor href="https://github.com/patrickmao93/ultimate-kanban">
              <i className="fab fa-github" />
              View on Github
            </Anchor>
            <Anchor href="https://patrickmao93.github.io/ultimate-kanban/#/0">
              <i className="far fa-window-maximize" />
              Go to live page
            </Anchor>
          </div>
        </div>
      </div>
      <div className="case__content">
        <section>
          <h2>Summary</h2>
          <p className="case__content__paragraph">
            This app is mocked after the popular kanban app Trello, and it
            basically behaves like Trello, too. At this point, I finally started
            realizing the power of the react/redux combo is to make scalable
            projects. I constantly refactored code and made quite some resuable
            components for this project. The project has no backend so it saves
            data in browser's local storage. It is also still under
            construction, I am working towards adding a backend for it someday.
          </p>
        </section>
        <section>
          <h2>My Learnings</h2>
          <ul className="case__content__list">
            <li>Writing test for components using Enzyme</li>
            <li>
              Building resuable and composable components by utilizing ES6
              Static method
            </li>
            <li>
              Separating data and UI states for better controls over what should
              be saved in client
            </li>
            <li>Translating real world design into working prototype</li>
          </ul>
        </section>
        <section>
          <h2>Screenshots</h2>
          <div className="case__content__cards">
            <Card imgUrl={app} />
            <Card imgUrl={addBoard} />
            <Card imgUrl={addList} />
            <Card imgUrl={addCard} />
            <Card imgUrl={editList} />
            <Card imgUrl={editCard} />
            <Card imgUrl={editBoard} />
            <Card imgUrl={drawerOpen} />
            <Card imgUrl={drawerPinned} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Kanban;
