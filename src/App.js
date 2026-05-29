import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {

      products: [

        {
          id: 1,
          name: "ASUS ROG Strix G16",
          price: 81999,
          category: "Ноутбуки",
          image: "https://content.rozetka.com.ua/goods/images/big/643582419.jpg",
          description: "Потужний ігровий ноутбук ASUS з відеокартою RTX та сучасним процесором Intel."
        },

        {
          id: 2,
          name: "Acer Nitro Lite NL16-71G-56P7",
          price: 39999,
          category: "Ноутбуки",
          image: "https://content2.rozetka.com.ua/goods/images/big/597709136.jpg",
          description: "Ігровий ноутбук Acer Nitro для навчання, роботи та сучасних ігор."
        },

        {
          id: 3,
          name: "HP 255R G10 (B39STAT)",
          price: 28999,
          category: "Ноутбуки",
          image: "https://content2.rozetka.com.ua/goods/images/big/635656400.jpg",
          description: "Надійний ноутбук HP для офісної роботи та повсякденного використання."
        },

        {
          id: 4,
          name: "Lenovo Legion 5 15IAX10",
          price: 102999,
          category: "Ноутбуки",
          image: "https://content1.rozetka.com.ua/goods/images/big/572677709.jpg",
          description: "Преміальний ігровий ноутбук Lenovo Legion з високою продуктивністю."
        },

        {
          id: 5,
          name: "iPhone 15 Pro 128GB",
          price: 36899,
          category: "Смартфони",
          image: "https://content.rozetka.com.ua/goods/images/big/364824471.jpg",
          description: "Сучасний смартфон Apple з потужною камерою та процесором A17 Pro."
        },

        {
          id: 6,
          name: "iPhone 17 Pro Max 256GB",
          price: 63650,
          category: "Смартфони",
          image: "https://content2.rozetka.com.ua/goods/images/big/594364394.jpg",
          description: "Флагманський смартфон Apple з OLED дисплеєм та великим акумулятором."
        },

        {
          id: 7,
          name: "Samsung Galaxy S26 Ultra 12/512GB",
          price: 70999,
          category: "Смартфони",
          image: "https://content2.rozetka.com.ua/goods/images/big/653651258.jpg",
          description: "Флагман Samsung з потужною камерою та AMOLED дисплеєм."
        },

        {
          id: 8,
          name: "Xiaomi 17T 12/512GB",
          price: 31499,
          category: "Смартфони",
          image: "https://content.rozetka.com.ua/goods/images/big/665972619.jpg",
          description: "Смартфон Xiaomi з високою продуктивністю та швидкою зарядкою."
        },

        {
          id: 9,
          name: "Samsung Galaxy Buds3 Pro Silver",
          price: 9599,
          category: "Навушники",
          image: "https://content1.rozetka.com.ua/goods/images/big/449730711.jpg",
          description: "Бездротові навушники Samsung з шумозаглушенням."
        },

        {
          id: 10,
          name: "Apple AirPods Pro USB-C",
          price: 14099,
          category: "Навушники",
          image: "https://content.rozetka.com.ua/goods/images/big/594443650.jpg",
          description: "Преміальні навушники Apple з просторовим аудіо."
        },

        {
          id: 11,
          name: "Logitech G735 Wireless Gaming Headset",
          price: 8699,
          category: "Навушники",
          image: "https://content.rozetka.com.ua/goods/images/big/282349169.jpg",
          description: "Ігрова гарнітура Logitech з якісним мікрофоном та RGB."
        },

        {
          id: 12,
          name: "29 LG UltraWide 29U511A-B",
          price: 6865,
          category: "Монітори",
          image: "https://content2.rozetka.com.ua/goods/images/big/605207620.jpg",
          description: "Широкоформатний монітор LG для роботи та мультимедіа."
        },

        {
          id: 13,
          name: "27 ASUS ROG Strix XG27UCGR Gen2",
          price: 24559,
          category: "Монітори",
          image: "https://content2.rozetka.com.ua/goods/images/big/665164194.jpg",
          description: "Ігровий 4K монітор ASUS з високою частотою оновлення."
        },

        {
          id: 14,
          name: "27 MSI MAG 274QRF-QD E2",
          price: 13999,
          category: "Монітори",
          image: "https://content2.rozetka.com.ua/goods/images/big/419088411.jpg",
          description: "Якісний 2K монітор MSI для ігор та професійної роботи."
        },

        {
          id: 15,
          name: "Logitech G Pro X Superlight 2",
          price: 6999,
          category: "Периферія",
          image: "https://content.rozetka.com.ua/goods/images/big/594807023.jpg",
          description: "Професійна бездротова ігрова миша Logitech."
        },

        {
          id: 16,
          name: "Ajazz AJ179 APEX",
          price: 4799,
          category: "Периферія",
          image: "https://content2.rozetka.com.ua/goods/images/big/618192148.jpg",
          description: "Бездротова миша Ajazz з RGB підсвіткою."
        },

        {
          id: 17,
          name: "Gaming MAXLIFE 5в1",
          price: 2929,
          category: "Периферія",
          image: "https://content1.rozetka.com.ua/goods/images/big/340721442.jpg",
          description: "Ігровий комплект 5в1 - Gaming (клавіатура, мишка, килимок, гарнітура, тримач кабелю) для геймерів."
        }

      ],

      selectedCategory: "Всі",
      sortType: "name",
      selectedProduct: null
    };
  }

  changeCategory(category) {
    this.setState({
      selectedCategory: category
    });
  }

  changeSort(event) {
    this.setState({
      sortType: event.target.value
    });
  }

  openProduct(product) {
    this.setState({
      selectedProduct: product
    });
  }

  closeProduct() {
    this.setState({
      selectedProduct: null
    });
  }

  render() {

    let filteredProducts = this.state.products;

    if (this.state.selectedCategory !== "Всі") {
      filteredProducts = filteredProducts.filter(
        product => product.category === this.state.selectedCategory
      );
    }

    if (this.state.sortType === "price") {
      filteredProducts.sort((a, b) => a.price - b.price);
    }
    else {
      filteredProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return (
      <div className="container">

        <h1>Інтернет-крамниця електроніки</h1>

        <div className="controls">

          <button onClick={() => this.changeCategory("Всі")}>
            Всі
          </button>

          <button onClick={() => this.changeCategory("Ноутбуки")}>
            Ноутбуки
          </button>

          <button onClick={() => this.changeCategory("Смартфони")}>
            Смартфони
          </button>

          <button onClick={() => this.changeCategory("Навушники")}>
            Навушники
          </button>

          <button onClick={() => this.changeCategory("Монітори")}>
            Монітори
          </button>

          <button onClick={() => this.changeCategory("Периферія")}>
            Периферія
          </button>

        </div>

        <div className="sort">

          <label>Сортування: </label>

          <select onChange={(event) => this.changeSort(event)}>

            <option value="name">
              За назвою
            </option>

            <option value="price">
              За ціною
            </option>

          </select>

        </div>

        <div className="products">

          {filteredProducts.map(product => (

            <div
              className="card"
              key={product.id}
              onClick={() => this.openProduct(product)}
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <h2>{product.name}</h2>

              <p>
                <strong>Категорія:</strong>
                {" "}
                {product.category}
              </p>

              <p className="price">
                {product.price} грн
              </p>

            </div>

          ))}

        </div>

        {this.state.selectedProduct && (

          <div className="modal">

            <div className="modal-content">

              <img
                src={this.state.selectedProduct.image}
                alt={this.state.selectedProduct.name}
              />

              <h2>
                {this.state.selectedProduct.name}
              </h2>

              <p>
                {this.state.selectedProduct.description}
              </p>

              <p className="price">
                {this.state.selectedProduct.price} грн
              </p>

              <button onClick={() => this.closeProduct()}>
                Закрити
              </button>

            </div>

          </div>

        )}

      </div>
    );
  }
}

export default App;
