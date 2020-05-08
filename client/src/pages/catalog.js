import React from "react";
import {Link} from "react-router-dom";
import "../index.css";

const Catalog = () => {
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>

      <form className="catalog-search-form form-inline">
        <input className="form-control" placeholder="Поиск" />
      </form>

      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="#">
            Все
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            Женская обувь
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            Мужская обувь
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            Обувь унисекс
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            Детская обувь
          </Link>
        </li>
      </ul>

      <div className="row">
        <div className="col-4">
          <div className="card catalog-item-card">
            <img
              src="https://cdn-images.farfetch-contents.com/12/93/06/52/12930652_13567910_1000.jpg"
              className="card-img-top img-fluid"
              alt="Босоножки 'MYER'"
            />
            <div className="card-body">
              <p className="card-text">Босоножки 'MYER'</p>
              <p className="card-text">34 000 руб.</p>
              <Link to="/products/:1" className="btn btn-outline-primary">
                Заказать
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card catalog-item-card">
            <img
              src="https://cdn-images.farfetch-contents.com/12/94/66/72/12946672_13518465_1000.jpg"
              className="card-img-top img-fluid"
              alt="Босоножки 'Keira'"
            />
            <div className="card-body">
              <p className="card-text">Босоножки 'Keira'</p>
              <p className="card-text">7 600 руб.</p>
              <Link
                to="/products/
                                    :1"
                className="btn btn-outline-primary"
              >
                Заказать
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card catalog-item-card">
            <img
              src="https://cdn-images.farfetch-contents.com/12/99/04/32/12990432_13705715_1000.jpg"
              className="card-img-top img-fluid"
              alt="Супергеройские кеды"
            />
            <div className="card-body">
              <p className="card-text">Супергеройские кеды</p>
              <p className="card-text">1 400 руб.</p>
              <Link to="/products/:1" class="btn btn-outline-primary">
                Заказать
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card catalog-item-card">
            <img
              src="https://cdn-images.farfetch-contents.com/12/93/06/52/12930652_13567910_1000.jpg"
              className="card-img-top img-fluid"
              alt="Босоножки 'MYER'"
            />
            <div className="card-body">
              <p className="card-text">Босоножки 'MYER'</p>
              <p className="card-text">34 000 руб.</p>
              <Link to="/products/:1" className="btn btn-outline-primary">
                Заказать
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card catalog-item-card">
            <img
              src="https://cdn-images.farfetch-contents.com/12/94/66/72/12946672_13518465_1000.jpg"
              className="card-img-top img-fluid"
              alt="Босоножки 'Keira'"
            />
            <div className="card-body">
              <p className="card-text">Босоножки 'Keira'</p>
              <p class="card-text">7 600 руб.</p>
              <Link to="/products/:1" className="btn btn-outline-primary">
                Заказать
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card catalog-item-card">
            <img
              src="https://cdn-images.farfetch-contents.com/12/99/04/32/12990432_13705715_1000.jpg"
              className="card-img-top img-fluid"
              alt="Супергеройские кеды"
            />
            <div className="card-body">
              <p className="card-text">Супергеройские кеды</p>
              <p className="card-text">1 400 руб.</p>
              <Link to="/products/:1" className="btn btn-outline-primary">
                Заказать
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-outline-primary">Загрузить ещё</button>
      </div>
    </section>
  );
};

export default Catalog;