module.exports = {
  UserInfo: `body,
html {
  margin: 0;
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

.button {
  border: none;
  background: #9fa628;
  color: #fff;
  padding: 10px;
  font-size: 15px;
}

.panel {
  width: 100%;
  height: 40px;
  display: flex;
  background: #9fa628;
  font-size: 15px;
  color: #fff;
  padding: 10px 20px;
  align-items: center;
}

.input {
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  color: #fff;
  font-size: 15px;
}

.input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}`,
  Library: `.library {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: 400px;
  grid-gap: 10px;
  margin-top: 30px;
}

.plate {
  color: #383436;
  padding: 20px;
  position: relative;
  border: none;
}

.plate:nth-child(3n) {
  background: #e2cbb5;
  color: #663f4c;
}

.plate:nth-child(3n + 1) {
  background: #663f4c;
  color: #fff;
}

.plate:nth-child(3n + 2) {
  background: #bf6c35;
  color: #fff;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.user {
  font-size: 12px;
  margin-top: 5px;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  transition: opacity 300ms;
}

.plate:hover .image {
  opacity: 0.2;
}`
};
