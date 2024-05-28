import "./Inputs.css";

const Inputs = ({pHolderI, TypesI, IconsI,LabelI,NamesI}) => {
    return(<div className="xd">
        <div className="contentinpts"> 
                <div className="ipt-loginpage">
                <label htmlFor={NamesI} id="Lbl"> {LabelI} </label>
                    <input placeholder={pHolderI} className="login_input" type={TypesI} />
                </div>
          </div>
        </div>);
}

export default Inputs;