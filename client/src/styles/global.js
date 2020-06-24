import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Montserrat, sans-serif;
  color: #1a1b1f;
  font-size: 10px;
  line-height: 28px;
  font-weight: 400;
}

h1 {
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 40px;
  line-height: 62px;
  font-weight: 400;
}

h2 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 30px;
  line-height: 50px;
  font-weight: 400;
}

h3 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 25px;
  line-height: 46px;
  font-weight: 400;
}

h4 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 38px;
  font-weight: 400;
}

button {
  cursor: pointer;
}

h5 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 34px;
  font-weight: 500;
}

p {
  margin-bottom: 10px;
}

a {
  display: block;
  -webkit-transition: opacity 200ms ease;
  transition: opacity 200ms ease;
  color: # 1 a1b1f;
  text-decoration: none;
}

a: hover {
    color: #32343a;
}

a:active {
  color: # 43464 d;
}

ul {
    margin-top: 20 px;
    margin-bottom: 20 px;
    padding-left: 40 px;
    list-style-type: disc;
}

li {
    margin-bottom: 10 px;
}

img {
    display: block;
}

`
