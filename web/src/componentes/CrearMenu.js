import React from 'react'


function formularioMenu(){

const menuACrear={
    'nombre':'',
    'descripcion':'',
    'categoria':'',
    'foto':'',
    'precio':'',
    'promocionA':'',
    'promocionB':'',
    'delivery':'',
    'turno':''
}

const categorias= ['Pizza','Cerveza','Hamburguesa','Sushi','Empanadas','Green','Vegano']
const horarios = ['09hs-12hs','13hs-16hs','17hs-20hs']
return(
    <div className="container">
        <form role="form">
            <div className="form-group">
                <label>Nombre</label>
                <input type="text" className="form-control"></input>

                <label>Descripcion</label>
                <textarea className="form-control" rows="5"></textarea>
                
                <label>Categoria</label>
                <select multiple >
                    {categorias.map(c => renderizar(c))}
                </select>
                
                <label>Foto</label>
                <input type="text" className="form-control"></input>
                
                <label>Precio</label>
                <input type="numeric" className="form-control"></input>
                
                <label>Promociones</label>
                <div className="row">                
                
                    <div className="col-md-6">
                        <h2>Promocion A</h2>
                        <label>Precio</label>
                        <input type="numeric"> </input>
                        <label>Minimo</label>
                        <input type="numeric"> </input>
                        <label>Maximo</label>
                        <input type="numeric"> </input>
                    </div>
                    <div className="col-md-6">
                        <h2>Promocion B (Opcional)</h2>

                        <label>Precio</label>
                        <input type="numeric"> </input>
                        <label>Minimo</label>
                        <input type="numeric"> </input>
                        <label>Maximo</label>
                        <input type="numeric"> </input>
                    </div>
                </div>


                <label>Vigencia</label>
                <div>

                </div>
                <div>

                </div>

                <label>Valor de Entrega</label>
                <input type="text" className="form-control"></input>
                
                <label>Turnos de Entrega</label>
                <select multiple >
                    {
                        Array.from(horarios).map(c => renderizar(c))
                    }
                </select>


            </div>
            <button type="submit" className="btn btn-default" onSubmit={menuACrear
            //aca iria la funcion de post para menu
        }>Crear</button>
        </form>
    </div>


)


function renderizar(c){
return(<option>{c}</option>)
}}


export default formularioMenu