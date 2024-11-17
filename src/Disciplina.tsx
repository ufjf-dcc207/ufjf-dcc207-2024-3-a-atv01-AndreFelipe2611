import "./Disciplina.css";

type DisciplinaProps = {
    codigo: string;
    nome: string;
};


function Disciplina({codigo, nome}: DisciplinaProps){
    //const codigo = "DCC207";
    //const nome = "Desenvolvimento Web front-end";
    return(
        <div className="disciplina">
            <div>{codigo}</div>
            <div>{nome}</div>
        </div>
    );
}

export default Disciplina;