import estilo from './Cabecalho.module.css'

export function Cabecalho(){
    return (
        <header className={estilo.cabecalho}>
            <h1 className={estilo.titulo}>Nevermore</h1>
        </header>
    )
}