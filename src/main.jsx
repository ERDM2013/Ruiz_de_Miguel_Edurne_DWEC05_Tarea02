// Archivo para contectar el React con el HTML y renderizarlo


import ReactDOM from 'react-dom/client'
import './index.css' // para que tambien me coja los estilos CSS
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
