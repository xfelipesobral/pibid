import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from '../components/menu'
import Rodape from '../components/rodape'
import Cabecalho from '../components/cabecalho'

import Inicio from '../pages/Inicio'
import Galeria from '../pages/Galeria'
import Projetos from '../pages/Projetos'
import Membros from '../pages/Membros'
import Publicacoes from '../pages/Publicacoes'
import Formulario from '../pages/Formulario'

export default function Router() {

    return (
        <div>
            <Menu />
            <Cabecalho />
            <BrowserRouter>
                <Switch>
                    <Route path='/formulario'>
                        <Formulario />
                    </Route>
                    <Route path='/publicacoes'>
                        <Publicacoes />
                    </Route>
                    <Route path='/membros'>
                        <Membros />
                    </Route>
                    <Route path='/projetos'>
                        <Projetos />
                    </Route>
                    <Route path='/galeria'>
                        <Galeria />
                    </Route>
                    <Route path='/'>
                        <Inicio />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Rodape />
        </div>
    )
}
